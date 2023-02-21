"use client";
import { useState, useEffect } from "react";
import { useSupabase } from "./supabase-provider";
function FollowUser({ userId }) {
  const [isFollow, setIsFollow] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const { supabase, session } = useSupabase();

  const handlerClick = () => {
    if (!isFollow) {
      addFollow();
    } else {
      removeFollow();
    }
  };
  const addFollow = async () => {
    const { data, error } = await supabase.from("follows").insert({
      user_id: session?.user.id,
      user_to_follow: userId,
    });

    if (!error) setIsFollow(() => true);
    return data;
  };
  const FindFollow = async () => {
    const { data, error } = await supabase
      .from("follows")
      .select("*")
      .match({ user_to_follow: userId, user_id: session?.user.id });

    console.log({ data });

    if (!error)
      setIsFollow(() => {
        if (data === null || data === undefined || data.length === 0) {
          return false;
        } else {
          return true;
        }
      });
    return data;
  };
  const removeFollow = async () => {
    const { data, error } = await supabase
      .from("follows")
      .delete()
      .match({ user_to_follow: userId, user_id: session?.user.id });

    console.log({ data });
    if (!error) setIsFollow(() => false);
    return data;
  };
  const Fetch = async () => {
    if (!session) return null;
    const { data } = await supabase
      .from("user")
      .select("*")
      .eq("id", session.user.id);
    setCurrentUser(() => data[0].id);
    console.log(data[0].id);
    console.log({ userId });
  };

  useEffect(() => {
    Fetch();
  }, []);

  useEffect(() => {
    FindFollow();
  }, [currentUser]);

  if (userId === session.user.id) return null;
  const FollowBtn = () => (
    <button
      onClick={() => handlerClick()}
      className="p-2 rounded-xl bg-slate-800 self-start text-slate-50 font-black font-sans tracking-wider capitalize hover:bg-transparent hover:text-slate-800 hover:border-slate-800 border-transparent border-2 md:w-32"
    >
      <span>follow</span>
    </button>
  );

  const UnFollowBtn = () => (
    <button
      onClick={() => handlerClick()}
      className="p-2 group rounded-xl bg-transparent border-2 hover:border-red-500 hover:bg-red-50 border-slate-800 self-start text-slate-800 font-black font-sans tracking-wider capitalize md:w-32"
    >
      <span className="group-hover:hidden">following</span>
      <span className="hidden group-hover:block  text-red-500">unfollow</span>
    </button>
  );
  return !isFollow ? <FollowBtn /> : <UnFollowBtn />;
}

export default FollowUser;
