import {
  animated,
  AnimationProps,
  SpringConfig,
  SpringValue,
} from "@react-spring/web";
import Link from "next/link";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";

type Props = {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
};

const items = [
  {
    title: "TOP",
    path: "/",
  },
  {
    title: "sammaについて",
    path: "/about",
  },
  {
    title: "料金",
    path: "/price",
  },
  {
    title: "店舗案内",
    path: "/info",
  },
  {
    title: "お問い合わせ",
    path: "/contact",
  },
];

const DrawerItem = ({ visible, setVisible }: Props) => {
  const router = useRouter();
 
  return (
    <div
      className={`h-screen w-3/4 -translate-x-full animate-slide-right ${
        visible ? "translate-x-0" : "-translate-x-full"
      } fixed top-0 left-0 z-[9999] flex flex-col bg-base-100 duration-700`}
    >
      <ul className=" mt-16 grid w-full items-center bg-base-100 text-base-content">
        {items.map((item, length) => (
          <li
            className="flex h-[60px] items-center pl-4 text-xl hover:bg-primary"
            key={length}
          >
            <a
              onClick={(e) => {
                e.preventDefault()
                router.push(item.path), setVisible(false);
              }}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DrawerItem;
