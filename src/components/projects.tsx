import { MdOutlineGridOn } from "react-icons/md";
import akademi from "@/assets/akademi.png";
import designForgee from "@/assets/design-forgee.png";
import bookStore from "@/assets/book-store.png";
import creativeHub from "@/assets/creative-hub.png";
import * as motion from "motion/react-client";
import ProjectCard from "./ui/project-card";
import Modal from "./ui/modal";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Projects = () => {
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
          <ProjectCard
            image={akademi}
            title="Akademi"
            liveLink="https://akademi-uni.web.app/"
            modalId="my_modal_akademi"
          />
          <ProjectCard
            image={bookStore}
            title="Books World"
            liveLink="https://books-world-49b0c.web.app/"
            modalId="my_modal_bookstore"
          />
          <ProjectCard
            image={designForgee}
            title="Design Forge"
            liveLink="https://design-forgee.vercel.app/"
            modalId="my_modal_designforgee"
          />
          <ProjectCard
            image={creativeHub}
            title="Creative Hub IT"
            liveLink="https://creativehubit.com.bd/"
            modalId="my_modal_creativehub"
          />

          {/* Modals for the project description */}

          <Modal
            modalId="my_modal_akademi"
            image={akademi}
            title="Akademi"
            subtitle="- Scholarship Management System"
            liveLink="https://akademi-uni.web.app/"
            frontendRepo="https://github.com/arifulxf/Akademi-Scholarships-Management"
            backendRepo="https://github.com/arifulxf/Akademi-Server"
            description="Akademi is a web platform that streamlines the scholarship application and management process. It allows students to apply for scholarships with ease while helping administrators review and process applications efficiently. Built with the MERN stack and Firebase Authentication, it provides secure access control, a smooth user experience, and an integrated payment gateway for fee submissions."
            technologies={[
              "JavaScript",
              "React",
              "Node.js",
              "MongoDB",
              "Express.js",
              "Firebase Auth",
              "Tailwind CSS",
              "Stripe",
            ]}
            challenges={[
              "Handling image uploads securely",
              "Optimizing database queries for better performance",
              "Defining clear permissions for Admins, Students, and Moderators without conflicts",
            ]}
            solutions={[
              "Implemented a secure image upload system using the ImgBB API",
              "Optimized database queries using indexing and aggregation pipelines",
              "Implemented RBAC for secure access control",
            ]}
          />
          <Modal
            modalId="my_modal_bookstore"
            image={bookStore}
            title="Book Store"
            subtitle="Your go to Books library"
            liveLink="https://books-world-49b0c.web.app/"
            frontendRepo="https://github.com/arifulxf/Book-Store"
            backendRepo="https://github.com/arifulxf/Book-Store-Server"
            description="Books Store - A MERN-based Book Borrowing Platform. A full-stack
                MERN application where users can browse books by category,
                borrow and manage their borrowed list, return books, add new
                books, update their own books, and explore top-rated books on
                the homepage."
            technologies={[
              "JavaScript",
              "React",
              "Node.js",
              "MongoDB",
              "Express.js",
              "Firebase Auth",
              "Tailwind CSS",
              "React Toastify",
            ]}
            challenges={[
              "Optimizing book search and filtering to deliver fast results for users",
              "Displaying real-time stock updates to prevent over-borrowing",
              "Preventing users from borrowing more than 3 books at a time",
            ]}
            solutions={[
              "Implemented optimized search and filtering using a MongoDB aggregation pipeline",
              "Used stock calculation before confirming borrow requests",
              "Implemented user borrowing tracking",
            ]}
          />
          <Modal
            modalId="my_modal_designforgee"
            image={designForgee}
            title="Design Forge"
            subtitle="Agency website clone"
            liveLink="https://design-forgee.vercel.app/"
            frontendRepo="https://github.com/arifulxf/Design-Forge"
            description="Design Forge is a modern agency website clone inspired by ilmora.agency. Built with React and Tailwind CSS, it features a sleek responsive layout, smooth animations, and interactive sections designed to showcase services and portfolio work with strong visual precision."
            technologies={[
              "Typescript",
              "Next.js",
              "Tailwind CSS",
              "React marquee",
            ]}
          />
          <Modal
            modalId="my_modal_creativehub"
            image={creativeHub}
            title="Creative Hub IT"
            subtitle="A Creative Hub IT Portfolio"
            liveLink="https://creativehubit.com.bd/"
            description="Creative Hub IT is a modern, responsive digital agency portfolio built with the MERN stack as a technical assessment project. Based on a Figma design, it delivers a polished, pixel-accurate interface, secure authentication, smooth admin-side content management, and reliable image handling for a seamless user experience."
            challenges={[
              "Image hosting reliability: during development, I initially used ImgBB, but encountered server-side issues. I later migrated to Cloudinary for a more stable and scalable solution.",
            ]}
            technologies={[
              "Typescript",
              "Next.js",
              "Motion",
              "Tailwind CSS",
              "Swipper.js",
              "Node.js",
              "MongoDB",
              "Firebase Auth",
              "Sweet Alert",
            ]}
          />
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
