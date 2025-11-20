import ImageButton from "../../components/ui/ImageButton/ImageButton";
import { IMAGES_PATH } from "../../constants";
import NewLineTrans from "../lang/components/NewLineTrans";
import { useProject } from "./hooks/useProject";
import ProjectContainer from "./components/ProjectContainer";
import { Link } from "react-router-dom";
import { ArrowUpRightFromSquare } from "lucide-react";
import { GithubIcon } from "../../components/svgs";

export default function MaterialsAIProject() {
  const project = useProject();

  return (
    <ProjectContainer>
      <h1 className="self-center">{project.name}</h1>
      <ImageButton src={`${IMAGES_PATH}materials_ai/main.png`}></ImageButton>
      <p className="whitespace-pre-line">
        <NewLineTrans
          ns={"projects"}
          i18nKey={"materials_ai.long_description"}
        />
      </p>
      <ImageButton src={`${IMAGES_PATH}materials_ai/upload.png`}></ImageButton>
      <p className="whitespace-pre-line">
        <NewLineTrans
          ns={"projects"}
          i18nKey={"materials_ai.upload"}
        />
      </p>
      <div className="mb-24 flex gap-6 self-start">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          to="https://drive.google.com/file/d/1rey8pG5HqxEsWlZhgqkhGGrYMz_xbtfF/view"
          className="btn"
        >
          Website
          <ArrowUpRightFromSquare className="max-w-4" />
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          to="https://github.com/NapoletanoAndrea/materials-db-app"
          className="btn"
        >
          Repo
          <GithubIcon className="max-w-4" />
        </Link>
      </div>
    </ProjectContainer>
  );
}
