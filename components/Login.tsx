"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import google from "../assets/google.png";
import openai from "../assets/openai-icon.svg";

const Login = () => {
  return (
    <section className="flex h-screen flex-col items-center justify-center bg-dark-100">
      <Image
        src={openai}
        alt="openai"
        width={100}
        height={100}
        className="mb-5"
      />
      <button
        onClick={() => signIn("google")}
        className="flex animate-bounce items-center space-x-4 rounded-xl bg-slate-100 py-2 px-3 text-lg font-medium text-dark-100"
      >
        <Image src={google} alt="google" width={25} height={25} />
        <p>Login with Google</p>
      </button>
    </section>
  );
};

export default Login;
