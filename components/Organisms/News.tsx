import { IconInfoCircle } from "@tabler/icons-react";

const NewsData = [
  {
    date: "2022.01.15",
    title: "ホームページを開設いたしました",
  },
];


const News = () => {
  return (
    <>
      <h1 className="flex items-center gap-1">
        <IconInfoCircle />
        Information
      </h1>
      {NewsData.map((news) => (
        <p key={news.date} className="">
          <span>{news.date}</span> {news.title}
        </p>
      ))}
    </>
  );
};

export default News;
