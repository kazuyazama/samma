import { normalMenuData, countMenuData } from "../assets/price";

const Menu = () => {
  return (
    <article className="grid grid-cols-2  ">
      <h1 className=" col-span-full py-3 text-center text-2xl">レギュラー</h1>
      {normalMenuData.map((dl) => (
        <article
          key={dl.price}
          className="flex flex-col items-center  border  "
        >
          <dl className="w-full text-center">
            <dt className="bg-primary py-3 text-xl font-semibold tracking-widest  text-base-100 h-16 flex justify-center items-center">
              {dl.count}
            </dt>

            <dd className="py-3 text-2xl font-bold tracking-wider text-primary">
              {dl.price.toLocaleString()}円
            </dd>
          </dl>
        </article>
      ))}

      <h1 className=" col-span-full pt-7 pb-3 text-center text-2xl">プレミアムコース</h1>

      {countMenuData.map((dl) => (
        <article key={dl.price} className="flex flex-col items-center border  ">
          <dl className="w-full text-center">
            <dt className="bg-primary py-3 text-xl font-semibold tracking-widest text-base-100 h-16 flex justify-center items-center ">
              {dl.count}
            </dt>

            <dd className="py-3 text-2xl font-bold tracking-wider text-primary">
              {dl.price.toLocaleString()}円
            </dd>
          </dl>
        </article>
      ))}
    </article>
  );
};

export default Menu;
