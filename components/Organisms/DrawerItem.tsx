import {
  IconBadge,
  IconCurrencyYen,
  IconInfoCircle,
  IconMessageCircle,
  IconNorthStar,
} from "@tabler/icons-react";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";

type Props = {
  setVisible: Dispatch<SetStateAction<boolean>>;
};

const items = [
  {
    icon: IconNorthStar,
    title: "TOP",
    path: "/",
  },
  {
    icon: IconBadge,
    title: "sammaについて",
    path: "/about",
  },
  {
    icon: IconCurrencyYen,
    title: "料金",
    path: "/price",
  },
  {
    icon: IconInfoCircle,
    title: "店舗案内",
    path: "/info",
  },
  {
    icon: IconMessageCircle,
    title: "お問い合わせ",
    path: "/contact",
  },
];

const DrawerItem = ({ setVisible }: Props) => {
  const router = useRouter();

  return (
    <div className="fixed top-0  left-0 z-[9999] flex h-screen w-2/3  -translate-x-full animate-slide-right flex-col bg-secondary  ">
      <ul className=" mt-16 grid w-full items-center text-base-content">
        {items.map((item) => (
          <li
            className="flex h-[60px] items-center pl-4 text-xl hover:bg-primary"
            key={item.title}
          >
            <a
              className="flex w-full items-center"
              onClick={(e) => {
                e.preventDefault();
                router.push(item.path), setVisible(false);
              }}
            >
              {<item.icon className="mr-5 inline text-accent" />}
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DrawerItem;
