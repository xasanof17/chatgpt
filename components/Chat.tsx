"use client";
import { usePathname } from "next/navigation";
import React from "react";
import ChatBox from "./ChatBox";
import ChatExample from "./ChatExample";
import Send from "./Send";

interface Props {
  chatId: string;
}

const Chat = ({ chatId }: Props) => {
  const pathname = usePathname();
  return (
    <section className="relative h-full min-h-screen w-full border-l border-light px-3 pt-3">
      {pathname === "/" ? (
        <ChatExample />
      ) : (
        <div className="absolute top-0 left-0 right-2 h-full w-full overflow-hidden overflow-y-auto bg-dark-200 p-3 dark:bg-dark-100">
          <ChatBox chatId={chatId}/>
        </div>
      )}
      <Send chatId={chatId} />
    </section>
  );
};

export default Chat;
