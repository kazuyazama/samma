import Image from "next/image";
import { Carousel } from "../components/Organisms/Carousel";
import Info from "../components/Organisms/News";
import { access } from "../assets/info/access";
import { IconBong } from "@tabler/icons-react";
import { IconCaretRight } from "@tabler/icons-react";
import { IconCheck } from "@tabler/icons-react";
import Link from "next/link";
import Onayami from "../components/onayami";
import Osusume from "../components/osusume";
import Compare from "../components/compare";
import Steps from "../components/Steps";
import Step from "../components/Steps";
import Price from "../components/Menu";
import Faq from "../components/Faq";
import News from "../components/Organisms/News";
import Menu from "../components/Menu";

export default function Home() {
  return (
    <div className="">
      <section className="w-full">
        <Carousel />
      </section>
      <section className="container mx-auto grid justify-items-center gap-3 px-3 pt-5">
        <News />
      </section>

      <div className="container mx-auto grid grid-cols-4 gap-14 px-3 py-10 ">
        {/* お悩みセクション
        article > children
         title:text-2xl,[&:not(:fist-child)]:py-10 
        */}
        <section className=" col-span-full flex flex-col gap-14 rounded-xl bg-secondary px-7 py-20 ">
          <Onayami />
          <Osusume />
          <Compare />
        </section>
        <section className=" col-span-full">
          <h1 className=" text-2xl">最短30分！痛くないホワイトニングの流れ</h1>
          <div className="divider pb-5"></div>
          <Step />
        </section>
        <section className=" col-span-full">
          <h1 className=" text-2xl">ホワイトニング料金表</h1>
          <div className="divider pb-5"></div>

          <Menu />
          <p className="  col-span-full pt-3 text-right ">詳しくみる</p>

        </section>
        <section className=" col-span-full">
          <Faq />
        </section>
        <section className=" col-span-full">
          <h1 className=" text-2xl">店舗情報</h1>
          <div className="divider pb-5"></div>
          <article className="grid grid-cols-2 gap-3">
            <table className="table  ">
              <tbody>
                <tr>
                  <th>住所</th>
                  <td>北海道江別市大麻晴美町5-18</td>
                </tr>

                <tr>
                  <th>電話番号</th>
                  <td>090-5071-3120</td>
                </tr>

                <tr>
                  <th>営業時間</th>
                  <td>12:30〜20:00受付まで</td>
                </tr>
                <tr>
                  <th>定休日</th>
                  <td>土日祝</td>
                </tr>
                <tr>
                  <th>アクセス</th>
                </tr>
              </tbody>
            </table>
            <div>
              <iframe
                className="h-80 w-full"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11655.950788288332!2d141.500371!3d43.083754!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x23fa0870e8b251c5!2zVE9UT1NFUlVNICjjg4jjg4jjgrvjg6njg6Ap!5e0!3m2!1sja!2sjp!4v1675680975314!5m2!1sja!2sjp"
              />
            </div>
          </article>

          <table className=" w-full">
            <tbody>
              {access?.map((li) => (
                <tr key={li.title} className="flex items-center gap-5 py-5 ">
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
        </section>
      </div>
    </div>
  );
}
