import Link from "next/link";
import Breadcrumbs from "../components/Atoms/Breadcrumbs";
import TopTitleText from "../components/Atoms/TopTitleText";
import Table from "../components/Organisms/Table";

const Info = () => {
  return (
    <section className="container mx-auto grid justify-items-center gap-3 px-3 py-10  pt-5">
      <div className="container mx-auto grid grid-cols-4 gap-14 px-3 ">
        <div className=" col-span-full  ">
          <div className="flex flex-col gap-5 ">
            <Breadcrumbs>店舗案内</Breadcrumbs>
          </div>
        </div>

        <article className=" col-span-full">
          <TopTitleText>店舗案内</TopTitleText>
          <Table />

        </article>



        {/* サイドバー */}
      </div>
    </section>
  );
};

export default Info;
