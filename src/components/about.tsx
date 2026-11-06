import { LuUserRound } from "react-icons/lu";
import * as motion from "motion/react-client";

const About = () => {
  return (
    <motion.section
      initial={{ y: 50, opacity: 0 }}
      transition={{ duration: 0.8 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      id="about"
      className="pt-[30px] md:pt-[50px] lg:pt-[90px]"
    >
      <h1 className="rounded-full py-1 px-5 border w-max h-max text-sm flex items-center gap-3 border-gray-600">
        <LuUserRound /> About Me
      </h1>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        transition={{ duration: 0.8 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-5xl mx-auto py-10"
      >
        <h1 className="leading-10 sm:leading-12 md:leading-14 lg:leading-16 text-3xl sm:text-4xl md:text-5xl mb-4">
          Every great codebase begins with an even
          <span className="text-[#28e98c] "> better architecture.</span>
        </h1>
        <p className="mt-8 text-sm md:text-base text-[#999999]">
          I&apos;m a Full-stack developer passionate about creating
          scalable web applications and digital solutions. Over the past years,
          I&apos;ve been dedicated to refining my skills, learning modern
          technologies, and tackling real-world challenges. I&apos;m quietly
          confident, endlessly curious, and always refining my skills, one
          challenge at a time.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default About;
