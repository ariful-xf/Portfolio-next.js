import { TbBulb } from "react-icons/tb";
import Image from "next/image";
import next from "@/assets/icons8-next.js.svg";
import typescript from "@/assets/typescript-logo-svgrepo-com.svg";
import javascript from "@/assets/javascript-svgrepo-com.svg";
import postman from "@/assets/postman-icon-svgrepo-com.svg";
import express from "@/assets/expressjs.svg";
import tailwind from "@/assets/tailwind.svg";
import firebase from "@/assets/firebase-svgrepo-com.svg";
import git from "@/assets/git.svg";
import github from "@/assets/github-svgrepo-com.svg";
import jwt from "@/assets/icons8-jwt.svg";
import mongoose from "@/assets/icons8-mongoose.svg";
import mongo from "@/assets/mongo-svgrepo-com.svg";
import node from "@/assets/node-js-svgrepo-com.svg";
import react from "@/assets/react-svgrepo-com.svg";
// import redux from "@/assets/redux-svgrepo-com.svg";
import auth from "@/assets/next-auth.svg";
import * as motion from "motion/react-client";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const Skills = () => {
  const row1 = [
    { name: "JavaScript", src: javascript },
    { name: "TypeScript", src: typescript },
    { name: "React.js", src: react },
    { name: "Next.js", src: next },
    { name: "TailwindCSS", src: tailwind },
  ];

  const row2 = [
    { name: "Node.js", src: node },
    { name: "Express.js", src: express, hasBg: true },
    { name: "MongoDB", src: mongo },
    { name: "Mongoose", src: mongoose },
    { name: "Firebase", src: firebase },
  ];

  const row3 = [
    { name: "Git", src: git },
    { name: "GitHub", src: github },
    { name: "Postman", src: postman },
    { name: "Json Web Token (JWT)", src: jwt },
    { name: "NextAuth.js", src: auth },
  ];

  const renderSkillRow = (
    skills: { name: string; src: StaticImport; hasBg?: boolean }[]
  ) => (
    <div className="flex justify-between md:px-10 items-center gap-5 max-w-5xl mx-auto">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="group relative flex flex-col items-center cursor-pointer"
        >
          {/* Tooltip */}
          <div className="absolute bottom-full mb-2 pointer-events-none z-30 opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-200 flex flex-col items-center">
            <span className="bg-[#262626] text-xs text-white border border-gray-600 px-2.5 py-1 rounded-md shadow-xl whitespace-nowrap">
              {skill.name}
            </span>
            <span className="w-2 h-2 bg-[#262626] border-r border-b border-gray-600 rotate-45 -mt-1"></span>
          </div>

          {/* Icon */}
          <div className="w-12 relative h-12 transition-transform duration-200 flex items-center justify-center">
            <Image
              src={skill.src}
              fill
              alt={skill.name}
              className={`object-cover ${skill.hasBg ? "z-10" : ""}`}
            />
            {skill.hasBg && (
              <div className="bg-white w-10 h-10 rounded-full absolute top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2"></div>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <motion.section
      initial={{ y: 50, opacity: 0 }}
      transition={{ duration: 0.8 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      id="skills"
      className="pt-[30px] md:pt-[50px] lg:pt-[90px]"
    >
      <h1 className="rounded-full py-1 px-5 border w-max h-max text-sm flex items-center gap-3 border-gray-600">
        <TbBulb />
        My Skills
      </h1>
      <div id="skill" className="py-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.8 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4">
            My <span className="text-[#28e98c] ">Advantages</span>
          </h2>
          <div className="mt-8 text-sm md:text-base text-[#999999]">
            I love turning ideas into living, breathing web experiences. From
            the first interaction to the final detail, I shape products that
            feel smooth, intuitive, and alive. Every project is a chance to
            blend creativity with logic in the most seamless way possible.
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.8 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-8 mt-10"
        >
          {renderSkillRow(row1)}
          {renderSkillRow(row2)}
          {renderSkillRow(row3)}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
