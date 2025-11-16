import { useNavigate } from "react-router-dom";
import type { ButtonProps } from "../../../@types/types";
import Button from "../Button/Button";
import { useTranslation } from "react-i18next";

export default function BackButton({
  onClick,
  children,
  ...props
}: ButtonProps) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Button
      onClick={(e: any) => {
        if (onClick) {
          onClick(e);
        }
        navigate(-1);
      }}
      {...props}
    >
      {children ? children : t("back")}
    </Button>
  );
}
