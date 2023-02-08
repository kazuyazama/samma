import { IconArrowBadgeRight } from "@tabler/icons-react";
import { ReactNode } from "react";

type Props = {
    children:ReactNode;
}

const SectionTitle = ({children}:Props) => {
  return (
    <>
      <h1 className="flex items-center gap-2 text-2xl ">
        <IconArrowBadgeRight size={40} className=" text-primary opacity-60 " />
        {children}
      </h1>
      <span className="mb-7 block border-b-4 border-dotted border-primary pt-3"></span>
    </>
  );
};

export default SectionTitle;
