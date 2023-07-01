import { useEffect, useState } from "react";

const useMediaMatches = ({ breakpoint }) => {
  const [isMatch, setIsMatch] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(`(max-width: ${breakpoint}px)`);
    mediaQueryList.addEventListener("change", () => {
      setIsMatch(mediaQueryList.matches);
    });
    return () => {
      mediaQueryList.removeEventListener("change", () => {
        setIsMatch(false);
      });
    };
  }, [breakpoint]);

  return { isMatch };
};
export default useMediaMatches;
