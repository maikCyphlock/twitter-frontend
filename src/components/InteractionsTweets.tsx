"use client";
import { useState, ChangeEvent, useEffect } from "react";
import { useSupabase } from "./supabase-provider";
import { Heart, Repost, Comments } from "@/components/Icon";
import CommentTweet from "./CommentTweet";
import Retweet from "./ReTweet";
import LikeTweet from "./LikeTweet";
export default function InteractionsTweets({ TweetId }) {
  const { supabase, session } = useSupabase();
  const [tweetCount, setTweetCount] = useState();
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({});

  const Fetch = async () => {
    if (!session) return null;
    const { data } = await supabase
      .from("user")
      .select("*")
      .eq("id", session.user.id);
    console.log(data);
    const user = data?.[0];
    return setUser(() => ({ ...user }));
  };

  useEffect(() => {
    Fetch();
  }, []);

  const FetchTweet = async () => {
    if (!session) return null;
    const Tweet = await supabase
      .from("tweets")
      .select("*", { count: "exact", head: true })
      .eq("attached_tweet", TweetId);
    console.log({ Tweet });
    // @ts-ignore
    return setTweetCount(Tweet.count);
  };

  useEffect(() => {
    FetchTweet();
  }, []);

  return (
    <div className="flex gap-6 p-4 justify-around">
      <div className="flex justify-center items-center gap-2">
        <button className="p-2  fill-slate-400 hover:fill-blue-600 hover:bg-blue-100 rounded-full">
          <CommentTweet TweetId={TweetId}>
            <Comments className="w-6 h-6 " />
            {tweetCount ? tweetCount : ""}
          </CommentTweet>
        </button>
      </div>
      <div className="flex justify-center items-center gap-2">
        <button className="p-2 fill-slate-400 hover:fill-green-600 hover:bg-green-100 rounded-full">
          <Retweet TweetId={TweetId}>
            <Repost className="w-6 h-6 " />
          </Retweet>
        </button>
      </div>
      <div className="flex justify-center items-center gap-2">
        <button className="p-2 fill-slate-400 hover:fill-red-600 hover:bg-red-100 rounded-full">
          <LikeTweet TweetId={TweetId}>
            <Heart className="w-6 h-6 " />
          </LikeTweet>
        </button>
      </div>
    </div>
  );
}
