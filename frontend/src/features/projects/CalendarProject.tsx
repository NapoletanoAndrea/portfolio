import ImageButton from "../../components/ui/ImageButton/ImageButton";
import { IMAGES_PATH } from "../../constants";
import NewLineTrans from "../lang/components/NewLineTrans";
import ProjectContainer from "./components/ProjectContainer";
import { useProject } from "./hooks/useProject";

export default function CalendarProject() {
  const project = useProject();

  return (
    <ProjectContainer>
      <h1 className="self-center">{project.name}</h1>
      <ImageButton src={`${IMAGES_PATH}calendar/dashboard.png`}></ImageButton>
      <div>
        <p className="whitespace-pre-line">
          <NewLineTrans ns={"projects"} i18nKey={"calendar.long_description"} />
        </p>
        <p className="pl-4 leading-tight">
          <NewLineTrans ns={"projects"} i18nKey={"calendar.features"} />
        </p>
      </div>
      <ImageButton src={`${IMAGES_PATH}calendar/edit.png`}></ImageButton>
    </ProjectContainer>
  );
}
