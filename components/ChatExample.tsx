import React from "react";
import { BiSun } from "react-icons/bi";
import { SlEnergy } from "react-icons/sl";
import { IoWarningOutline } from "react-icons/io5";
import { v4 as uuidv4 } from "uuid";

interface Boxes {
  id: string;
  text: string;
}

const examples: Boxes[] = [
  { id: uuidv4(), text: "Explain quantum computing in simple terms" },
  {
    id: uuidv4(),
    text: "Got any creative ideas for a 10 year old's birthday",
  },
  { id: uuidv4(), text: "How do I make an HTTP request in JavaScript" },
];

const capabilities: Boxes[] = [
  { id: uuidv4(), text: `Remember what user said earlier in the conversation` },
  { id: uuidv4(), text: `Allow user to provide follow-up corrections` },
  { id: uuidv4(), text: `Trained to declines inappropriate requests` },
];
const limitations: Boxes[] = [
  { id: uuidv4(), text: `May occasionally generate incorrect information` },
  {
    id: uuidv4(),
    text: "May occasionally produce harmful instructions or biased content",
  },
  { id: uuidv4(), text: `Limited knowledge of world and events after 2022` },
];

interface Box {
  item: Boxes;
  id: string;
}

const Box = ({ item, id }: Box) => {
  return (
    <div
      key={id}
      className="w-full rounded-lg bg-dark-200 p-2 hover:cursor-pointer dark:bg-dark-100"
    >
      <p className="text-center text-base font-medium text-grey-200 dark:text-grey-100 xl:text-lg">
        {item.text}
      </p>
    </div>
  );
};

const ChatExample = () => {
  return (
    <section className="absolute top-16 pb-[20%] sm:pb-0 left-3 right-3 flex flex-col items-center justify-center space-y-12 lg:right-auto  lg:left-[5%] xl:left-[10%] xl:max-w-4xl 2xl:max-w-6xl">
      <h1 className="text-3xl font-bold text-grey-200 dark:text-grey-100 lg:text-4xl">
        ChatGPT
      </h1>
      <div className="mx-auto grid w-full grid-cols-1 gap-4 overflow-x-auto sm:overflow-x-auto md:grid-cols-3">
        <div className="block">
          <div className="flex flex-col items-center justify-center space-y-4">
            <BiSun fontSize={29} className="text-grey-200 dark:text-grey-100" />
            <h2 className="text-lg font-semibold capitalize text-grey-200 dark:text-grey-100 xl:text-2xl">
              Examples
            </h2>
            {examples.map((item) => (
              <Box item={item} id={item.id} key={item.id} />
            ))}
          </div>
        </div>
        <div className="block">
          <div className="flex flex-col items-center justify-center space-y-4">
            <SlEnergy
              fontSize={29}
              className="text-grey-200 dark:text-grey-100"
            />
            <h2 className="text-lg font-medium capitalize text-grey-200 dark:text-grey-100 xl:text-2xl">
              Capabilities
            </h2>
            {capabilities.map((item) => (
              <Box item={item} id={item.id} key={item.id} />
            ))}
          </div>
        </div>
        <div className="block">
          <div className="flex flex-col items-center justify-center space-y-4">
            <IoWarningOutline
              fontSize={27}
              className="text-grey-200 dark:text-grey-100"
            />
            <h2 className="text-lg font-medium capitalize text-grey-200 dark:text-grey-100 xl:text-2xl">
              Limitations
            </h2>
            {limitations.map((item) => (
              <Box item={item} id={item.id} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatExample;
