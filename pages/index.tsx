export default function Home() {
  return (
    <div>
      <section className="w-full">carousel</section>
      <section>info</section>

      <div className="container mx-auto px-3 grid grid-cols-4 gap-5 ">
        <div className=" col-span-3">
          <div className="flex flex-col gap-5">
          <section className="bg-secondary">TopAbout</section>
          <section></section>
          <section>お客様の声</section>
          <section>人気の理由</section>
          <section>TopQ&A</section>

          </div>
        </div>

        {/* サイドバー */}
        <aside className="bg-secondary col-span-1">
          <section>SNS</section>
        </aside>
      </div>
    </div>
  );
}
