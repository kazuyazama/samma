import { IconBulb } from "@tabler/icons-react";
import Image from "next/image";
import Breadcrumbs from "../components/Atoms/Breadcrumbs";
import SectionTitle from "../components/Atoms/SectionTitle";
import TopTitleText from "../components/Atoms/TopTitleText";
import Compare from "../components/Compare";
import Onayami from "../components/Onayami";
import Osusume from "../components/Osusume";

const introData = [
  { title: "しみない！\n痛くない！", path: "#siminai" },
  { title: "早い！ 最短30分！", path: "#hayai" },
  { title: "安心・安全", path: "#ansin" },
  { title: "すぐに飲食OK！", path: "#inshoku" },
  { title: "1回4,980円～\nリーズナブル", path: "#reasonable" },
  { title: "直前予約OK！", path: "#reservation" },
  { title: "自然な白さに！", path: "#natural" },
];

const mainData = [
  {
    title: "しみない！\n痛くない！",
    subTitle: "効果と安全性の両面にこだわっています。",
    description:
      "ホワイトニング溶液の主成分は、食品や歯磨き粉にも使用されている安全性の高い無機化合物「酸化チタン」です。歯や歯茎にはダメージがないので、歯がしみたり、痛みは一切ありません。  老若男女問わず年間5万人以上のお客様にご利用いただいている、安心の実績です。",
    id: "siminai",
  },
  {
    title: "安心・安全",
    subTitle: "歯科医師も認めるクォリティー",
    description:
      "日本トップクラスのメーカーが監修し制作したオリジナルのホワイト溶液は口の中に入れるものだからこそ認可された国内工場で製造し、安全に作られています。LEDライトの光も国内の検証機関において、人体に影響を与える紫外線を発しない波長域に位置する「可視光線」帯の青色LEDライトであることが検証試験済みです｡安心してご利用ください。",
    id: "ansin",
  },
  {
    title: "1回4980円〜\nリーズナブル",
    subTitle: "安いだけじゃなく、しっかり結果が出る！",
    description:
      "sammaでは研修を受けた経験豊富なスタッフが、少ない施術回数で白さを実感できるよう毎回サポートを行うので、低価格なのに最大限の効果を得られます。また、歯の本数による料金アップはありません。笑顔で見える範囲すべてのホワイトニングで一律料金です。",
    id: "reasonable",
  },
  {
    title: "自然な白さに！",
    subTitle: "白すぎるのは不自然で嫌…という方にオススメ！",
    description:
      "効果の現れ方には個人差はありますが、1回の来店で平均2〜4トーン明るくなる方が多く、回数を重ねることで更に透明感のある滑らかな自然な白さを目指します。歯の表面に付着した着色汚れを落とすことで、ご自身の本来の歯の白さを取り戻します。人工的な真っ白になることはございません。",
    id: "natural",
  },
  {
    title: "早い！\n最短30分！",
    subTitle: "ちょっとした空き時間で、スピーディーに白さ実感！",
    description:
      "初回はカウンセリングを含めて1時間程お時間をいただきますが、2回目以降は30分！最短30分とスピーディーなので、待ち合わせ前、買い物途中、休憩時間、お仕事帰りなど手軽にケアが可能です。はじめは蓄積した汚れを落とす為に週1回ペースで4～5回繰り返し通っていただき、本来の歯の白さに戻します。早く白くしたいなどご希望のある方は連続して施術する事も可能ですので、ご相談下さい♪",
    id: "speedy",
  },
  {
    title: "すぐに飲食しても大丈夫",
    subTitle: "食事制限がないのでストレスフリー！",
    description:
      "コーヒーや紅茶、赤ワインなど好きなものを制限するのはストレスですよね！sammaのWホワイトニングは、汚れを落とすだけでなく、歯の表面をコーティングして汚れの再付着を防ぐので、ホワイトニング直後から飲食が可能です。飲食・喫煙OKなので食事前や、デートや合コンの直前に利用できるので喜ばれています！",
    id: "inshoku",
  },
  {
    title: "直前予約OK！",
    subTitle:
      "何日も前から予約しなくても大丈夫！当日予約で気楽にホワイトニング！",
    description:
      "ネットから24時間いつでも、日時の選択と簡単フォーム入力60秒で予約可能。当日の直前予約も大歓迎なので、ちょっと時間があいたから…というときにも気軽にお越しいただけます。",
    id: "reservation",
  },
];

