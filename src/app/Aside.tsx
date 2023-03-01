"use client";
import React, { useEffect, useState } from "react";
import { IoMdAdd, IoMdClose } from "react-icons/io";
import { BsArrowBarLeft, BsMoonFill, BsFillSunFill } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";

interface ChatButton {
  title: string;
  icon: React.ReactNode;
  onClick: () => void;
}

const ChatButton = ({ title, icon, onClick }: ChatButton) => {
  return (
    <button
      onClick={onClick}
      className="flex w-full items-center space-x-3 rounded-lg p-2 text-left text-base font-normal capitalize text-grey-100 outline-none hover:bg-blue dark:hover:bg-blue lg:text-lg"
    >
      {icon}
      <span>{title}</span>
    </button>
  );
};

const Aside = () => {
  const [show, setShow] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    theme === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [theme]);

  const switchTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="aside">
      <div
        className={`${
          show ? "right-3" : "left-3 lg:hidden"
        } fixed top-3 z-50 flex items-center justify-center`}
      >
        <button
          onClick={() => (show ? setShow(false) : setShow(true))}
          className={`flex items-center justify-center ${
            show
              ? "bg-slate-200 dark:bg-slate-700"
              : "bg-slate-200 hover:bg-slate-400 dark:bg-blue dark:hover:bg-slate-800"
          } rounded-full p-1.5 focus:bg-slate-200 dark:focus:bg-slate-800`}
        >
          {show ? (
            <IoMdClose fontSize={22} className="text-blue dark:text-grey-100" />
          ) : (
            <RxHamburgerMenu
              fontSize={26}
              className="text-blue dark:text-grey-100"
            />
          )}
        </button>
      </div>
      <aside
        className={`${
          show ? "fixed z-40 block" : "relative hidden lg:block"
        } ${"w-3/4 md:w-72 2xl:w-96"} h-full min-h-screen w-0 bg-black`}
      >
        <div className={`${show ? "block" : "hidden md:block"}`}>
          <div
            className={`${
              show ? "absolute" : "relative"
            } top-0 left-0 w-full p-3`}
          >
            <button className="flex w-full items-center space-x-3 rounded-lg border-2 border-light p-2 text-left text-base font-normal capitalize text-grey-100 outline-none hover:border-blue hover:bg-slate-800 focus:border-blue focus:bg-slate-800 lg:text-lg">
              <IoMdAdd fontSize={18} color="#dbdbe2" />
              <span>New Chat</span>
            </button>
          </div>
          <div className="absolute bottom-0 left-0 flex w-full flex-col items-center justify-center space-y-1 border-t border-light p-3 xl:space-y-2">
            <ChatButton
              icon={
                theme === "dark" ? (
                  <BsMoonFill fontSize={23} color="#dbdbe2" />
                ) : (
                  <BsFillSunFill fontSize={23} color="#dbdbe2" />
                )
              }
              title={`${theme} Mode`}
              onClick={switchTheme}
            />
            <ChatButton
              icon={<BsArrowBarLeft fontSize={20} color="#dbdbe2" />}
              title="Log Out"
              onClick={() => console.log("chatButton")}
            />
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Aside;
