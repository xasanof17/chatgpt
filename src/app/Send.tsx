import React from "react";
import { IoSend } from "react-icons/io5";

const Send = () => {
  return (
    <div className="absolute bottom-5 left-0 w-full bg-black p-3 xl:bottom-12 xl:p-5">
      <form className="mx-5 ml-2 flex items-center space-x-1 sm:ml-0 lg:mx-auto xl:max-w-6xl">
        <textarea
          rows={1}
          autoFocus
          placeholder="Ask anything..."
          name="message"
          className="block w-full resize-none rounded-md border-2 border-transparent bg-dark p-2 text-base text-grey shadow-xl outline-none focus:border-blue focus:bg-light focus:ring-blue lg:text-lg"
        />
        <button
          type="submit"
          className="flex cursor-pointer items-center justify-center rounded-full p-1 outline-none hover:bg-slate-800 focus:border focus:border-light focus:bg-slate-800 lg:p-3"
        >
          <IoSend fontSize={22} className="text-blue" />
        </button>
      </form>
    </div>
  );
};

export default Send;
