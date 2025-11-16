import Container from "../../components/layout/Container/Container";
import PageWrapper from "../../components/layout/PageWrapper/PageWrapper";
import BackButton from "../../components/ui/BackButton/BackButton";
import { IMAGES_PATH } from "../../constants";
import Navbar from "../../nav/Navbar";
import NewLineTrans from "../lang/components/NewLineTrans";
import { useProject } from "./hooks/useProject";

export default function CalendarProject() {
  const project = useProject();

  return (
    <PageWrapper>
      <div className="flex w-full flex-col gap-8 pb-24">
        <Navbar />
        <Container className="flex flex-col gap-8">
          <h1 className="self-center">{project.name}</h1>
          <div className="image-border">
            <img src={`${IMAGES_PATH}calendar/Calendario.png`}></img>
          </div>
          <div>
            <p className="whitespace-pre-line">
              <NewLineTrans
                ns={"projects"}
                i18nKey={"calendar.long_description"}
              />
            </p>
            <p className="pl-4 leading-tight">
              <NewLineTrans ns={"projects"} i18nKey={"calendar.features"} />
            </p>
          </div>
          <div className="image-border">
            <img src={`${IMAGES_PATH}calendar/edit.png`}></img>
          </div>
          <BackButton className="self-center" />
        </Container>
      </div>
    </PageWrapper>
  );
}
