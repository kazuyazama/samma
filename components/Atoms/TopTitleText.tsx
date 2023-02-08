import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const TopTitleText = ({ children }: Props) => {
  return (
    <h1 className="relative text-left text-2xl before:mr-4 before:w-0 before:border-4 before:border-l before:border-primary lg:text-3xl lg:before:h-20">
      {children}
    </h1>
  );
};

export default TopTitleText;
