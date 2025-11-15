import { useState } from "react";
import Button from "../../../components/ui/Button/Button";
import type {
  ButtonProps,
  Project,
  ProjectCategory,
} from "../../../types/types";
import { StringUtils } from "../../../utils/StringUtils";
import { useTranslation } from "react-i18next";
import { useProjects } from "../../../AppContext";
import { categoryColors } from "../projects";

const CategoryButton = ({ className, ...props }: ButtonProps) => {
  return (
    <Button
      className={`col-span-1 flex items-center justify-center ${className}`}
      {...props}
    />
  );
};

interface ProjectListItemProps extends ButtonProps {
  project: Project;
}

const ProjectListItem = ({
  project,
  className,
  ...props
}: ProjectListItemProps) => {
  const { t } = useTranslation();
  const catColor = categoryColors[project.category];
  return (
    <Button
      className={`relative flex flex-col items-start gap-2 px-6 py-4 ${className}`}
      {...props}
    >
      <h3>{t("projects.calendar.name")}</h3>
      <p className="text-start">{project.description}</p>
      <div className="flex gap-3">
        {project.tags.map((tag: string) => (
          <div key={tag} className="bg-bg-200 border px-1 text-xs">
            {tag}
          </div>
        ))}
        <div
          className={`absolute top-4 right-6 text-sm`}
          style={{ color: catColor }}
        >
          {project.category}
        </div>
      </div>
    </Button>
  );
};

export default function ProjectList() {
  const [selectedCategory, setSelectedCategory] = useState<
    ProjectCategory | undefined
  >(undefined);

  const { t } = useTranslation();

  const { projectCategories, projects } = useProjects();

  return (
    <>
      <div className="flex flex-col gap-12">
        <h2 className="mx-auto">{`**${t("common.projects")}**`}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4">
          <CategoryButton
            onClick={() => setSelectedCategory(undefined)}
            className={
              StringUtils.isNullOrEmpty(selectedCategory) ? "selected" : ""
            }
          >
            {t("common.all")}
          </CategoryButton>
          {Object.values(projectCategories).map((cat) => {
            return (
              <CategoryButton
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={selectedCategory === cat ? "selected" : ""}
              >
                {cat}
              </CategoryButton>
            );
          })}
        </div>
        {projects
          .filter(
            (item) => !selectedCategory || item.category === selectedCategory,
          )
          .map((project) => (
            <ProjectListItem key={project.name} project={project} />
          ))}
        <div className="flex flex-col gap-5"></div>
      </div>
    </>
  );
}
