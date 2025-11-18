import { useTranslation } from "react-i18next";
import Container from "../../components/layout/Container/Container";
import PageWrapper from "../../components/layout/PageWrapper/PageWrapper";
import Navbar from "../../nav/Navbar";
import type { DivProps } from "../../@types/types";

const Tool = ({ className, ...props }: DivProps) => {
  return <div className={`btn ${className}`} {...props} />;
};

export default function AboutPage() {
  const { t } = useTranslation("common");

  return (
    <PageWrapper>
      <Navbar />
      <Container className="project-scroller">
        <h1>About me</h1>
        <p>{t("about.me")}</p>
        <h2 className="self-center">Stuff I know</h2>
        <div className="flex flex-wrap gap-4">
          <Tool>Python</Tool>
          <Tool>Typescript</Tool>
          <Tool>C#</Tool>
          <Tool>React</Tool>
          <Tool>Django</Tool>
          <Tool>Tailwind</Tool>
          <Tool>Bash</Tool>
          <Tool>Git</Tool>
          <Tool>Docker</Tool>
          <Tool>Unity</Tool>
          <Tool>C++</Tool>
          <Tool>Unreal</Tool>
        </div>
      </Container>
    </PageWrapper>
  );
}
