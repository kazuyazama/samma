import Link from "next/link";

const Header = () => {
  return (
    <div className=" overflow-hidden">
      <header className="container mx-auto p-3 lg:p-5 lg:grid gap-3 ">
        <div className="  grid grid-cols-6 justify-items-center items-center ">
          <div className=" col-span-1">
            <div className="lg:hidden">
              {/* スマホのみハンバーガーメニュー表示　表示はドロワーにする */}
              <button>ham</button>
            </div>
            <div className="hidden lg:inline-flex">
              <h1>丁寧なホワイトニング</h1>
            </div>
          </div>
          <div className="  col-span-4">
            {/* ロゴ */}
            <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
          </div>
          <div className=" col-span-1 ">
            <button className="btn btn-ghost btn-circle w-full ">
              <Link href="tel:044-387-1803" className="hidden lg:block">
                <h1>044-387-1803</h1>
              </Link>
              <Link href="tel:044-387-1803" className="block lg:hidden">
                <div>Tel</div>
              </Link>
            </button>
          </div>
        </div>
        <nav className="hidden lg:block">
          <ul className="flex justify-around  ">
            <li>sanmaについて</li>
            <li>店舗案内</li>
            <li>料金</li>
            <li>お問い合わせ</li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
