import { Link } from "react-router-dom";
import Container from "../../components/layout/Container/Container";
import PageWrapper from "../../components/layout/PageWrapper/PageWrapper";

export default function NotFound() {
  return (
    <PageWrapper>
      <Container>
        <div className="mx-auto flex w-fit flex-col items-center space-y-12 pt-16">
          <h1 className="text-8xl font-semibold">404 Not found</h1>
          <Link to="/" className="btn">
            Back to home
          </Link>
        </div>
      </Container>
    </PageWrapper>
  );
}
