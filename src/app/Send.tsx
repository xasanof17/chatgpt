import React from "react";
import { IoSend } from "react-icons/io5";

const Send = () => {
  return (
    <div className="absolute bottom-5 left-0 w-full">
      <form className="mx-5 flex space-x-1 items-center">
        <textarea
          rows={1}
          autoFocus
          placeholder="Ask anything..."
          name="message"
          className="rounded-md resize-none shadow-xl text-grey bg-transparent block p-2 w-full text-[16px] bg-gray-50 outline-none border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <button
          type="submit"
          className="flex items-center justify-center p-2 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
        >
          <IoSend fontSize={22} className="text-blue" />
        </button>
      </form>
    </div>
  );
};

export default Send;
