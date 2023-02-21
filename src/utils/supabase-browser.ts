import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import type { Database } from "./database";
export const createBrowserClient = () =>
  createBrowserSupabaseClient<Database>();
