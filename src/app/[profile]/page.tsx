import AddTweet from "@/components/AddTweet";
import FollowUser from "@/components/FollowUser";
import InteractionsTweets from "@/components/InteractionsTweets";
import UpdateTweet from "@/components/UpdateTweet";
import { User } from "@supabase/supabase-js";
import { createServerClient } from "@utils/supabase-server";
import Image from "next/image";
import Link from "next/link";
export const revalidate = 0;

// TODO: CREATE ERROR UI
// TODO: CREATE A MODAL THAT SHOWS USER NOT LOGGED IN
export default async function page({ params }: any) {
  const supabase = createServerClient();

  const { data } = await supabase
    .from("user")
    .select("*")
    .eq("username", params.profile);

  const {
    data: { session },
  } = await supabase.auth.getSession();
  const user = data?.[0];
  const tweets = await supabase
    .from("tweets")
    .select("*, author_id(*)")
    .eq("author_id", user?.id)
    .filter("attached_tweet", "is", null);

  const following = await supabase
    .from("follows")
    .select("*", { count: "exact", head: true })
    .eq("user_id", user?.id);

  const followers = await supabase
    .from("follows")
    .select("*", { count: "exact", head: true })
    .eq("user_to_follow ", user?.id);

  return (
    <div>
      <section className="container p-4 mx-auto justify-center items-center  flex flex-col gap-4  min-h-screen">
        <div className="flex flex-col py-10 w-full max-w-xl">
          <div className="flex justify-between">
            <Image
              width={128}
              height={128}
              className=" w-24 h-24 rounded-full object-cover shrink-0"
              src={user?.img_url || ""}
              alt={user?.fullname || ""}
            />

            <FollowUser userId={user?.id} />
          </div>
          <div>
            <h1 className="font-semibold text-2xl">{user?.fullname}</h1>
            <h2 className="text-gray-500">@{user?.username}</h2>
          </div>
          <div className="py-4">{user?.bio}</div>
          <div className="flex gap-4">
            <Link href={`${user?.username}/following/${user?.id}`}>
              <span>{following.count || 0} followings</span>
            </Link>
            <Link href={`${user?.username}/followers/${user?.id}`}>
              <span>{followers.count || 0} followers</span>
            </Link>
          </div>
        </div>
        <Tweets user={user} tweet={tweets} />
      </section>
      <AddTweet />
    </div>
  );
}

const Tweets = ({ user, tweet }: any) => {
  const { data } = tweet;

  if (data.length === 0 || !data)
    return (
      <section className="flex flex-col items-center py-10 w-full max-w-xl gap-8 border-t">
        not tweets published yet
      </section>
    );
  return (
    <section className="flex flex-col py-10 w-full max-w-xl gap-8 border-t">
      {data.map((tweet: any) => (
        <div className="flex gap-4" key={tweet.id}>
          <Image
            width={68}
            height={68}
            className=" shrink-0 w-12 h-12 md:h-14 md:w-14 rounded-full object-cover"
            src={user.img_url}
            alt={user.fullname}
          />
          <div className="grow">
            <div className="flex gap-2">
              <Link href={`${user.username}/status/${tweet.id}`}>
                <h1 className="font-semibold text-ellipsis ">
                  {user.fullname}
                </h1>
                <h2 className="text-gray-500 text-ellipsis ">
                  @{user.username}
                </h2>
              </Link>

              <UpdateTweet TweetId={tweet.id} Author_id={user.id} />
            </div>
            <Link href={`${user.username}/status/${tweet.id}`}>
              <p className="max-w-md whitespace-pre-wrap">{tweet.content}</p>
            </Link>
            <InteractionsTweets TweetId={tweet.id} />
          </div>

          <div></div>
        </div>
      ))}
    </section>
  );
};
