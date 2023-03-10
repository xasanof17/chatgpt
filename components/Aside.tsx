"use client";
import React, { useEffect, useState } from "react";
import { IoMdAdd, IoMdClose } from "react-icons/io";
import { BsMoonFill, BsFillSunFill } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import openai from "../assets/openai-icon.svg";
import { useRouter } from "next/navigation";
import {
  addDoc,
  collection,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import ChatRow from "./ChatRow";

interface ChatButton {
  title: string;
  icon?: React.ReactNode;
  onClick: () => void;
}

const ChatButton = ({ title, icon, onClick }: ChatButton) => {
  return (
    <button onClick={onClick} className="sideBarButton">
      {icon && icon}
      <span>{title}</span>
    </button>
  );
};

const Aside = () => {
  const [show, setShow] = useState(false);
  const [theme, setTheme] = useState("dark");
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    theme === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [theme]);

  const switchTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const createChat = async () => {
    const doc = await addDoc(
      collection(db, "users", session?.user?.email!, "chats"),
      {
        messages: [],
        userId: session?.user?.email,
        createdAt: serverTimestamp(),
      }
    );
    router.push(`/chat/${doc.id}`);
  };

  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session?.user?.email!, "chats"),
        orderBy("createdAt", "desc")
      )
  );

  return (
    <div className="aside">
      <div
        className={`${
          show ? "right-3" : "left-3 lg:hidden"
        } fixed top-3 z-50 flex items-center justify-center`}
      >
        <button
          onClick={() => (show ? setShow(false) : setShow(true))}
          className={`flex items-center justify-center ${
            show
              ? "bg-slate-200 dark:bg-slate-700"
              : "bg-slate-200 hover:bg-slate-400 dark:bg-blue dark:hover:bg-slate-800"
          } rounded-full p-1.5 focus:bg-slate-200 dark:focus:bg-slate-800`}
        >
          {show ? (
            <IoMdClose fontSize={22} className="text-blue dark:text-grey-100" />
          ) : (
            <RxHamburgerMenu
              fontSize={26}
              className="text-blue dark:text-grey-100"
            />
          )}
        </button>
      </div>
      <aside
        className={`${
          show ? "fixed z-40 block" : "hidden lg:block"
        } h-full min-h-screen w-4/5 overflow-y-auto bg-black sm:w-3/4 md:w-72 2xl:w-96`}
      >
        <div
          className={`${show ? "block" : "hidden md:block"} relative h-full`}
        >
          <div
            className={`${
              show ? "absolute" : "relative"
            } top-0 left-0 w-full p-3`}
          >
            <button
              onClick={createChat}
              className="flex w-full items-center space-x-3 rounded-lg border-2 border-light p-2 text-left text-base font-normal capitalize text-grey-100 outline-none transition-all ease-out hover:border-blue hover:bg-slate-800 focus:border-blue focus:bg-slate-800 lg:text-lg"
            >
              <IoMdAdd fontSize={18} color="#dbdbe2" />
              <span>New Chat</span>
            </button>
            <div className="mt-2 flex flex-col space-y-3 overflow-hidden">
              <div className="overflow-y-scroll">
                {chats?.docs.map((chat) => (
                  <ChatRow key={chat.id} id={chat.id} />
                ))}
              </div>
            </div>
          </div>
          <div className="absolute left-0 bottom-[1%] flex w-full flex-col items-center justify-center space-y-2 border-t border-light p-3 sm:bottom-0 xl:space-y-2">
            <ChatButton
              icon={
                theme === "dark" ? (
                  <BsMoonFill fontSize={23} color="#dbdbe2" />
                ) : (
                  <BsFillSunFill fontSize={23} color="#dbdbe2" />
                )
              }
              title={`${theme} Mode`}
              onClick={switchTheme}
            />

            {session && (
              <button onClick={() => signOut()} className="sideBarButton p-1">
                <Image
                  src={session?.user?.image || (openai as string)}
                  alt="user"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
                <p>Log out</p>
              </button>
            )}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Aside;
