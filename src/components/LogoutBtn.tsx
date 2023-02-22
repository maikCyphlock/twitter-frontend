"use client";

import { useEffect, useState } from "react";
import { useSupabase } from "./supabase-provider";

// Supabase auth needs to be triggered client-side
export default function LogoutBtn() {
  const { supabase, session } = useSupabase();
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.log({ error });
    }
  };

  return (
    <button
      className="px-3 py-2 bg-red-100 rounded-lg text-red-800"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
}
