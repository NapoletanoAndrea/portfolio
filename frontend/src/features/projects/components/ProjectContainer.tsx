import Container from "../../../components/layout/Container/Container";
import PageWrapper from "../../../components/layout/PageWrapper/PageWrapper";
import BackButton from "../../../components/ui/BackButton/BackButton";
import Navbar from "../../../nav/Navbar";

export default function ProjectContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PageWrapper>
      <Navbar />
      <Container className="project-scroller">
        {children}
        <BackButton className="self-center" />
      </Container>
    </PageWrapper>
  );
}
