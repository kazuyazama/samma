import { compareData, compareOtherData } from "../assets/compareData";
import CompareOther from "./CompareOther";

const Compare = () => {
  return (
    <>
      <article className="">
        <h1 className=" py-10 text-center text-2xl">
          一般的なホワイトニングとの違い
        </h1>
        <div className=" overflow-scroll ">
          <table className=" table  w-full">
            <thead>
              <tr>
                <th>比較項目</th>
                <th className="">一般的なホワイトニング</th>
                <th>セルフホワイトニング</th>
              </tr>
            </thead>
            <tbody>
              {compareData.map((th, index) => (
                <tr key={index}>
                  <td className="flex items-center gap-2">
                    {<th.icon className=" inline" />}
                    <span>{th.title}</span>
                  </td>
                  <td>{th.before}</td>
                  <td>{th.after}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>
      <CompareOther compareOtherData={compareOtherData} />
    </>
  );
};

export default Compare;
