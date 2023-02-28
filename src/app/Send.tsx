import React from "react";
import { IoSend } from "react-icons/io5";

const Send = () => {
  return (
    <div className="absolute bottom-4 left-0 w-full">
      <form className="mx-1 sm:mx-5 flex space-x-1 items-center">
        <textarea
          rows={1}
          autoFocus
          placeholder="Ask anything..."
          name="message"
          className="rounded-md resize-none shadow-xl text-grey block p-2 w-full text-[16px] bg-dark outline-none border-2 border-transparent focus:ring-blue focus:bg-light focus:border-blue"
        />
        <button
          type="submit"
          className="flex items-center justify-center p-2 rounded-full cursor-pointer hover:bg-slate-800 focus:outline-blue focus:bg-slate-800 focus:outline"
        >
          <IoSend fontSize={22} className="text-blue" />
        </button>
      </form>
    </div>
  );
};

export default Send;
