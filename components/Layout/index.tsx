import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import useScrollHidden from "../../hooks/useScrollHidden";
import BottomNav from "../BottomNav";
import Header from "./Header";
import Footer from "./Footer";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {

  const {isVisible} = useScrollHidden()

  return (
    <>
      <Header />
      <main className=" overflow-x-hidden prose-h1:font-bold prose-h1:tracking-wider">{children}</main>
      <Footer />
      {isVisible && 
      <BottomNav />
      }
    </>
  );
};

export default Layout;
