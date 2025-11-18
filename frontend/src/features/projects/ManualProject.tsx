import ImageButton from "../../components/ui/ImageButton/ImageButton";
import { IMAGES_PATH } from "../../constants";
import NewLineTrans from "../lang/components/NewLineTrans";
import ProjectContainer from "./components/ProjectContainer";
import { useProject } from "./hooks/useProject";

export default function ManualProject() {
  const project = useProject();

  return (
    <ProjectContainer>
      <h1 className="self-center">{project.name}</h1>
      <ImageButton src={`${IMAGES_PATH}webmanual/main.png`}></ImageButton>
      <div>
        <p className="whitespace-pre-line">
          <NewLineTrans ns={"projects"} i18nKey={"webmanual.long_description"} />
        </p>
      </div>
      <ImageButton src={`${IMAGES_PATH}webmanual/search.png`}></ImageButton>
      <div>
        <p className="whitespace-pre-line">
          <NewLineTrans ns={"projects"} i18nKey={"webmanual.search"} />
        </p>
      </div>
    </ProjectContainer>
  );
}
