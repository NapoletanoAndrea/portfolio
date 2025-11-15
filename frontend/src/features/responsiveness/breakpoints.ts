import { useEffect, useState } from "react";

class Breakpoint {
  label: string;
  floorWidth: number;
  ceilingWidth: number | undefined;

  constructor(label: string, floorWidth?: number, ceilingWidth?: number) {
    this.label = label;
    this.floorWidth = floorWidth || 0;
    this.ceilingWidth = ceilingWidth;
  }

  equal() {
    return (
      window.innerWidth >= this.floorWidth &&
      (this.ceilingWidth === undefined ||
        window.innerWidth <= this.ceilingWidth)
    );
  }

  gequal() {
    return window.innerWidth >= this.floorWidth;
  }

  lequal() {
    if (this.ceilingWidth === undefined) return true;
    return window.innerWidth <= this.ceilingWidth;
  }
}

export const breakpoints = {
  xs: new Breakpoint("xs", 0, 639),
  sm: new Breakpoint("sm", 640, 767),
  md: new Breakpoint("md", 768, 1023),
  lg: new Breakpoint("lg", 1024, 1279),
  xl: new Breakpoint("xl", 1280, 1535),
  xl2: new Breakpoint("2xl", 1536),
};

export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>(
    new Breakpoint("", 0, undefined),
  );

  useEffect(() => {
    const calculateBreakpoint = () => {
      for (const value of Object.values(breakpoints)) {
        if (
          value.ceilingWidth === undefined ||
          window.innerWidth <= value.ceilingWidth
        ) {
          setBreakpoint(value);
          return;
        }
      }
      setBreakpoint(breakpoints.xl);
    };
    calculateBreakpoint();
    window.addEventListener("resize", calculateBreakpoint);
    return () => window.removeEventListener("resize", calculateBreakpoint);
  }, []);

  return [breakpoint];
};
