import { MdOutlineGridOn } from "react-icons/md";
import * as motion from "motion/react-client";
import ProjectCard from "./ui/project-card";
import Modal from "./ui/modal";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getHomeProjects, projectImageMap } from "@/data/projects";

const Projects = () => {
  const homeProjects = getHomeProjects();

  return (
    <motion.section
      initial={{ y: 50, opacity: 0 }}
      transition={{ duration: 0.8 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      id="projects"
      className="pt-[30px] md:pt-[50px] lg:pt-[90px]"
    >
      <h1 className="rounded-full py-1 px-5 border w-max h-max text-sm flex items-center gap-3 border-gray-600">
        <MdOutlineGridOn />
        Projects
      </h1>
      <div className="mx-auto pt-10 ">
        <h1 className="text-3xl sm:text-4xl md:text-5xl mb-8">
          Featured
          <span className="text-[#28e98c]"> Projects</span>
        </h1>
        <div className="space-y-8">
          {/* Project cards */}
          {homeProjects.map((project) => (
            <ProjectCard
              key={project.modalId}
              image={projectImageMap[project.image]}
              title={project.cardTitle || project.title}
              liveLink={project.liveLink}
              modalId={project.modalId}
            />
          ))}

          {/* Modals for the project description */}
          {homeProjects.map((project) => (
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
        <div className="flex justify-center group items-center border hover:border-[#28E98C] w-full mt-10 rounded-full">
          <Link
            className="text-white py-2 px-3 w-full flex items-center justify-center gap-2 font-semibold hover:text-[#28E98C] transition-colors duration-300"
            href="/portfolio"
          >
            View All Projects
            <ArrowRight className="group-hover:translate-x-1 transition-all duration-300" />
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
