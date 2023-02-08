import Image from "next/image";

const Osusume = () => {
  return (
    <article className="">
      <h1 className="pt-10 text-center text-2xl">
        そんな方にオススメなのが当店の セルフホワイトニング
      </h1>
      <p className="pt-5 pb-10 text-center ">
        セルフホワイトニングは歯を白くする だけでなくお口周りのトラブルに様々な
        効果が得られます。
      </p>
      <Image
        src="/images/whitening_bg.jpg"
        alt=""
        width={1200}
        height={200}
        className="mx-auto rounded-3xl shadow-xl"
      />
    </article>
  );
};

export default Osusume;
