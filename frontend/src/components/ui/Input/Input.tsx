import type { InputProps } from "../../../types/types";

export default function Input({ className = "", ...props }: InputProps) {
  return <input className={`input ${className}`} {...props}></input>;
}
