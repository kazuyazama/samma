type Props = {
  visible: boolean;
};

const Hamburger = ({ visible }: Props) => {
  return (
    <div
      className={`z-[10000] ${
        visible ? "fixed" : "absolute"
      } top-1 left-0 flex items-center justify-center rounded-full w-[60px] h-[60px] transform transition-all duration-200   `}
    >
      <div className="flex flex-col justify-between w-[30px] h-[30px] transform transition-all duration-300 origin-center overflow-hidden">
        <div
          className={`bg-black h-[3px] w-14 transform transition-all duration-300 origin-left ${
            visible && "rotate-[43deg]"
          }`}
        ></div>
        <div
          className={`bg-black h-[3px] w-1/2 rounded transform transition-all duration-300  ${
            visible && "opacity-0"
          }`}
        ></div>
        <div
          className={`bg-black h-[3px] w-14 transform transition-all duration-300 origin-left ${
            visible && "rotate-[-43deg]"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default Hamburger;
