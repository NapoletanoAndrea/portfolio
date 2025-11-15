import { Loader2, type LucideProps } from "lucide-react";
import "./LoadingSpinner.scss";

export default function LoadingSpinner({ className, ...props }: LucideProps) {
  return <Loader2 className={`animate-spin ${className}`} {...props} />;
}
