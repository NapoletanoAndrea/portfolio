import PageWrapper from "../../components/layout/PageWrapper/PageWrapper";
import LoadingSpinner from "./LoadingSpinner";

export default function LoadingPage() {
  return (
    <PageWrapper>
      <LoadingSpinner className="w-30 h-auto m-auto" />
    </PageWrapper>
  );
}
