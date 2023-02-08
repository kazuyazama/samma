import { compareData, compareOtherData } from "../assets/compareData";
import CompareOther from "./CompareOther";

const  Compare = () => {
  return (
    <>
      <article className="">
        <h1 className=" py-10 text-center text-2xl">
          一般的なホワイトニングとの違い
        </h1>
        <div className="  overflow-x-scroll  outline outline-1 outline-gray-300 rounded-2xl ">
          <table className=" table w-full ">
            <thead className=" text-center">
              <tr className=" ">
                <th className=""></th>
                <th className="">一般的なホワイトニング</th>
                <th className="lg:text-lg text-base-100 bg-primary">セルフホワイトニング</th>
              </tr>
            </thead>
            <tbody>
              {compareData.map((th, index) => (
                <tr key={index}>
                  <th className="flex items-center gap-2">
                    {<th.icon color="orange" className=" inline" />}
                    <span>{th.title}</span>
                  </th>
                  <td>{th.before}</td>
                  <td className=" border-l border-primary">{th.after}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
          <p className="text-sm pt-2 text-right lg:hidden">右にスクロールしてください</p>
      </article>
      <CompareOther compareOtherData={compareOtherData} />
    </>
  );
};

export default Compare;
