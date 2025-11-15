import { useEffect, useState } from "react";
import { useBreakpoint } from "./breakpoints";

export const DebugBreakpoints = () => {
  const [breakpoint] = useBreakpoint();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const calcWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", calcWindowWidth);
    return () => window.removeEventListener("resize", calcWindowWidth);
  }, []);

  return (
    <div className="bg-text text-bg flex gap-2 px-2 rounded">
      <span>{breakpoint?.label}</span>
      <span>{windowWidth + "px"}</span>
      <span>{windowWidth / 16 + "rem"}</span>
    </div>
  );
};
