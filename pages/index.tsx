import { Carousel } from "../components/Organisms/Carousel";

export default function Home() {
  return (
    <div>
      <section className="w-full">
      <Carousel />
      </section>
      <section>info</section>

      <div className="container mx-auto px-3 grid grid-cols-4 gap-5 ">
        <div className=" col-span-full lg:col-span-3">
          <div className="flex flex-col gap-5 ">
          <section className="bg-secondary">ホワイトニングの説明</section>
          <section>薬品はどれを使うか</section>
          <section>道案内</section>
          <section>施術までの手順</section>
          <section>料金表</section>

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
