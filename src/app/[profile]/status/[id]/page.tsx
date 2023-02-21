import { createServerClient } from "@utils/supabase-server";
import Image from "next/image";
import Link from "next/link";
import InteractionsTweets from "@/components/InteractionsTweets";
import UpdateTweet from "@components/UpdateTweet";

export const revalidate = 0;

async function page({ params }:any) {
  const supabase = createServerClient();

  const { data } = await supabase
    .from("tweets")
    .select("*, author_id(*)")
    .eq("id", params.id);

  const { data: TweetComments } = await supabase
    .from("tweets")
    .select("*, author_id(*)")
    .eq("attached_tweet", params.id)
    .not("retweet", "is", true);
  console.log({ TweetComments });

  const tweet =  data?.[0];
  if (!tweet)
    return (
      <section className="flex flex-col items-center py-10 w-full max-w-xl gap-8 border-t">
        not tweets published yet
      </section>
    );

  return (
    <section className="container p-4 mx-auto items-center  flex flex-col   min-h-screen">
      <section className="flex flex-col py-10 w-full max-w-2xl gap-8 px-4 border-l border-r ">
        <div key={tweet.id} className="flex gap-4 grow flex-col">
          <div>
            <div className="flex gap-2">
              <Image
                width={128}
                height={128}
                className="shrink-0  w-12 h-12 md:h-14 md:w-14 rounded-full object-cover"
                src={tweet?.author_id?.img_url}
                alt={tweet?.author_id?.fullname}
              />
              <div>
                <h1 className="font-semibold">{tweet?.author_id?.fullname}</h1>
                <h2 className="text-gray-500">@{tweet?.author_id?.username}</h2>
              </div>
              <UpdateTweet TweetId={tweet.id} Author_id={tweet?.author_id?.id} />
            </div>
            <p className="font-sans max-w-md whitespace-pre-wrap py-4">
              {tweet.content}
            </p>
            <InteractionsTweets TweetId={tweet.id}  />
          </div>
        </div>
      </section>
      {TweetComments?.map((tweet) => (
        <section
          key={tweet.id}
          className="flex flex-col py-10 w-full max-w-2xl gap-8 border-t border-l px-6 border-r"
        >
          <div key={tweet.id} className="flex gap-4 grow flex-col">
            <div>
              <div className="flex gap-2">
                <Link href={`${tweet.author_id.username}`}>
                  <Image
                    width={128}
                    height={128}
                    className="shrink-0  w-12 h-12 md:h-14 md:w-14 rounded-full object-cover"
                    src={tweet.author_id.img_url}
                    alt={tweet.author_id.fullname}
                  />
                </Link>

                <div>
                  <h1 className="font-semibold">{tweet.author_id.fullname}</h1>
                  <Link href={`${tweet.author_id.username}/status/${tweet.id}`}>
                    <h2 className="text-gray-500">
                      @{tweet.author_id.username}
                    </h2>
                  </Link>
                </div>
                <UpdateTweet TweetId={tweet.id} Author_id={tweet.author_id.id} />
              </div>
              <Link href={`${tweet.author_id.username}/status/${tweet.id}`}>
                <p className="font-sans max-w-md whitespace-pre-wrap pl-16">
                  {tweet.content}
                </p>
              </Link>
              <InteractionsTweets TweetId={tweet.id} />
            </div>
          </div>
        </section>
      ))}
    </section>
  );
}

export default page;
