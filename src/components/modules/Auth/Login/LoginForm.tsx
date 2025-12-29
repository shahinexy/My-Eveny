/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import MyFormInput from "@/components/form/MyFormInput";
import MyFormWrapper from "@/components/form/MyFormWrapper";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setUser, TUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { setCookie } from "@/utils/cookies";
import { varifyToken } from "@/utils/verifyToken";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();
  const router = useRouter();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("login...");

    try {
      const res = await login(data).unwrap();
      const user = varifyToken(res.data.token) as TUser;

      if (user?.role !== "Admin") {
        return toast.error("Unauthorize Access", { id: toastId });
      } else {
        setCookie(res.data.token);
        dispatch(setUser({ user, token: res.data.token }));

        toast.success("Login success", { id: toastId });

        setTimeout(() => {
          router.push("/");
        }, 1000);
      }
    } catch (err: any) {
      toast.error(err.data?.message || "Faild to login", { id: toastId });
    }
  };
  return (
    <MyFormWrapper onSubmit={onSubmit}>
      
      <MyFormInput
        type="email"
        name="email"
        placeholder="email"
        inputClassName="bg-white"
        label="Your Email"
      />

      <MyFormInput
        type="password"
        name="password"
        placeholder="password"
        inputClassName="bg-white"
        label="Your Password"
      />

      <p className="text-end text-sm">
        <Link href={"#"}>Forgot Password</Link>
      </p>

      <p className="my-3 text-sm">
        By continuing, you confirm that you are 18 years or older and agree to
        our{" "}
        <Link href={"/terms-of-service"} className="text-primary">
          Terms & Conditions
        </Link>{" "}
        and{" "}
        <Link href={"/privacy-policy"} className="text-primary">
          Privacy Policy
        </Link>
        .
      </p>
      <button className="w-full bg-primary rounded-md py-3 md:px-36 px-20 text-xl text-white">
        Login
      </button>

      <p className="my-3 text-center">
        Don’t have an account?{" "}
        <Link href={"/register"} className="text-primary">
          Sign Up
        </Link>
      </p>
    </MyFormWrapper>
  );
};

export default LoginForm;
