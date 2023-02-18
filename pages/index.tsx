import { Carousel } from "../components/Organisms/Carousel";
import Onayami from "../components/Onayami";
import Osusume from "../components/Osusume";
import Compare from "../components/Compare";
import Step from "../components/Steps";
import Faq from "../components/Faq";
import News from "../components/Organisms/News";
import Menu from "../components/Menu";
import SectionTitle from "../components/Atoms/SectionTitle";
import IndexInfo from "../components/IndexInfo";

export default function Home() {
  return (
    <div className="">
      <section className="w-full">
        <Carousel />
      </section>
      <section className="container mx-auto grid justify-items-center gap-3 px-3 pt-5">
        <News />
      </section>

      <div className="container mx-auto grid grid-cols-4 gap-14 px-3 py-10 ">
        {/* お悩みセクション
        article > children
         title:text-2xl,[&:not(:fist-child)]:py-10 
        */}
        <section className=" col-span-full flex flex-col gap-14 rounded-md bg-secondary px-7 py-20 ">
          <Onayami />
          <Osusume />
          <Compare />
        </section>
        <section className=" col-span-full">
          <SectionTitle>最短30分！痛くないホワイトニングの流れ</SectionTitle>
          <Step />
        </section>
        <section className=" col-span-full">
          <SectionTitle>ホワイトニング料金表</SectionTitle>

          <Menu />
          <p className="  col-span-full pt-3 text-right ">詳しくみる</p>
        </section>
        <section className=" col-span-full">
          <Faq />
        </section>
        <section className=" col-span-full pb-20">
       <IndexInfo />
        </section>
      </div>
    </div>
  );
}
