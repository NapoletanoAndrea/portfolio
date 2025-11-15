import type { TextAreaProps } from "../../../types/types";

export default function TextArea({ className = "", ...props }: TextAreaProps) {
  return <textarea className={`input ${className}`} {...props} />;
}
