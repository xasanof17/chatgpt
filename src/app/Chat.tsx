import React from "react";
import ChatBox from "./ChatBox";
import ChatExample from "./ChatExample";
import Send from "./Send";

const Chat = () => {
  return (
    <section className="bg-black w-full min-h-screen h-full p-3 relative border-l border-dark">
      <ChatExample />
      {/* <div className="overflow-y-auto overflow-hidden absolute top-0 left-0 right-2 bg-dark p-3 w-full h-full">
        <ChatBox />
      </div> */}
      <Send />
    </section>
  );
};

export default Chat;
