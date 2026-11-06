import { MoveLeft } from "lucide-react";
import Link from "next/link";
import Modal from "@/components/ui/modal";
import ProjectCard from "@/components/ui/project-card";
import akademi from "@/assets/akademi.png";
import designForgee from "@/assets/design-forgee.png";
import bookStore from "@/assets/book-store.png";
import lingoBingo from "@/assets/lingo-bingo.png";
import mediride from "@/assets/mediride.png";
import developme from "@/assets/developme.png";
import creativeHub from "@/assets/creative-hub.png";

export default function Projects() {
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
            github account for more projects
          </p>
        </div>
      </div>
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Project cards */}
        <ProjectCard
          image={akademi}
          title="Akademi"
          liveLink="https://akademi-uni.web.app/"
          modalId="my_modal_akademi"
        />
        <ProjectCard
          image={designForgee}
          title="Design Forge"
          liveLink="https://design-forgee.vercel.app/"
          modalId="my_modal_designforgee"
        />
        <ProjectCard
          image={bookStore}
          title="Books World"
          liveLink="https://books-world-49b0c.web.app/"
          modalId="my_modal_bookstore"
        />
        <ProjectCard
          image={lingoBingo}
          title="Lingo Bingo"
          liveLink="https://lingo-bingo-f6242.web.app/"
          modalId="my_modal_lingo"
        />
        <ProjectCard
          image={mediride}
          title="MediRide"
          liveLink="https://mediride-three.vercel.app/"
          modalId="my_modal_mediride"
        />
        <ProjectCard
          image={developme}
          title="Develop.me"
          liveLink="https://developer-portfolio-ba016.web.app/"
          modalId="my_modal_developme"
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
          description="Akademi is a web-based platform designed to streamline the
                scholarship application and management process. It allows
                students to apply for scholarships seamlessly while enabling
                administrators to efficiently review and process applications.
                Built with the MERN stack and Firebase authentication, Akademi
                ensures a smooth user experience with secure access control. The
                platform also includes a payment gateway for fee submissions,
                making the process more convenient for users."
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
            "Implemented secure image upload system using imgbb API",
            "Optimized database queries using indexing and aggregation pipeline",
            "Implemented RBAC for secure access control",
          ]}
        />
        <Modal
          modalId="my_modal_designforgee"
          image={designForgee}
          title="Design Forge"
          subtitle="Agency website clone"
          liveLink="https://design-forgee.vercel.app/"
          frontendRepo="https://github.com/arifulxf/Design-Forge"
          description="Design Forge — clone of ilmora.agency, A modern and dynamic agency website built with React and Tailwind CSS. It features a sleek, responsive design with smooth animations and interactive elements to showcase the agency's services and portfolio. A fully responsive single-page website — built to showcase modern web layout, responsiveness, and design precision understanding."
          technologies={[
            "Typescript",
            "Next.js",
            "Tailwind CSS",
            "React marquee",
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
            "Prevent users from borrowing more than 3 books at a time",
          ]}
          solutions={[
            "Implemented optimized search and filtering using MongoDB aggregation pipeline",
            "Used stock calculation before confirming borrow request",
            "Implemented user borrowing tracking",
          ]}
        />
        <Modal
          modalId="my_modal_lingo"
          image={lingoBingo}
          title="Lingo Bingo"
          subtitle="Learn language with fun"
          liveLink="https://lingo-bingo-f6242.web.app/"
          frontendRepo="https://github.com/arifulxf/Lingo-Bingo"
          description="Lingo Bingo is an interactive and engaging word-based game
                platform that combines the excitement of Bingo with language
                learning. Players can participate in fun and educational games,
                where they match words or phrases to improve their vocabulary.
                The website features a dynamic user interface built with React,
                with smooth animations and responsive design to enhance the user
                experience. Integrated with Firebase for user authentication and
                data management, Lingo Bingo ensures a secure and seamless
                experience."
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
            "Structuring and categorizing words or phrases for easy access.",
          ]}
          solutions={["Implemented a dynamic and user-friendly interface"]}
        />
        <Modal
          modalId="my_modal_mediride"
          image={mediride}
          title="MediRide"
          subtitle="Care in Every Mile"
          liveLink="https://mediride-three.vercel.app/"
          frontendRepo="https://github.com/arifulxf/mediride"
          description="A premium, conversion-optimized landing page for a non-emergency medical transportation (NEMT) service in the Twin Cities. Includes healthcare facility partnership portals and patient-centric booking flows."
          technologies={["Typescript", "Next.js", "Tailwind CSS"]}
        />
        <Modal
          modalId="my_modal_developme"
          image={developme}
          title="Develop.me"
          subtitle="A Developer Portfolio"
          liveLink="https://developer-portfolio-ba016.web.app/"
          frontendRepo="https://github.com/arifulxf/Developer-Portfolio"
          description="A modern, responsive, and elegant developer portfolio website built as part of a job task to demonstrate my attention to design detail, responsiveness, and ability to craft user-friendly interfaces."
          technologies={["JavaScript", "React", "Vite", "Tailwind CSS"]}
        />
        <Modal
          modalId="my_modal_creativehub"
          image={creativeHub}
          title="Creative Hub IT"
          subtitle="A Creative Hub IT Portfolio"
          liveLink="https://creativehubit.com.bd/"
          frontendRepo="https://github.com/arifulxf/Creative-Hub-Portfolio"
          description="A modern, responsive digital agency portfolio website built with Next.js, TypeScript, and Tailwind CSS. Developed as a technical assessment task based on a specific Figma design."
          technologies={[
            "Typescript",
            "Next.js",
            "Motion",
            "Tailwind CSS",
            "Embla Carousel",
          ]}
        />
      </div>
    </section>
  );
}
