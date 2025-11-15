import Container from "../../components/layout/Container/Container";
import PageWrapper from "../../components/layout/PageWrapper/PageWrapper";
import Button from "../../components/ui/Button/Button";
import Input from "../../components/ui/Input/Input";
import TextArea from "../../components/ui/TextArea/TextArea";

export default function StyleSheetPage() {
  return (
    <PageWrapper className="gap-4 py-8">
      <Container id="headings">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
      </Container>
      <Container id="text">
        <div className="container">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </Container>
      <Container id="elements">
        <div className="container">
          <div className="flex items-start gap-4">
            <Button>Button</Button>
            <Input placeholder="Input" type="text" />
            <TextArea placeholder="Text" />
          </div>
        </div>
      </Container>
    </PageWrapper>
  );
}
