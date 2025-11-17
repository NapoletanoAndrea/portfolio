import { createContext, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import type { Project, ProjectCategory } from "./@types/types";
import { StringUtils } from "./utils/StringUtils";
import { useLocation } from "react-router-dom";
import ImageModal from "./components/ui/ImageModal/ImageModal";

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
      tags: [".NET", "C#", "EPPlus", "Avalonia", "Python"],
      longDescription: t("projects:autodotnet.long_description"),
      category: projectCategories.desktop,
    },
    {
      path: "ordermanager",
      name: t("projects:ordermanager.name"),
      description: t("projects:ordermanager.description"),
      tags: ["Django", "React", "Postgresql", "JWT", "Capacitor"],
      longDescription: t("projects:ordermanager.long_description"),
      category: projectCategories.fullStack,
    },
    {
      path: "webmanual",
      name: t("projects:webmanual.name"),
      description: t("projects:webmanual.description"),
      tags: ["Django", "React", "Postgresql", "JWT"],
      longDescription: t("projects:webmanual.long_description"),
      category: projectCategories.fullStack,
    },
  ];

  const categoryColors: Record<ProjectCategory, string> = {
    [projectCategories.fullStack]: "#00FF2F",
    [projectCategories.desktop]: "#FF00AA",
    [projectCategories.game]: "cyan",
  };

  const [mainModal, setMainModal] = useState<string>("");
  const { pathname } = useLocation();

  useEffect(() => {
    if (!StringUtils.isNullOrEmpty(mainModal)) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mainModal]);

  useEffect(() => {
    setMainModal("");
  }, [pathname]);

  return (
    <AppContext.Provider
      value={{
        mainModal,
        setMainModal,
        projectCategories,
        projects,
        categoryColors,
      }}
    >
      {props.children}
      <ImageModal
        isOpen={mainModal !== ""}
        onClose={() => setMainModal("")}
        src={mainModal}
      />
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
