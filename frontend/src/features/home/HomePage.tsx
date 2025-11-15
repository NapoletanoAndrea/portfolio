import { useNavigate } from "react-router-dom";
import Container from "../../components/layout/Container/Container";
import PageWrapper from "../../components/layout/PageWrapper/PageWrapper";
import Button from "../../components/ui/Button/Button";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../constants";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <PageWrapper>
      <Container className="flex flex-col items-center gap-4">
        <h1 className="h5">Home</h1>
        <Button
          onClick={() => {
            localStorage.removeItem(ACCESS_TOKEN);
            localStorage.removeItem(REFRESH_TOKEN);
            navigate("/login");
          }}
        >
          Log out
        </Button>
      </Container>
    </PageWrapper>
  );
}
