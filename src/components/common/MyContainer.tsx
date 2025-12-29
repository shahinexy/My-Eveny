import { ReactNode } from "react";

type CustomContainerProps = {
  children: ReactNode;
};

const MyContainer = ({ children }: CustomContainerProps) => {
  return <div className="max-w-[1327px] mx-auto  md:px-5 px-3">{children}</div>;
};

export default MyContainer;
