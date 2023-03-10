"use client";
import { useState, ChangeEvent, useEffect } from "react";
import { useSupabase } from "./supabase-provider";

function Retweet({ TweetId, children }) {
  const { supabase, session } = useSupabase();
  const [tweet, setTweet] = useState("");
  const [retweet, setReTweet] = useState(0);
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({ id: "", img_url: "" });

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
  const FetchRetweet = async () => {
    if (!session) return null;
    const { count: Retweets } = await supabase
      .from("tweets")
      .select("*", { count: "exact", head: true })
      .match({ attached_tweet: TweetId, retweet: true });

    console.log({ Retweets });
    setReTweet(Retweets);
  };
  useEffect(() => {
    Fetch();
    FetchRetweet();
  }, []);

  const handlerText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setTweet(() => value.trim());
  };
  const SendTweet = async () => {
    if (!tweet.trim()) return null;

    const res = await supabase.from("tweets").insert({
      content: tweet,
      author_id: user.id,
      attached_tweet: TweetId,
      retweet: true,
    });
    console.log(res);
    setOpen(false);
  };
  const HandlerModal = () => {
    setOpen((prev) => !prev);
  };

  if (!session?.user.id) return null;
  return (
    <>
      <div
        className="flex justify-center items-center gap-2"
        onClick={(e) => HandlerModal()}
      >
        {children}
        {retweet || ""}
      </div>
      <dialog
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
        open={open}
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        <div className="fixed inset-0  overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg w-screen">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10 overflow-hidden">
                    <img src={user.img_url} alt="" />
                  </div>

                  <div className="mt-3 text-center w-full sm:mt-0 sm:ml-4 sm:text-left">
                    <div className="mt-2">
                      <textarea
                        onChange={(e) => handlerText(e)}
                        className="border-none text-sm text-gray-500 w-full min-h-full p-4"
                        autoFocus
                        placeholder="write something"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => SendTweet()}
                >
                  Tweet
                </button>
                <button
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => HandlerModal()}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default Retweet;
