import Container from "../../../components/layout/Container/Container";
import PageWrapper from "../../../components/layout/PageWrapper/PageWrapper";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <PageWrapper>
      <Container className="pt-24">
        <LoginForm />
      </Container>
    </PageWrapper>
  );
}
