export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  projectUrl: string;
  tags: string[];
  status?: "active" | "completed" | "in-progress";
  date: string;
  featured?: boolean;
}
