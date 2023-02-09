import { NextSeo } from "next-seo";
import Breadcrumbs from "../components/Atoms/Breadcrumbs";
import TopTitleText from "../components/Atoms/TopTitleText";
import Table from "../components/Organisms/Table";

const Info = () => {
  return (
    <>
    <NextSeo
    title="店舗案内" 
    openGraph={{
      url: "https://www.restarts.co.jp/service",
      title: "店舗案内 | ホワイトニングsamma(サンマ）",
    }} 
  />
    <section className="container mx-auto grid justify-items-center gap-3 px-3 py-10  pt-5">
      <div className="container mx-auto grid grid-cols-4 gap-14 px-3 ">
        <div className=" col-span-full  ">
          <div className="flex flex-col gap-5 ">
            <Breadcrumbs>店舗案内</Breadcrumbs>
          </div>
        </div>

        <article className=" col-span-full pb-20 ">
          <TopTitleText>店舗案内</TopTitleText>
          <Table />

        </article>



        {/* サイドバー */}
      </div>
    </section>
    </>
  );
};

export default Info;
