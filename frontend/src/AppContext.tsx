import { createContext, useContext } from "react";
import { useTranslation } from "react-i18next";
import type { Project, ProjectCategory } from "./@types/types";

const AppContext = createContext<any>({});

interface Props {
  children: React.ReactNode;
}

export const AppProvider = (props: Props) => {
  const { t } = useTranslation(["projects"]);

  const projectCategories = {
    fullStack: "Full Stack",
    desktop: "Desktop",
    game: "Game",
  } as const;

  const projects: Project[] = [
    {
      path: "calendar",
      name: t("projects:calendar.name"),
      description: t("projects:calendar.description"),
      tags: ["Django", "React", "Postgresql", "JWT", "2fa"],
      longDescription: t("projects:calendar.long_description"),
      category: projectCategories.fullStack,
    },
    {
      path: "autodotnet",
      name: t("projects:autodotnet.name"),
      description: t("projects:autodotnet.description"),
      tags: [".NET", "C#", "Avalonia", "Python"],
      longDescription: t("projects:autodotnet.long_description"),
      category: projectCategories.desktop,
    },
  ];

  const categoryColors: Record<ProjectCategory, string> = {
    [projectCategories.fullStack]: "#00FF2F",
    [projectCategories.desktop]: "#FF00AA",
    [projectCategories.game]: "cyan",
  };

  return (
    <AppContext.Provider
      value={{ projectCategories, projects, categoryColors }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const ctx = useContext(AppContext);

  if (!ctx) throw new Error("useApp must be inside an AppProvider");
  return ctx;
};

export const useProjects = (): {
  projects: Project[];
  projectCategories: Record<string, ProjectCategory>;
  categoryColors: Record<ProjectCategory, string>;
} => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useProjects must be inside an AppProvider");
  return {
    projects: ctx.projects,
    projectCategories: ctx.projectCategories,
    categoryColors: ctx.categoryColors,
  };
};
