import Image from "next/image";
import Link from "next/link";
import { access } from "../../assets/info/access";
import { profile } from "../../assets/info/profile";

// type Props = {
//   title: string;
//   discription: string[];
// }[];

const Table = () => {
  return (
    <table className=" grid  table-auto border-separate border-spacing-11">
      <thead className="  ">
        <tr className="grid gap-7 ">
          {/* <th className=" font-normal">
            <TopTitleText>店舗案内</TopTitleText>
          </th> */}
          <th className="text-left leading-relaxed tracking-widest pt-10 -mb-5 font-normal  ">
            安い・早い・痛くない歯のホワイトニングサロン
            神奈川県川崎市の川崎駅から徒歩○分!
            １回３０分で白さが実感でき、食事制限がない歯のホワイトニング専門店です。
          </th>
          <th>
            <Image
              width={1000}
              height={200}
              className="  object-cover rounded-md hidden lg:block"
              src="/images/suginuma-top.jpg"
              sizes="100%"
              alt="infoImage"
            />
            <Image
              width={500}
              height={500}
              className="object-cover rounded-md lg:hidden"
              src="/images/suginuma-top.jpg"
              sizes="100% (max-width:768px) 50vh"
              alt="infoImage"
            />
          </th>
          <th className="text-left leading-relaxed tracking-widest pb-10 font-normal">
            女性はもちろん♪男性もお気軽にお越しください。マスクの下は輝く白い歯で第一印象UPを目指しましょう♡
          </th>
        </tr>
      </thead>

      <tbody className="w-full">
        {profile.map((li) => (
          <tr
            key={li.title}
            className="flex items-center gap-5 border-t border-primary py-5 last:border-y "
          >
            <th className="basis-1/3 text-left tracking-wider ">{li.title}</th>

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
          <tr key={li.title} className="flex items-center gap-5 py-5 ">
            <td className="basis-full ">
              <p className=" text-lg tracking-wider ">{li.title}</p>

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
  );
};

export default Table;
