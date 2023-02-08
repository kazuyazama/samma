import Link from "next/link";
import Breadcrumbs from "../components/Atoms/Breadcrumbs";
import TopTitleText from "../components/Atoms/TopTitleText";
import Table from "../components/Organisms/Table";

const Info = () => {
  return (
    <section className="container mx-auto grid justify-items-center gap-3 px-3 py-10  pt-5">
      <div className="container mx-auto grid grid-cols-4 gap-5 px-3 ">
        <div className=" col-span-full ">
          <Breadcrumbs>店舗案内</Breadcrumbs>

          <Table />
        </div>

        {/* サイドバー */}
      </div>
    </section>
  );
};

export default Info;
