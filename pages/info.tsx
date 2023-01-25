import Link from "next/link";
import Breadcrumbs from "../components/Atoms/Breadcrumbs";
import TopTitleText from "../components/Atoms/TopTitleText";
import Table from "../components/Organisms/Table";

const info = () => {
  


  return (
    <section className="container mx-auto px-3 py-10 pt-5 grid gap-3  justify-items-center">
      <div className="container mx-auto px-3 grid grid-cols-4 gap-5 ">
        <div className=" col-span-full lg:col-span-3">
          <div className="flex flex-col gap-5 ">
          <Breadcrumbs>店舗案内</Breadcrumbs>
            <section className=" overflow-x-auto ">
              <Table />
            </section>
          
          </div>
        </div>

        {/* サイドバー */}
        <aside className=" col-span-full lg:col-span-1 ">
          <article>SNS</article>
        </aside>
      </div>
    </section>
  );
};

export default info;
