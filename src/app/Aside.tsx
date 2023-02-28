"use client";
import React, { useState } from "react";
import { IoMdAdd, IoMdClose } from "react-icons/io";
import { BsArrowBarLeft } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";

const ChatButton = () => {
  return (
    <button className="p-2 text-left text-grey font-normal hover:bg-slate-800 focus:border-blue focus:bg-slate-800 hover:border-blue text-base border-2 border-dark outline-none w-full rounded-lg capitalize flex items-center space-x-3">
      <IoMdAdd fontSize={18} color="#dbdbe2" />
      <span>New Chat</span>
    </button>
  );
};


const Aside = () => {
  const [show, setShow] = useState(false);
  return (
    <aside
      className={`${
        show ? "w-64 fixed top-0 left-0 z-50" : "lg:w-72 relative"
      } w-0 bg-black h-full min-h-screen`}
    >
      <div
        className={`${
          show ? "right-3" : "lg:hidden left-3"
        } flex items-center justify-center fixed top-3 z-50`}
      >
        <button
          onClick={() => (show ? setShow(false) : setShow(true))}
          className={`flex items-center justify-center ${
            show ? "bg-slate-800" : "hover:bg-slate-800"
          } p-1.5 rounded-full focus:bg-slate-800`}
        >
          {show ? (
            <IoMdClose fontSize={22} color="#dbdbe2" />
          ) : (
            <RxHamburgerMenu fontSize={26} color="#dbdbe2" />
          )}
        </button>
      </div>
      <div className="absolute top-0 left-0 w-full p-3">
        <ChatButton />
      </div>
      <div className="absolute bottom-0 left-0 w-full p-3 border-t border-dark">
        <button className="p-2 text-left text-grey font-normal hover:bg-slate-800 rounded-lg text-base outline-none w-full capitalize flex items-center space-x-3">
          <BsArrowBarLeft fontSize={20} color="#dbdbe2" />
          <span>Log Out</span>
        </button>
      </div>
    </aside>
  );
};

export default Aside;
