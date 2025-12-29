"use client";
import Image from "next/image";
import LoginForm from "./LoginForm";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";


const Login = () => {
  return (
    <div className="md:grid grid-cols-2 gap-12">
      <div className="flex items-center justify-center h-screen">
        <Image
          src={"/images/login-img.png"}
          alt="Choptop"
          width={800}
          height={800}
          className="w-5/6 h-[90vh]"
        />
      </div>

      <div className="max-w-lg mx-auto flex items-center justify-center flex-col md:gap-9 gap-6">
        <h1 className="md:text-5xl text-3xl font-semibold text-primary">
          Log In
        </h1>
        <LoginForm />

        <button className="border flex justify-center gap-2 items-center w-full bg-black/70 rounded-md py-3 md:px-36 px-20 text-xl text-white">
          <FaGoogle /> Google Login
        </button>
        <button className="border flex justify-center gap-2 items-center w-full bg-black/70 rounded-md py-3 md:px-36 px-20 text-xl text-white">
          <FaApple className="text-2xl"/> Apple Login
        </button>
      </div>
    </div>
  );
};

export default Login;
