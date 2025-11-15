import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-1">
      <h1>Andrea Napoletano</h1>
      <p className="text-2xl">{t("hero.p")}</p>
    </div>
  );
}
