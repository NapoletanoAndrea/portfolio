import { createContext, useContext } from "react";
import { useTranslation } from "react-i18next";
import type { Project, ProjectCategory } from "./types/types";

const AppContext = createContext<any>({});

interface Props {
  children: React.ReactNode;
}

export const AppProvider = (props: Props) => {
  const { t } = useTranslation();

  const projectCategories: Record<string, ProjectCategory> = {
    fullStack: "Full Stack",
    desktop: "Desktop",
    game: "Game",
  };

  const projects: Project[] = [
    {
      name: t("projects.calendar.name"),
      description: t("projects.calendar.description"),
      tags: ["Django", "React", "Postgresql", "JWT"],
      longDescription: t("projects.calendar.long_description"),
      category: projectCategories.fullStack,
    },
  ];

  return (
    <AppContext.Provider value={{ projectCategories, projects }}>
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
} => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useProjects must be inside an AppProvider");
  return { projects: ctx.projects, projectCategories: ctx.projectCategories };
};
