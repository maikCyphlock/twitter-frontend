"use client";
import Link from "next/link";
import { useSupabase } from "./supabase-provider";
import { useEffect, useState } from "react";
export function Navbar() {
  const { session, supabase } = useSupabase();
  const [user, setUser] = useState({});
  useEffect(() => {
    async function Get() {
      const { data } = await supabase
        .from("user")
        .select("*")
        .eq("id", session.user.id);
      console.log(data);
      setUser(data[0]);
    }
    Get();
  }, [session.user.id, supabase]);

  return (
    <nav className="flex justify-center bg-slate-100/50  fixed bottom-0 w-full  ">
      <div className="flex p-4 gap-8">
        <Twitter />

        <Link href="/feed">
          <Home />
        </Link>
        <Link href="/feed">
          <Notifications />
        </Link>
        <Link href={`/${user.username}`}>
          <User />
        </Link>
      </div>
    </nav>
  );
}

export function NavbarWithout() {
  return (
    <nav className="flex justify-center bg-slate-100/50  fixed bottom-0 w-full  ">
      <div className="flex p-4 gap-8">
        <Twitter />

        <Link href="/feed">
          <Home />
        </Link>
        <Link href="/feed">
          <Notifications />
        </Link>
        <Link href={`/feed`}>
          <User />
        </Link>
      </div>
    </nav>
  );
}

export function Twitter() {
  return (
    <svg className="fill-sky-400" viewBox="0 0 24 24" width="24" height="24">
      <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 002.048-2.578 9.3 9.3 0 01-2.958 1.13 4.66 4.66 0 00-7.938 4.25 13.229 13.229 0 01-9.602-4.868c-.4.69-.63 1.49-.63 2.342A4.66 4.66 0 003.96 9.824a4.647 4.647 0 01-2.11-.583v.06a4.66 4.66 0 003.737 4.568 4.692 4.692 0 01-2.104.08 4.661 4.661 0 004.352 3.234 9.348 9.348 0 01-5.786 1.995 9.5 9.5 0 01-1.112-.065 13.175 13.175 0 007.14 2.093c8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602a9.47 9.47 0 002.323-2.41z" />
    </svg>
  );
}

export function Home() {
  return (
    <svg className="w-fit h-fit" viewBox="0 0 24 24" width="24" height="24">
      <path d="M12 9a4 4 0 100 8 4 4 0 000-8zm0 6a2 2 0 11-.001-3.999A2 2 0 0112 15zm0-13.304L.622 8.807l1.06 1.696L3 9.679V19.5A2.5 2.5 0 005.5 22h13a2.5 2.5 0 002.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM19 19.5a.5.5 0 01-.5.5h-13a.5.5 0 01-.5-.5V8.429l7-4.375 7 4.375V19.5z" />
    </svg>
  );
}

export function Notifications() {
  return (
    <svg
      className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <path d="M19.993 9.042a8.062 8.062 0 00-15.996.009L2.866 18H7.1a5.002 5.002 0 009.8 0h4.236l-1.143-8.958zM12 20a3.001 3.001 0 01-2.829-2h5.658A3.001 3.001 0 0112 20zm-6.866-4l.847-6.698a6.062 6.062 0 0112.028-.007L18.864 16H5.134z" />
    </svg>
  );
}

export function User() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z" />
    </svg>
  );
}
export function LeftArrow() {
  return (
    <svg className="fill-black" viewBox="0 0 24 24">
      <path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z" />
    </svg>
  );
}
export function UserNavbar({ user }) {
  return (
    <div className="border-b p-4 flex items-center gap-4">
      <Link href="/feed">
        <div className="h-12 w-12 rounded-full hover:bg-slate-400/10 p-2">
          <LeftArrow />
        </div>
      </Link>
      <h1 className="font-bold text-2xl">{user.Name}</h1>
    </div>
  );
}
