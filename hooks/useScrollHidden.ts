import { useEffect, useState } from "react";

const useScrollHidden = () => {

    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
      const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return {
        isVisible
    }
}

export default useScrollHidden;