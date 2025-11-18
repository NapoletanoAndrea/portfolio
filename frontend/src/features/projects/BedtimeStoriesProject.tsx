import { useTranslation } from "react-i18next";
import ImageButton from "../../components/ui/ImageButton/ImageButton";
import ProjectContainer from "./components/ProjectContainer";
import { useProject } from "./hooks/useProject";
import { IMAGES_PATH } from "../../constants";
import { Link } from "react-router-dom";
import { ArrowUpRightFromSquare } from "lucide-react";

export default function BedtimeStoriesProject() {
  const project = useProject();
  const { t } = useTranslation("projects");

  return (
    <ProjectContainer>
      <h1 className="self-center">{project.name}</h1>
      <ImageButton src={`${IMAGES_PATH}bedtime_stories/main.jpg`}></ImageButton>
      <p className="whitespace-pre-line">
        {t("bedtime_stories.long_description")}
      </p>
      <div className="mb-24 flex gap-6 self-start">
        <Link
          to="https://drive.google.com/file/d/1rey8pG5HqxEsWlZhgqkhGGrYMz_xbtfF/view"
          className="btn"
        >
          Build
          <ArrowUpRightFromSquare className="max-w-4" />
        </Link>
      </div>
    </ProjectContainer>
  );
}
