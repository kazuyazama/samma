import { ReactNode } from "react";

type Props = {
    children:ReactNode
}


const TopTitleText = ({children}:Props) => {
    return (
        <h1 className="text-3xl lg:text-5xl text-left relative before:w-0 lg:before:h-20 before:border-l before:border-4 before:border-primary before:mr-4">{children}</h1>
    );
}

export default TopTitleText;