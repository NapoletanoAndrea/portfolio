import type { DivProps } from "../../../types/types";

export default function Container({ className, ...props }: DivProps) {
  return (
    <div
      className={`w-container px-container-x mx-auto max-w-full ${className}`}
      {...props}
    />
  );
}
