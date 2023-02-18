import Image from "next/image";
import { access } from "../assets/info/access";
import SectionTitle from "./Atoms/SectionTitle";

const IndexInfo = () => {
  return (
    <>
      <SectionTitle>店舗情報</SectionTitle>
      <article className="grid gap-3 lg:grid-cols-2">
        <table className="table  ">
          <tbody>
            <tr>
              <th>住所</th>
              <td>神奈川県川崎市川崎区小川町13-3 銀蔵ビル2階</td>
            </tr>

            <tr>
              <th>電話番号</th>
              <td>044-387-2747</td>
            </tr>

            <tr>
              <th>営業時間</th>
              <td>12:30〜20:00受付まで</td>
            </tr>
            <tr>
              <th>定休日</th>
              <td>不定休</td>
            </tr>
            <tr>
              <th>アクセス</th>
            </tr>
          </tbody>
        </table>
        <div>
          <iframe
            className="h-80 lg:h-96 w-full"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11655.950788288332!2d141.500371!3d43.083754!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x23fa0870e8b251c5!2zVE9UT1NFUlVNICjjg4jjg4jjgrvjg6njg6Ap!5e0!3m2!1sja!2sjp!4v1675680975314!5m2!1sja!2sjp"
          />
        </div>
      </article>

      <h3 className="pt-10 text-lg font-bold lg:hidden">店舗までの道のり</h3>
      <table className=" w-full">
        <tbody>
          {access?.map((li) => (
            <tr key={li.title} className="flex items-center gap-5 py-5 ">
              <td className="basis-full">
                <p className="text-xl tracking-wider">{li.title}</p>

                <Image
                  src={li.src}
                  width={400}
                  height={300}
                  alt={li.alt}
                  sizes="100%"
                  className=" object-cover w-full rounded-md"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default IndexInfo;
