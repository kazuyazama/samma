import Image from "next/image";
import { Carousel } from "../components/Organisms/Carousel";
import Info from "../components/Organisms/Info";

const infoItem = [
  {
    date: "2022.01.15",
    title: "ホームページを開設いたしました",
  },
];

export default function Home() {
  return (
    <div>
      <section className="w-full">
        <Carousel />
      </section>
      <section className="container mx-auto px-3 py-10 pt-5 grid gap-3  justify-items-center">
        <Info infoItem={infoItem} />
      </section>

      <div className="container mx-auto px-3 grid grid-cols-4 gap-5 ">
        <div className=" col-span-full lg:col-span-3">
          <div className="flex flex-col gap-5 ">
            <section className="bg-secondary p-3">
              <div className="grid text-center">
                <h1>
                  ホワイトニングカフェでは より効果を感じていただくために
                  1回の施術でLEDライト8分照射 2セット 行います。
                </h1>
                <article className="border p-3">
                  <h4>20代 女性・大学生</h4>

                    <table className="table  ">
                      <thead className="text-center">
                        <tr>
                          <th>タバコ</th>
                          <th>コーヒー</th>
                          <th>ワイン</th>
                        </tr>
                      </thead>
                      <tbody className="text-center">
                        <tr>
                          <td>吸わない</td>
                          <td>1日：2～3杯</td>
                          <td>たまに</td>
                        </tr>
                      </tbody>
                    </table>
                  <Image src="/images/IMG_7998.JPG" width={300} height={300} alt="" />
                </article>
              </div>
            </section>
            <section>薬品はどれを使うか</section>
            <section>道案内</section>
            <section>施術までの手順</section>
            <section>料金表</section>
            <button className="btn bg-accent">簡単ネット予約</button>
          </div>
        </div>

        {/* サイドバー */}
        <aside className=" col-span-full lg:col-span-1 ">
          <article>SNS</article>
        </aside>
      </div>
    </div>
  );
}
