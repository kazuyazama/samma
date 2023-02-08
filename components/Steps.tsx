import { stepData } from "../assets/step";

const Step = () => {
  return (
    <article className="bg-secondary p-3 rounded-lg">
      <ul className={` grid justify-items-center lg:grid-cols-4 `}>
        {stepData.map((li, length) => (
          <li key={li.title} className="relative ">
            <div className=" card  items-center bg-secondary  ">
              <h1 className="py-4">{`STEP${length + 1}`}</h1>
              <figure className="mask mask-circle  bg-base-100">
                <img src="/images/icon_flow_01.png" alt="Shoes" className=" " />
              </figure>
              <div className="card-body items-center">
                <h2 className="card-title text-primary">{li.title}</h2>
                <p>{li.description}</p>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
            {li.icon?.lg && (
              <li.icon.lg
                color="orange"
                className={` absolute top-32 left-72 z-50 hidden lg:block `}
                size={50}
                stroke={5}
              />
            )}
            {li.icon?.sp && (
              <li.icon.sp
                className={` mx-auto -translate-y-4 text-accent lg:hidden  `}
                size={50}
                stroke={5}
              />
            )}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Step;
