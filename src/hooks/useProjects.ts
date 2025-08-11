import { Projects } from "@/data/Projects";
import { formatTechList } from "@/logic/formatters";
import type { Project } from "@/types/Projects";

interface ProjectData {
  projects: Project[];
  formattedProjects: Project[];
}

export const useProjects = (): ProjectData => {
  const formattedProjects = Projects.map((project) => ({
    ...project,
    technologies: formatTechList(project.technologies),
  }));
  return {
    projects: Projects,
    formattedProjects,
  };
};
