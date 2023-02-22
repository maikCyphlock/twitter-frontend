import "server-only";

import { Navbar, NavbarWithout } from "@/components/Navbar";
import SupabaseListener from "@/components/supabase-listener";
import SupabaseProvider from "@/components/supabase-provider";

import "./globals.css";
import { createServerClient } from "../utils/supabase-server";

import type { SupabaseClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/utils/database";

export type TypedSupabaseClient = SupabaseClient<Database>;

// do not cache this layout
export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html lang="en">
      <head />
      <body>
        <SupabaseProvider session={session}>
          <SupabaseListener serverAccessToken={session?.access_token} />
          <div className="min-h-screen relative">
            {children}
            {session ? <Navbar /> : <></>}
          </div>
        </SupabaseProvider>
      </body>
    </html>
  );
}
