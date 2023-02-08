import { IconChevronUp } from "@tabler/icons-react";
import Link from "next/link";
import useTopScroll from "../hooks/useTopScroll";

const BottomNav = () => {
  const { handleClick } = useTopScroll();
  return (
    <div className="btm-nav grid grid-cols-4 bg-secondary ">
      <button className=" col-span-3">
        <Link href="/">ネット予約</Link>
      </button>

      {/* TOPにスクロールで戻るボタン */}
      <button onClick={handleClick} className=" col-span-1 bg-primary">
        <IconChevronUp size={30} />
      </button>
    </div>
  );
};

export default BottomNav;
