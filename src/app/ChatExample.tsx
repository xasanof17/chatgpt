import React from "react";
import { BiSun } from "react-icons/bi";
import { SlEnergy } from "react-icons/sl";
import { IoWarningOutline } from "react-icons/io5";

const ChatExample = () => {
  return (
    <section className="flex flex-col items-center justify-center space-y-12">
      <h1 className="text-3xl text-grey font-bold">ChatGPT</h1>
      <div className="w-full grid grid-cols-3 max-w-4xl mx-auto gap-3">
        <div className="">
          <div className="flex flex-col items-center justify-center space-y-3">
            <BiSun fontSize={29} className='text-grey'/>
            <h2 className="text-lg capitalize text-grey font-medium">Examples</h2>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col items-center justify-center space-y-3">
            <SlEnergy fontSize={29} className='text-grey'/>
            <h2 className="text-lg capitalize text-grey font-medium">Capabilities</h2>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col items-center justify-center space-y-3">
            <IoWarningOutline fontSize={27} className='text-grey'/>
            <h2 className="text-lg capitalize text-grey font-medium">Limitations</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatExample;
