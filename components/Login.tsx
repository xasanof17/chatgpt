"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import google from "../assets/google.svg";
import openai from "../assets/openai-icon.svg";

const Login = () => {
  return (
    <section className="flex h-screen flex-col items-center justify-center bg-black dark:bg-black">
      <Image
        src={openai}
        alt="openai"
        width={100}
        height={100}
        className="mb-5"
      />
      <button
        onClick={() => signIn("google")}
        className="mt-4 flex animate-bounce items-center space-x-8 rounded-lg bg-slate-100 py-3 px-4 text-lg font-medium text-dark-100 sm:py-4 sm:px-5"
      >
        <Image src={google} alt="google" width={25} height={25} />
        <p>Sign in with Google</p>
      </button>
    </section>
  );
};

export default Login;
