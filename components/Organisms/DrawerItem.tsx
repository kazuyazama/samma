import { animated, AnimationProps, SpringConfig, SpringValue } from "@react-spring/web";

type Props = {
  visible:boolean;
}

const items = [ "TOP","店舗情報","ホワイトニングについて","お問い合わせ","料金"]

const DrawerItem = ({visible}:Props) => {
  return (
    <div
      className={`w-3/4 h-screen animate-slide-right -translate-x-full ${visible ? "translate-x-0" : "-translate-x-full"} duration-700 fixed z-[9999] top-0 left-0 flex flex-col bg-base-100`}
    >
      
      <ul className=" grid items-center mt-16 w-full bg-base-100 text-base-content">
        {items.map((item,length) => (
        <li className="h-[60px] pl-4 flex items-center text-xl hover:bg-primary" key={length}>
          <a>{item}</a>
        </li>
        ))}
      

      </ul>
    </div>
  );
};

export default DrawerItem;
