import Container from "../../components/layout/Container/Container";
import PageWrapper from "../../components/layout/PageWrapper/PageWrapper";
import Hero from "../../components/ui/Hero/Hero";
import Navbar from "../../nav/Navbar";
import ProjectList from "../projects/components/ProjectList";

export default function HomePage() {
  return (
    <PageWrapper>
      <div className="flex w-full flex-col gap-20">
        <Navbar />
        <Container>
          <Hero />
        </Container>
        <Container>
          <ProjectList />
        </Container>
      </div>
    </PageWrapper>
  );
}
