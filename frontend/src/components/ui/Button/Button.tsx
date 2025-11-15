import type { ButtonProps } from "../../../types/types";

export default function Button({ className = "", ...props }: ButtonProps) {
  return <button className={`btn ${className}`} {...props} />;
}
