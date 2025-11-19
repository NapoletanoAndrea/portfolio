import { useTranslation } from "react-i18next";
import Container from "../../components/layout/Container/Container";
import PageWrapper from "../../components/layout/PageWrapper/PageWrapper";
import Navbar from "../../nav/Navbar";
import type { DivProps } from "../../@types/types";
import BackButton from "../../components/ui/BackButton/BackButton";

const Tool = ({ className, ...props }: DivProps) => {
  return <div className={`btn ${className}`} {...props} />;
};

export default function AboutPage() {
  const { t } = useTranslation("common");

  return (
    <PageWrapper>
      <Navbar />
      <Container className="project-scroller">
        <h1 className="self-start">About me</h1>
        <p>{t("about.me")}</p>
        <h2 className="self-center">{t("about.education")}</h2>
        <div className="flex flex-col gap-2">
          <h3 className="underline">ITS Tullio Buzzi (Prato)</h3>
          <div className="font-bold">{t("about.it_diploma")}</div>
          <p>2015 - 2020</p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="underline">TheSign Academy (Firenze)</h3>
          <div className="font-bold">{t("about.game_programming_course")}</div>
          <p>2020 - 2023</p>
        </div>
        <h2 className="self-center">{t("about.work_experience")}</h2>
        <div className="flex flex-col gap-2">
          <h3 className="underline">
            Software Developer - C.M.T. srl (Montemurlo)
          </h3>
          <div className="font-bold">{t("about.cmt_date")}</div>
          <p className="whitespace-pre-line">
            {t("about.cmt_work_experience")}
          </p>
        </div>
        <h2 className="self-center">{t("about.tools")}</h2>
        <div className="flex flex-wrap gap-4">
          <Tool>Python</Tool>
          <Tool>Typescript</Tool>
          <Tool>C#</Tool>
          <Tool>.NET</Tool>
          <Tool>React</Tool>
          <Tool>Django</Tool>
          <Tool>Tailwind</Tool>
          <Tool>Bash</Tool>
          <Tool>Git</Tool>
          <Tool>Docker</Tool>
          <Tool>Unity</Tool>
          <Tool>C++</Tool>
          <Tool>Unreal</Tool>
          <Tool>Figma</Tool>
        </div>
        <BackButton className="self-center mt-12"/>
      </Container>
    </PageWrapper>
  );
}
