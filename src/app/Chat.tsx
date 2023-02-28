import React from "react";
import ChatBox from "./ChatBox";
import ChatExample from "./ChatExample";
import Send from "./Send";

const Chat = () => {
  return (
    <section className="relative h-full min-h-screen w-full border-l border-dark bg-black p-3">
      <ChatExample />
      {/* <div className="overflow-y-auto overflow-hidden absolute top-0 left-0 right-2 bg-dark p-3 w-full h-full">
        <ChatBox />
      </div> */}
      <Send />
    </section>
  );
};

export default Chat;
