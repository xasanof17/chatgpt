"use client"; // Error components must be Client components

import Image from "next/image";
import { useEffect } from "react";
import openai from "../assets/openai-icon.svg";
import { BsArrowLeft } from "react-icons/bs";
import { useRouter } from "next/navigation";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <section className="relative flex h-screen flex-col items-center justify-center dark:bg-black bg-slate-700">
      <button
        onClick={() => router.replace("/")}
        className="fixed top-6 left-4 flex animate-bounce items-center space-x-3 rounded-lg bg-white p-3 font-medium"
      >
        <BsArrowLeft fontSize={20} />
        <p>Home</p>
      </button>
      <Image src={openai} alt="logo" width={100} height={100} />
      <h2 className="my-5 text-4xl font-normal text-grey-100">
        Something went wrong!
      </h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        className="rounded-lg border-blue bg-white py-2 px-5 text-lg font-semibold text-gray-700"
      >
        Try again
      </button>
    </section>
  );
}
