"use client";
import React, { useState } from "react";
import { IoMdAdd, IoMdClose } from "react-icons/io";
import { BsArrowBarLeft } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";

interface ChatButton {
  title: string;
  icon: React.ReactNode;
  onClick: () => void;
}

const ChatButton = ({ title, icon, onClick }: ChatButton) => {
  return (
    <button
      onClick={() => onClick}
      className="flex w-full items-center space-x-3 rounded-lg p-2 text-left text-base font-normal capitalize text-grey outline-none hover:bg-light lg:text-lg"
    >
      {icon}
      <span>{title}</span>
    </button>
  );
};

const Aside = () => {
  const [show, setShow] = useState(false);
  return (
    <aside
      className={`${
        show ? "fixed top-0 left-0 z-50 w-64" : "relative lg:w-72 xl:w-96"
      } h-full min-h-screen w-0 bg-black`}
    >
      <div
        className={`${
          show ? "right-3" : "left-3 lg:hidden"
        } fixed top-3 z-50 flex items-center justify-center`}
      >
        <button
          onClick={() => (show ? setShow(false) : setShow(true))}
          className={`flex items-center justify-center ${
            show ? "bg-slate-800" : "hover:bg-slate-800"
          } rounded-full p-1.5 focus:bg-slate-800`}
        >
          {show ? (
            <IoMdClose fontSize={22} color="#dbdbe2" />
          ) : (
            <RxHamburgerMenu fontSize={26} color="#dbdbe2" />
          )}
        </button>
      </div>
      <div className="absolute top-0 left-0 w-full p-3">
        <button className="flex w-full items-center space-x-3 rounded-lg border-2 border-dark p-2 text-left text-base font-normal capitalize text-grey outline-none hover:border-blue hover:bg-slate-800 focus:border-blue focus:bg-slate-800 lg:text-lg">
          <IoMdAdd fontSize={18} color="#dbdbe2" />
          <span>New Chat</span>
        </button>
      </div>
      <div className="absolute bottom-0 left-0 w-full border-t border-dark p-3">
        <ChatButton
          icon={<BsArrowBarLeft fontSize={20} color="#dbdbe2" />}
          title="Log Out"
          onClick={() => console.log("chatButton")}
        />
        <ChatButton
          icon={<BsArrowBarLeft fontSize={20} color="#dbdbe2" />}
          title="Light Mode"
          onClick={() => console.log("chatButton")}
        />
        <ChatButton
          icon={<BsArrowBarLeft fontSize={20} color="#dbdbe2" />}
          title="Log Out"
          onClick={() => console.log("chatButton")}
        />
      </div>
    </aside>
  );
};

export default Aside;
