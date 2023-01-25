import Link from "next/link";
import { ReactNode } from "react";

type Props = {
    children:ReactNode;
}

const Breadcrumbs = ({children}:Props) => {
    return (
        <div className="text-sm breadcrumbs  lg:ml-5">
        <ul>
          <li>
            <Link href="/">ホーム</Link>
          </li>

          <li>{children}</li>
        </ul>
      </div>
    );
}

export default Breadcrumbs;