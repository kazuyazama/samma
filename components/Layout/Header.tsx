import Link from "next/link";
import Drawer from "../Organisms/Drawer";

const Header = () => {
  return (
    <div className=" overflow-hidden">
      <header className="container mx-auto gap-3 p-3 lg:grid lg:p-5 ">
        <div className="  grid grid-cols-6 items-center justify-items-center ">
          <div className=" col-span-1">
            <div className="lg:hidden">
              {/* スマホのみハンバーガーメニュー表示　表示はドロワーにする */}
              <Drawer />
            </div>
            <div className="hidden lg:inline-flex">
              <h1>丁寧なホワイトニング</h1>
            </div>
          </div>
          <div className="  col-span-4">
            {/* ロゴ */}
            <Link href="/" className="btn-ghost btn text-xl normal-case">daisyUI</Link>
          </div>
          <div className=" col-span-1 ">
            <button className="btn-ghost btn-circle btn w-full ">
              <Link href="tel:044-387-1803" className="hidden lg:block">
                <h1>044-387-1803</h1>
              </Link>
              <Link href="tel:044-387-1803" className="block lg:hidden">
                <div>Tel</div>
              </Link>
            </button>
          </div>
        </div>
        <nav className="hidden lg:block ">
          <ul className="flex justify-around text-lg  text-primary font-bold  tracking-widest ">
            <li>
              <Link href="/about">sanmaについて</Link>
            </li>
            <li>
              <Link href="/info">店舗案内</Link>
            </li>
            <li>
              <Link href="/price">料金</Link>
            </li>
            <li>
              <Link href="/contact">お問い合わせ</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
