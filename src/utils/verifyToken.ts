import { jwtDecode } from "jwt-decode";

export const varifyToken = (token: string) => {
  return jwtDecode(token);
};