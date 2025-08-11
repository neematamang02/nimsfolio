import Projectsection from "@/components/sections/Projectsection";
import { useProjects } from "@/hooks/useProjects";

const Projects: React.FC = () => {
  const { formattedProjects } = useProjects();

  return <Projectsection Projects={formattedProjects} />;
};
export default Projects;
