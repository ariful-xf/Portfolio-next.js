import { MoveLeft } from "lucide-react";
import Link from "next/link";
import Modal from "@/components/ui/modal";
import ProjectCard from "@/components/ui/project-card";
import { getPortfolioProjects, projectImageMap } from "@/data/projects";

export default function Projects() {
  const allProjects = getPortfolioProjects();

  return (
    <section className="mx-auto px-5 md:px-10 max-w-7xl py-10">
      <div className="mb-12 flex gap-5 flex-col-reverse md:block text-center relative">
        <Link href="/">
          <button className="hover:cursor-pointer rounded-full py-1 px-5 border w-max h-max text-sm flex items-center gap-3 border-gray-600 md:absolute left-0 top-1/2 md:-translate-y-1/2">
            <MoveLeft size={18} />
            Go Back
          </button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold">My Projects</h1>
          <p className="max-w-xl mx-auto mt-3 font-medium text-gray-300">
            Here are some of my projects to showcase. You can check out my
            github profile for more projects
          </p>
        </div>
      </div>
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Project cards */}
        {allProjects.map((project) => (
          <ProjectCard
            key={project.modalId}
            image={projectImageMap[project.image]}
            title={project.cardTitle || project.title}
            liveLink={project.liveLink}
            modalId={project.modalId}
          />
        ))}

        {/* Modals for the project description */}
        {allProjects.map((project) => (
          <Modal
            key={project.modalId}
            modalId={project.modalId}
            image={projectImageMap[project.image]}
            title={project.title}
            subtitle={project.subtitle}
            liveLink={project.liveLink}
            frontendRepo={project.frontendRepo}
            backendRepo={project.backendRepo}
            description={project.description}
            technologies={project.technologies}
            challenges={project.challenges}
            solutions={project.solutions}
          />
        ))}
      </div>
    </section>
  );
}
