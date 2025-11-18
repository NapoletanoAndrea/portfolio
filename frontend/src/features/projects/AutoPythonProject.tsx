import { useTranslation } from "react-i18next";
import ImageButton from "../../components/ui/ImageButton/ImageButton";
import ProjectContainer from "./components/ProjectContainer";
import { useProject } from "./hooks/useProject";
import { IMAGES_PATH } from "../../constants";

export default function AutoPythonProject() {
  const project = useProject();
  const { t } = useTranslation("projects");

  return (
    <ProjectContainer>
      <h1 className="self-center">{project.name}</h1>
      <ImageButton src={`${IMAGES_PATH}autopython/all.png`}></ImageButton>
      <p className="whitespace-pre-line">{t("autopython.long_description")}</p>
    </ProjectContainer>
  );
}