const About = () => {
  return (
    <section className="container mx-auto grid justify-items-center gap-3 px-3 py-10  pt-5">
      <div className="container mx-auto grid grid-cols-4 gap-14 px-3 ">
        <div className=" col-span-full ">
          <div className="flex flex-col gap-5 ">
            <Breadcrumbs>sammaについて</Breadcrumbs>
          </div>
        </div>

        <article className="col-span-full">
          <TopTitleText>sammaでセルフホワイトニング</TopTitleText>
          <Image
            src="/images/2-top3.jpg"
            className="py-10"
            alt=""
            width={1000}
            height={200}
          />
          <h1 className="pb-3 text-xl">
            始めやすい価格 x 1回20分のスピード施術
          </h1>
          <h3 className=" text-lg">
            ホワイトニングはセルフでできる時代に。
            忙しい方にも空き時間に受けていただけ、これまでのホワイトニング
            よりずっとお手頃で気軽に初められます。
          </h3>
        </article>

        <section className=" col-span-full flex flex-col gap-14 rounded-lg py-20 ">
          <Onayami />
          <Osusume />
          <Compare />
        </section>

        {/* <article className=" col-span-full">
          <ul className="grid lg:grid-cols-2 justify-center lg:justify-start  gap-10">
            {introData.map((intro, length) => (
              <li key={intro.title} className="flex w-full  ">
                <a href={`${intro.path}`}>
                  <article className="flex items-center gap-7  ">
                    <Image
                      src="/images/K_img08.png"
                      alt=""
                      width={150}
                      height={150}
                      className= " hidden lg:inline-flex "
              
                    />
                    <Image
                      src="/images/K_img08.png"
                      alt=""
                      width={100}
                      height={100}
                      className="  lg:hidden "
              
                    />
                    <div className="  flex flex-col items-start gap-2 ">
                      <span className="rounded-3xl bg-primary py-1 px-5 text-xl text-base-100">
                        理由
                        <span className=" pl-1 text-accent">{length + 1}</span>
                      </span>
                      <p className="text-lg lg:text-xl ">
                        {intro.title.split("\n").map((text, index) => (
                          <span  className=" block lg:hidden"  key={index}>{text}</span>
                        ))}
                        <span className=" hidden lg:inline ">{intro.title}</span>
                      </p>
                    </div>
                  </article>
                </a>
              </li>
            ))}
          </ul>
        </article> */}

        {/* pb-80は最後のやつをスクロールしたら指定した位置よりかなり上に来ちゃうから調整用(後で消すかも) */}

        {/* <section className=" col-span-full pb-80 ">
          <article>
            <ul className="grid gap-20 ">
              {mainData.map((main) => (
                <li key={main.id} id={main.id} className="scroll-margin w-full">
                  <SectionTitle>{main.title}</SectionTitle>
                  <article className="flex flex-col lg:flex-row  items-center gap-5">
                    <Image
                      src="/images/K_img08.png"
                      alt=""
                      width={150}
                      height={150}
                      className=" lg:basis-1/3  self-end lg:self-center order-2 "
                    />
                    <div className=" flex basis-full flex-col gap-3">
                      <div className="    flex w-32 justify-center gap-2 rounded-xl bg-accent py-1 text-xl ">
                        <IconBulb className="text-base-100" />
                        <span className="  text-base-100">POINT</span>
                      </div>
                      <h3 className="text-xl text-accent font-semibold tracking-wider">{main.subTitle}</h3>
                      <p>{main.description}</p>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </article>
        </section> */}
      </div>
    </section>
  );
};

export default About;
