"use client";
import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { BsArrowBarLeft } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";

const ButtonChat = () => {
  return (
    <button className="p-2 text-left text-grey font-normal hover:bg-slate-800 focus:border-blue focus:bg-slate-800 hover:border-blue text-base border-2 border-dark outline-none w-full rounded-xl capitalize flex items-center space-x-3">
      <IoMdAdd fontSize={18} color="#dbdbe2" />
      <span>New Chat</span>
    </button>
  );
};

const Aside = () => {
  const [show, setShow] = useState(false);
  return (
    <aside className="lg:w-72 w-0 bg-black h-full min-h-screen relative">
      <div className="lg:hidden flex items-center justify-center fixed top-5 left-3 z-50">
        <button>
          <RxHamburgerMenu fontSize={28} color="#dbdbe2" />
        </button>
      </div>
      <div className="absolute top-0 left-0 w-full p-3">
        <ButtonChat />
      </div>
      <div className="absolute bottom-0 left-0 w-full p-3">
        <button className="p-2 text-left text-grey font-normal hover:bg-slate-800 rounded-xl text-base outline-none w-full capitalize flex items-center space-x-3">
          <BsArrowBarLeft fontSize={20} color="#dbdbe2" />
          <span>Log Out</span>
        </button>
      </div>
    </aside>
  );
};

export default Aside;
