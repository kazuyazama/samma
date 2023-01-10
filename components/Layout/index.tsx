import Link from "next/link";
import { ReactNode } from "react";
import Header from "../Header";
import Footer from "./Footer";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="h-[100vh]">{children}</main>
      <Footer />
      <div className="btm-nav grid grid-cols-4 ">
        <button className=" col-span-3">
        <Link href="/">
        ホットペッパーへ
        </Link>
        </button>


        {/* TOPにスクロールで戻るボタン */}
        <button className=" col-span-1">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Layout;
