"use client";
import { useSupabase } from "@components/supabase-provider";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import InteractionsTweets from "@/components/InteractionsTweets";
import UpdateTweet from "@/components/UpdateTweet";

function Page() {
  const { session, supabase } = useSupabase();
  const [user, setUser] = useState([]);
  useEffect(() => {
    async function Get() {
      const { data } = await supabase
        .from("tweets")
        .select("*, user(*)")
        .filter("attached_tweet", "is", null)
        .limit(40);
      console.log(data);
      setUser([...data]);
    }
    Get();
  }, [session.user.id, supabase]);
  return (
    <section className="container px-4 mx-auto justify-center items-center  flex flex-col gap-4  min-h-screen ">
      <section className="flex flex-col my-10 mx-4 w-full max-w-xl gap-8 border-t border-x">
        {user.map((tweet) => (
          <div className="flex gap-4 border-b p-4" key={tweet.id}>
            <Image
              width={68}
              height={68}
              className=" shrink-0 w-12 h-12 md:h-14 md:w-14 rounded-full object-cover"
              src={tweet.user.img_url}
              alt={tweet.user.fullname}
            />
            <div className="grow">
              <div className="flex gap-2">
                <Link href={`${tweet.user.username}/status/${tweet.id}`}>
                  <h1 className="font-semibold text-ellipsis ">
                    {tweet.user.fullname}
                  </h1>
                  <h2 className="text-gray-500 text-ellipsis ">
                    @{tweet.user.username}
                  </h2>
                </Link>

                <UpdateTweet TweetId={tweet.id} Author_id={tweet.user.id} />
              </div>
              <Link href={`${tweet.user.username}/status/${tweet.id}`}>
                <p className="max-w-md whitespace-pre-wrap">{tweet.content}</p>
              </Link>
              <InteractionsTweets TweetId={tweet.id} />
            </div>

            <div></div>
          </div>
        ))}
      </section>
    </section>
  );
}

export default Page;
