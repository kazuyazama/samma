import { IconBadge, IconCurrencyYen, IconInfoCircle, IconMessageCircle, IconNorthStar } from "@tabler/icons-react";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";

type Props = {
  visible: boolean;
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

const DrawerItem = ({ visible, setVisible }: Props) => {
  const router = useRouter();

  return (
    <div
      className={`h-screen w-2/3 -translate-x-full animate-slide-right ${
        visible ? "translate-x-0" : "-translate-x-full"
      } fixed top-0 left-0 z-[9999] flex flex-col bg-secondary duration-700 `}
    >
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
              {<item.icon className="text-accent mr-5 inline" />}
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DrawerItem;
