import { createServerClient } from "@utils/supabase-server";
import Image from "next/image";
import Link from "next/link";

// do not cache this page
export const revalidate = 0;

// the user will be redirected to the landing page if they are not signed in
// check middleware.tsx to see how this routing rule is set
export default async function page({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const supabase = createServerClient();

  const { data } = await supabase.from("user").select("*").eq("id", params.id);
  const { data: follows } = await supabase
    .from("follows")
    .select("*")
    .eq("user_to_follow", params.id);
  console.log(follows);
  const user = await data?.[0];

  return (
    <div>
      <section className="container p-4 mx-auto items-center  flex flex-col gap-4  min-h-screen">
        <div className="flex flex-col  w-full max-w-xl">
          <div>
            <h1 className="font-semibold text-lg">{user?.fullname}</h1>
            <h2 className="text-gray-500 text-xs">@{user?.username}</h2>
          </div>

          <div className="flex flex-col gap-4">
            {follows &&
              follows?.map(({ id, user_id }) => (
                 // @ts-ignore
                <FollowUser key={id} id={user_id} />
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const FollowUser = async ({ id }: { id: string }) => {
  const supabase = createServerClient();

  const { data } = await supabase.from("user").select("*").eq("id", id);

  return (
    <section className="flex flex-col py-10 w-full max-w-xl gap-8">
      {data?.map((user) => (
        <Link key={user.id} href={`./${user.username}`}>
          <div className="flex gap-4">
            <Image
              width={68}
              height={68}
              className="  shrink-0  w-12 h-12 md:h-14 md:w-14 rounded-full object-cover"
              src={user.img_url || ""}
              alt={user.fullname || ""}
            />
            <div>
              <div className="flex gap-2">
                <h1 className="font-semibold">{user.fullname}</h1>
                <h2 className="text-gray-500">@{user.username}</h2>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
};
