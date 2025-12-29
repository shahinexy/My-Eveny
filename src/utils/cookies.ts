"use server";
import { cookies } from "next/headers";

export const setCookie = async (token: string) => {
  const cookieStore = await cookies();
  cookieStore.set("token", token);
};

export const removeCookie = async (token: string) => {
  const cookieStore = await cookies();
  cookieStore.delete(token);
};
