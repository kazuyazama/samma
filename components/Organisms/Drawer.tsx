import DrawerItem from "./DrawerItem";
import Hamburger from "../Atoms/Hamburger";
import { useState } from "react";

const Drawer = () => {
  const [visible, setVisible] = useState(false);

  const itemToggle = () => {
    setVisible((prev) => !prev);
  };

  return (
    <>
      <button onClick={itemToggle} className="">
        <Hamburger visible={visible} />
        {/* <GiHamburgerMenu size={30} /> */}
      </button>
      {visible && <DrawerItem setVisible={setVisible} />}
      
    </>
  );
};

export default Drawer;
