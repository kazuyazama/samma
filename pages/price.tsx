import Image from "next/image";
import Breadcrumbs from "../components/Atoms/Breadcrumbs";
import SectionTitle from "../components/Atoms/SectionTitle";
import TopTitleText from "../components/Atoms/TopTitleText";
import Menu from "../components/Menu";

const Price = () => {
  return (
    <section className="container mx-auto grid justify-items-center gap-3 px-3 py-10  pt-5  ">
      <div className="container mx-auto grid grid-cols-4 gap-14 px-3  ">
        <div className=" col-span-full ">
          <div className="flex flex-col gap-5 ">
            <Breadcrumbs>料金</Breadcrumbs>
          </div>
        </div>

        <article className=" col-span-full">
          <TopTitleText>メニュー・料金</TopTitleText>
          <p className="pt-10 pb-2 ">
            sammaのセルフホワイトニングでは、歯の本数による料金アップ等はありません。お口を開けて、見える範囲すべてのホワイトニングで一律料金です。
            <br />
            結果に個人差はありますが、多くの方が1日の施術で2～4トーン程度アップされています。また、週1回ペースで4回程度連続して施術していただくことで自分本来の歯の色に戻すことができています！
          </p>
          <div className="grid  grid-cols-2">
            <Image
              src="/images/IMG_7990.JPG"
              alt=""
              width={300}
              height={300}
              className="w-full object-cover"
            />
            <Image
              src="/images/IMG_7990.JPG"
              alt=""
              width={300}
              height={300}
              className="w-full object-cover"
            />
            <Image
              src="/images/IMG_7990.JPG"
              alt=""
              width={300}
              height={300}
              className="w-full object-cover"
            />
            <Image
              src="/images/IMG_7990.JPG"
              alt=""
              width={300}
              height={300}
              className="w-full object-cover"
            />
          </div>
          <p className="pt-2">
            お得な回数券もご用意していますので、実際に体験し、スタッフの説明を受けて、ご自身にあったコースをお選びいただければと思います。無理な勧誘等は一切ありませんので気軽にお越しください。お得なキャンペーンも実施中です。
          </p>
        </article>

        <section className=" col-span-full">
          <SectionTitle>ホワイトニング料金表</SectionTitle>

          <Menu />
        </section>
        <article className=" col-span-full">
          <SectionTitle>おすすめの通い方</SectionTitle>

          <p>
            結果に個人差はありますが、多くの方が1回の施術(LED照射8分×2回)で2～4トーン程度アップされています。また、週1回ペースで4〜8回くらい連続して行うことで自分本来の歯の色に戻すことができます。その後は月1～2回程度のメンテナンスで明るく輝く歯を維持していくことができます。
            少しでも早く効果を得たいという方は、毎日通っていただいても大丈夫ですし、一度のご来店で2回の施術（8分×4回）を行うことも可能です。歯にダメージのあるものではないので、連続して行うことはまったく問題ありません。ご希望される方は2回分のご予約をネットまたはお電話でお取り下さい。
          </p>
        </article>
      </div>
    </section>
  );
};

export default Price;
