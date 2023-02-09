import { compareData, compareOtherData } from "../assets/compareData";
import CompareOther from "./CompareOther";

const Compare = () => {
  return (
    <>
      <article className="">
        <h1 className=" py-10 text-center text-2xl">
          一般的なホワイトニングとの違い
        </h1>
        <div className="  overflow-x-scroll   ">
          <table className=" w-full   min-w-[640px] table-auto border-separate border-spacing-0    ">
            <thead className=" border  bg-slate-200 text-center ">
              <tr className=" [&>*]:py-4 [&>*]:tracking-widest  ">
                <th className=" border-slate-200 ">比較項目</th>
                <th className="">一般的なホワイトニング</th>
                <th className="bg-primary text-base-100   ">
                  セルフホワイトニング
                </th>
              </tr>
            </thead>
            <tbody className=" divide-slate-200  ">
              {compareData.map((th, index) => (
                <tr key={index} className="  text-center [&>*]:py-3 ">
                  <th className="flex items-center gap-3  border-b border-l pl-4 ">
                    {<th.icon color="orange" className=" inline" />}
                    <span>{th.title}</span>
                  </th>
                  <td className="border-l  border-b  ">{th.before}</td>
                  <td className="  border-x  border-b border-primary ">
                    {th.after}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="pt-2 text-right text-sm lg:hidden">
          右にスクロールしてください
        </p>
      </article>
      <CompareOther compareOtherData={compareOtherData} />
    </>
  );
};

export default Compare;
