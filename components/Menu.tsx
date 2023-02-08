import { normalMenuData, countMenuData } from "../assets/price";

const Menu = () => {
  return (
    <article className="grid grid-cols-2  ">
      <h1 className=" col-span-full py-3 text-center text-2xl">通常メニュー</h1>
      {normalMenuData.map((dl) => (
        <article
          key={dl.price}
          className="flex flex-col items-center  border  "
        >
          <dl className="w-full text-center">
            <dt className="bg-primary py-3 text-xl font-semibold text-base-100  tracking-widest">{dl.count}</dt>

            <dd className="py-3 text-2xl text-primary font-bold tracking-wider">{dl.price.toLocaleString()}円</dd>
          </dl>
        </article>
      ))}

      <h1 className=" col-span-full pt-7 pb-3 text-center text-2xl">回数券</h1>

      {countMenuData.map((dl) => (
        <article key={dl.price} className="flex flex-col items-center border  ">
          <dl className="w-full text-center">
            <dt className="bg-primary py-3 text-xl font-semibold text-base-100 tracking-widest">{dl.count}回</dt>

            <dd className="py-3 text-2xl text-primary font-bold tracking-wider">{dl.price.toLocaleString()}円</dd>
          </dl>
        </article>
      ))}

    
    
    </article>
  );
};

export default Menu;
