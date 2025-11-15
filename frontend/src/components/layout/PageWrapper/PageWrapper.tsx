import type { DivProps } from "../../../types/types";

export default function PageWrapper({ className = "", ...props }: DivProps) {
  return (
    <div
      className={`flex min-h-screen min-w-full flex-col items-start ${className}`}
      {...props}
    ></div>
  );
}
