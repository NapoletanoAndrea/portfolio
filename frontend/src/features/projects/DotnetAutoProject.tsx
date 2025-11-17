import { useTranslation } from "react-i18next";
import ImageButton from "../../components/ui/ImageButton/ImageButton";
import { IMAGES_PATH } from "../../constants";
import NewLineTrans from "../lang/components/NewLineTrans";
import { useProject } from "./hooks/useProject";
import ProjectContainer from "./components/ProjectContainer";

export default function DotnetAutoProject() {
  const project = useProject();
  const { t } = useTranslation("projects");

  return (
    <ProjectContainer>
      <h1 className="self-center">{project.name}</h1>
      <ImageButton src={`${IMAGES_PATH}autodotnet/main.png`}></ImageButton>
      <p className="whitespace-pre-line">
        <NewLineTrans ns={"projects"} i18nKey={"autodotnet.long_description"} />
      </p>
      <ImageButton src={`${IMAGES_PATH}autodotnet/new_file.png`}></ImageButton>
      <p className="whitespace-pre-line">{t("autodotnet.new_file")}</p>
      <ImageButton src={`${IMAGES_PATH}autodotnet/load_file.png`}></ImageButton>
      <p className="whitespace-pre-line">{t("autodotnet.load_file")}</p>
    </ProjectContainer>
  );
}
