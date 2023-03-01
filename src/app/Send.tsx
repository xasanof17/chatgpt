import React from "react";
import { IoSend } from "react-icons/io5";

const Send = () => {
  return (
    <div className="fixed sm:absolute bottom-0 left-0 w-full bg-white p-2 md:p-3 dark:bg-black 2xl:bottom-12 xl:p-5">
      <form className="flex items-center space-x-1 sm:ml-0 lg:mx-auto xl:max-w-6xl">
        <input
          type="text"
          name="message"
          placeholder="Ask anything..."
          className="block w-full resize-none rounded-md border-2 border-transparent border-slate-700 bg-grey-100 p-2 text-base text-grey-200 shadow-xl shadow-slate-100 outline-none focus:bg-dark-200 focus:text-dark-100 focus:ring-slate-100 dark:bg-dark-100 dark:text-grey-100 dark:shadow-slate-800 dark:focus:border-blue dark:focus:bg-light dark:focus:ring-blue lg:text-lg"
          autoFocus
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
