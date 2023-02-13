import Image from "next/image";

const Osusume = () => {
  return (
    <article className=" relative">
      <h1 className="pt-10 text-center text-2xl ">
        そんな方にオススメなのが当店の セルフホワイトニング
      </h1>
      <p className="pt-5 pb-10 text-center ">
        セルフホワイトニングは歯を白くする だけでなくお口周りのトラブルに様々な
        効果が得られます。
      </p>
      {/* <Image
        src="/images/whitening_bg.jpg"
        alt=""
        width={1200}
        height={200}
        className="mx-auto hidden rounded-3xl shadow-xl lg:block"
      /> */}
        <div className=" bg-hero-pattern-sp lg:hidden w-full h-[30vh] bg-cover bg-no-repeat rounded-3xl "></div>
        <div className=" hidden lg:block bg-hero-pattern w-full h-[73vh] bg-cover bg-no-repeat bg-center rounded-3xl"></div>
    </article>
  );
};

export default Osusume;
