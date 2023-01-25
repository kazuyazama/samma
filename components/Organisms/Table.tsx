import Image from "next/image";
import Link from "next/link";
import { access } from "../../libs/info/access";
import { profile } from "../../libs/info/profile";
import TopTitleText from "../Atoms/TopTitleText";

// type Props = {
//   title: string;
//   discription: string[];
// }[];

const Table = () => {
  return (
    <table className="table-auto w-full border-separate border-spacing-11">
      <thead className=" ">
        <tr className="grid gap-7 ">
          <th className=" font-normal">
            <TopTitleText>店舗案内</TopTitleText>
          </th>
          <th className="text-left">
            安い・早い・痛くない歯のホワイトニングサロン
            神奈川県川崎市の鷺沼駅から徒歩3分!
            １回３０分で白さが実感でき、食事制限がない歯のホワイトニング専門店です。
          </th>
          <th>
            <Image
              width={400}
              height={200}
              className=" object-cover w-full"
              src="/images/suginuma-top.jpg"
              alt=""
            />
          </th>
          <th className="text-left">
            女性はもちろん♪男性もお気軽にお越しください。マスクの下は輝く白い歯で第一印象UPを目指しましょう♡
          </th>
        </tr>
      </thead>

      <tbody className="w-full">
        {profile.map((li) => (
          <tr
            key={li.title}
            className="flex gap-5 py-5 items-center border-t last:border-y  border-black "
          >
            <td className="basis-1/3 ">{li.title}</td>

            <td className="basis-full">
              {/* 配列が1つだけの時 */}
              {li.discription.length === 1 ? (
                <p className=" leading-relaxed">{li.discription[0]}</p>
              ) : (
                // 配列が2つの時
                <>
                  <p className=" leading-relaxed">{li.discription[0]}</p>
                  <p className=" leading-relaxed">{li.discription[1]}</p>
                  {/* 配列が3つの時かつGoogle Mapで見る以外の時はpタグでそれ以外はLinkタグ */}
                  {li.discription.length === 3 &&
                  li.discription[2] !== "Google Mapで見る" ? (
                    <p className=" leading-relaxed">{li.discription[2]}</p>
                  ) : (
                    <Link
                      className=" underline"
                      href="https://goo.gl/maps/zKQRtuPeU23qskRp8"
                    >
                      {li.discription[2]}
                    </Link>
                  )}
                </>
              )}
            </td>
          </tr>
        ))}
        {access?.map((li) => (
          <tr key={li.title} className="flex gap-5 py-5 items-center ">
            <td className="basis-full">
              <span>{li.title}</span>

              <Image
                src={li.src}
                width={300}
                height={300}
                alt={li.alt}
                className="w-full"
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
