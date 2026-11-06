import projectDataRaw from "./project-data.json";
import { StaticImageData } from "next/image";
import akademi from "@/assets/akademi.png";
import designForgee from "@/assets/design-forgee.png";
import bookStore from "@/assets/book-store.png";
import lingoBingo from "@/assets/lingo-bingo.png";
import mediride from "@/assets/mediride.png";
import developme from "@/assets/developme.png";
import creativeHub from "@/assets/creative-hub.png";

export interface Project {
  index: number;
  title: string;
  cardTitle?: string;
  subtitle: string;
  modalId: string;
  image: string;
  liveLink: string;
  frontendRepo?: string;
  backendRepo?: string;
  isHomePlacement: boolean;
  showOnProjectsPage?: boolean;
  description: string;
  technologies: string[];
  challenges?: string[];
  solutions?: string[];
}

export const projectImageMap: Record<string, StaticImageData> = {
  akademi,
  designForgee,
  bookStore,
  lingoBingo,
  mediride,
  developme,
  creativeHub,
};

export const projects: Project[] = projectDataRaw as Project[];

export const getHomeProjects = (): Project[] => {
  return [...projects]
    .filter((project) => project.isHomePlacement)
    .sort((a, b) => a.index - b.index);
};

export const getPortfolioProjects = (): Project[] => {
  return [...projects]
    .filter((project) => project.showOnProjectsPage !== false)
    .sort((a, b) => a.index - b.index);
};
