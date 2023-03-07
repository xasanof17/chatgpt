"use client";
import { db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import React, { FormEvent, useState } from "react";
import { IoSend } from "react-icons/io5";
import { toast } from "react-hot-toast";

interface Props {
  chatId: string;
}

const Send = ({ chatId }: Props) => {
  const [prompt, setPrompt] = useState("");
  const { data: session } = useSession();

  // useSWR to get model
  const model = "text-davinci-003";

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!prompt || prompt.length == 0) return;

    const input = prompt.trim();
    setPrompt("");

    const message: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar:
          session?.user?.image ||
          `https://ui-avatars.com/api/?name=${session?.user?.name}`,
      },
    };
    await addDoc(
      collection(
        db,
        "users",
        session?.user?.email!,
        "chats",
        chatId,
        "messages"
      ),
      message
    );

    const notification = toast.loading("ChatGPT is thinking...");

    await fetch("/api/askQuestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: input,
        chatId,
        model,
        session,
      }),
    }).then(() => {
      // Toast notification to say successful!
      toast.success("ChatGPT has responded!", {
        id: notification,
      });
    });
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white p-2 dark:bg-black sm:absolute md:p-3 xl:p-5 2xl:bottom-12">
      <form
        onSubmit={sendMessage}
        className="flex items-center space-x-1 pb-2 sm:ml-0 sm:pb-0 lg:mx-auto xl:max-w-6xl"
      >
        <input
          type="text"
          name="message"
          placeholder="Type your message..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="block w-full resize-none rounded-md border-2 border-transparent border-slate-700 bg-grey-100 p-2 text-base text-grey-200 shadow-xl shadow-slate-300 outline-none focus:border-blue focus:bg-slate-200/60 focus:text-dark-100 disabled:cursor-not-allowed disabled:text-gray-300 dark:bg-dark-100 dark:text-grey-100 dark:shadow-slate-800 dark:focus:border-blue dark:focus:bg-light dark:focus:ring-blue lg:text-lg"
          autoFocus
          disabled={!session}
          required
        />
        <button
          disabled={!prompt || !session}
          type="submit"
          className="flex cursor-pointer items-center justify-center rounded-full p-1 outline-none hover:bg-slate-200 focus:border focus:border-light focus:bg-slate-800 disabled:cursor-not-allowed dark:hover:bg-slate-800 lg:p-3"
        >
          <IoSend fontSize={22} className="text-blue" />
        </button>
      </form>
    </div>
  );
};

export default Send;
