"use client";
import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { BsArrowBarLeft } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { IconButton, Button} from '@mui/material';

const ButtonChat = () => {
  return (
    <Button className="p-2 text-left text-grey font-normal text-base border-2 border-dark outline-none w-full rounded-xl capitalize flex items-center space-x-3">
      <IoMdAdd fontSize={18} color="#dbdbe2" />
      <span>New Chat</span>
    </Button>
  );
};

const Aside = () => {
  const [show, setShow] = useState(false);
  return (
    <aside className="lg:w-72 w-0 bg-black h-full min-h-screen relative">
      <IconButton className="lg:hidden flex items-center justify-center fixed top-5 left-3 z-50">
        <RxHamburgerMenu fontSize={25} color="#dbdbe2" />
      </IconButton>
      <div className="absolute top-0 left-0 w-full p-3">
        <ButtonChat />
      </div>
      <div className="absolute bottom-0 left-0 w-full p-3">
        <Button className="p-2 text-left text-grey font-normal text-base outline-none w-full capitalize flex items-center space-x-3">
          <BsArrowBarLeft fontSize={20} color="#dbdbe2" />
          <span>Log Out</span>
        </Button>
      </div>
    </aside>
  );
};

export default Aside;
