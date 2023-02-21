"use client";
import { useSupabase } from "@components/supabase-provider";
import { useState, useEffect, ChangeEvent } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function UserCreate() {
  const { session, supabase } = useSupabase();
  const [avatar, setAvatar] = useState("");

  const [user, setUser] = useState({
    bio: "",
    username: "",
    fullname: "",
    img_url: "",
  });

  useEffect(() => {
    console.log({ user });
    console.log({ avatar });
  }, [user]);

  const convertBase64 = (file?: File) => {
    if (!file) return "";
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const HandlerUserClick = async (e) => {
    e.preventDefault();
    if (
      user.username.length < 1 ||
      user.fullname.length < 1 ||
      user.img_url.length < 1 ||
      user.bio.length < 1
    )
      return console.error("faltan datos");
    const Fetch = async () => {
      const data = await supabase
        .from("user")
        .update(user)
        .eq("id", session?.user.id);

      if (data.error) throw new Error(data.error.message);

      return data;
    };

    toast.promise(Fetch(), {
      pending: "Promise is pending",
      success: "usuario creado👌",
      error: "Este usuario ya existe",
    });
  };

  const uploadImage = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target?.files?.[0];
    const base64: any = await convertBase64(file);
    setAvatar(base64);
    setUser({ ...user, img_url: base64 });
  };

  const handlerText = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = event.target;
    setUser({ ...user, [name]: value.trim() });
  };
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>

        <p className="mt-4 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
          nulla eaque error neque ipsa culpa autem, at itaque nostrum!
        </p>
      </div>

      <form action="" className="mx-auto mt-8 mb-0 max-w-md space-y-4">
        <div>
          <label htmlFor="fullname" className="sr-only">
            First name
          </label>

          <div className="relative">
            <input
              type="text"
              name="fullname"
              className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
              placeholder="Full name"
              onChange={(e) => handlerText(e)}
              maxLength={32}
              required
            />

            <span className="absolute inset-y-0 right-4 inline-flex items-center">
              <svg
                className="h-5 w-5 fill-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M20.005 5.995h-1v2h1v8h-1v2h1c1.103 0 2-.897 2-2v-8c0-1.102-.898-2-2-2zm-14 4H15v4H6.005z"></path>
                <path d="M17.005 17.995V4H20V2h-8v2h3.005v1.995h-11c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h11V20H12v2h8v-2h-2.995v-2.005zm-13-2v-8h11v8h-11z"></path>
              </svg>
            </span>
          </div>
        </div>
        <div>
          <label htmlFor="username" className="sr-only">
            username
          </label>

          <div className="relative">
            <input
              type="text"
              name="username"
              className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
              placeholder="username"
              maxLength={32}
              required
              onChange={(e) => handlerText(e)}
            />

            <span className="absolute inset-y-0 right-4 inline-flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </span>
          </div>
        </div>
        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <div className="relative">
            <textarea
              name="bio"
              className="w-full  rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
              placeholder="write your biography"
              maxLength={300}
              rows={5}
              required
              onChange={(e) => handlerText(e)}
            />

            <span className="absolute inset-y-0 right-4 inline-flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                aria-hidden="true"
                className="w-10 h-10 mb-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <img src={avatar} width={128} height={128} alt="" />
            <input
              name="dropzone"
              id="dropzone-file"
              type="file"
              onChange={(e) => uploadImage(e)}
              className="hidden"
            />
          </label>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">
            No account?
            <a className="underline px-2" href="">
              Sign up
            </a>
          </p>

          <button
            type="submit"
            onClick={(e) => HandlerUserClick(e)}
            className="ml-3 inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
          >
            create user
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default UserCreate;
