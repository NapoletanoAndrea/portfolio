import { useLocation } from "react-router-dom";
import { useProjects } from "../../../AppContext";
import type { Project } from "../../../@types/types";

export const useProject = (): Project => {
  const { projects } = useProjects();
  const { pathname } = useLocation();

  function getProjectSlugFromPath(url: string): string | null {
    const parts = url.split("/").filter(Boolean); // remove empty segments
    const index = parts.indexOf("projects");

    if (index === -1 || index === parts.length - 1) return null;
    return parts[index + 1];
  }

  return projects.filter(
    (project) => project.path === getProjectSlugFromPath(pathname),
  )[0];
};
