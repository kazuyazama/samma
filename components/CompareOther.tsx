type Props = {
  compareOtherData: {
    title: string;
    description: string;
  }[];
};

const CompareOther = ({ compareOtherData }: Props) => {
  return (
    <article className="">
      <h1 className="py-10 text-center text-2xl">
        当店のセルフホワイトニングには他にもこんなメリットがあります。
      </h1>

      <div className="grid grid-cols-2 gap-5  ">
        {compareOtherData.map((other, index) => (
          <article
            key={other.title}
            className="card  bg-primary text-primary-content"
          >
            <div className="card-body">
              <div className="flex items-center gap-5">
                <span className="text-5xl text-base-100 opacity-60">
                  {index + 1}
                </span>
                <h2 className={`card-title `}> {other.title}</h2>
              </div>
              <p>{other.description}</p>
            </div>
          </article>
        ))}
      </div>
    </article>
  );
};

export default CompareOther;
