import { useTranslation } from "react-i18next";
import ImageButton from "../../components/ui/ImageButton/ImageButton";
import { IMAGES_PATH } from "../../constants";
import NewLineTrans from "../lang/components/NewLineTrans";
import { useProject } from "./hooks/useProject";
import ProjectContainer from "./components/ProjectContainer";

export default function OrderManagerProject() {
  const project = useProject();
  const { t } = useTranslation("projects");

  return (
    <ProjectContainer>
      <h1 className="self-center">{project.name}</h1>
      <ImageButton src={`${IMAGES_PATH}ordermanager/main.png`}></ImageButton>
      <p className="whitespace-pre-line">
        <NewLineTrans
          ns={"projects"}
          i18nKey={"ordermanager.long_description"}
        />
      </p>
    </ProjectContainer>
  );
}
