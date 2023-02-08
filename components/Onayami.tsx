import { IconCheck } from "@tabler/icons-react";
import { onayamiData } from "../assets/onayamiData";

const Onayami = () => {
  return (
    <article>
      <h1 className="pb-10 text-center text-2xl     ">
        このようなお悩みありませんか？
      </h1>
      <ul className="relative left-1/2 flex -translate-x-36 flex-col gap-5 ">
        {onayamiData.map((li, index) => (
          <li key={index} className=" flex items-center text-xl">
            <span className=" -translate-x-5 ">
              <IconCheck color="orange" className="" />
            </span>
            <span className="">{li}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Onayami;
