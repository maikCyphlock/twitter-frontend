"use client";
import { useState, ChangeEvent, useEffect } from "react";
import { useSupabase } from "./supabase-provider";

function LikeTweet({ TweetId, children }) {
  const { supabase, session } = useSupabase();
  const [tweet, setTweet] = useState("");
  const [open, setOpen] = useState(false);
  const [likes, setLikes] = useState(0);

  const Fetch = async () => {
    if (!session) return null;
    const { count:Likes } = await supabase
      .from("likes")
      .select("*" ,{ count: "exact", head: true })
      .eq("tweet_like_id", TweetId);
    console.log({Likes});

    return setLikes(Likes || 0);
  };

  const LikesTweet = async () => {
    if (!session) return null;
    const likesCount = await supabase
      .from("likes")
      .select("*").match({ author_id: session?.user.id, tweet_like_id: TweetId });

    console.log({likesCount});
    if(likesCount?.data?.length > 0  ) {
      const { data:Delete } = await supabase.from("likes")
      .delete().match({ author_id: session?.user.id, tweet_like_id: TweetId }).then(
        //@ts-ignore
        setLikes(likes - 1)
      )
      
      return Delete
    }

   
    const Like = await supabase
      .from("likes")
      .insert({ author_id: session.user.id, tweet_like_id: TweetId }).then(
        //@ts-ignore
        setLikes(likes + 1)
      );


  };

  useEffect(() => {
    Fetch();
  }, []);

  const HandlerModal = () => {
    LikesTweet();
  };

  if (!session?.user.id) return null;
  return (
    <>
      <div className="flex justify-center items-center gap-2" onClick={() => HandlerModal()}>
        {children}
        {likes || ''}
      </div>
    </>
  );
}

export default LikeTweet;
