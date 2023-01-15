import {AiFillInfoCircle} from "react-icons/ai"

type Props = {
  infoItem: {
    title: string;
    date: string;
  }[];
};

const Info = ({ infoItem }: Props) => {
  return (
    <>
      <h1 className="flex items-center gap-1"><AiFillInfoCircle />Information</h1>
      {infoItem.map((item) => (
        <p className="">
          <span>{item.date}</span> {item.title}
        </p>
      ))}
    </>
  );
};

export default Info;
