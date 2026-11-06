"use client";
import useActiveSection from "@/hooks/useActiveSection";
import Link from "next/link";
import { LuUserRound } from "react-icons/lu";
import { MdOutlineEmail, MdOutlineGridOn } from "react-icons/md";
import { SlHome } from "react-icons/sl";
import { TbBulb } from "react-icons/tb";
import NavTooltip from "./ui/nav-tooltip";

const FloatingNavbar = () => {
  const activeSection = useActiveSection();

  return (
    <div className="fixed top-1/2 right-14 2xl:right-[calc(50%-768px+3.5rem)] hidden lg:block transform lg:-translate-y-1/2 z-10">
      <div className="text-[#999999] bg-[#1f1f1f] text-xl flex flex-col gap-7 border rounded-full border-gray-500 px-4 py-7">
        <Link
          className={`${
            activeSection === "home" && "text-[#28e98c]"
          } hover:text-[#28e98c] group relative transition-colors duration-300`}
          href={"#"}
        >
          <NavTooltip text="Home" />
          <SlHome />
        </Link>
        <Link
          className={`${
            activeSection === "about" && "text-[#28e98c]"
          } hover:text-[#28e98c] group relative transition-colors duration-300`}
          href={"#about"}
        >
          <NavTooltip text="About" />
          <LuUserRound />
        </Link>
        <Link
          className={`${
            activeSection === "skills" && "text-[#28e98c]"
          } hover:text-[#28e98c] group relative transition-colors duration-300`}
          href="#skills"
        >
          <NavTooltip text="Skills" />
          <TbBulb />
        </Link>
        <Link
          className={`${
            activeSection === "projects" && "text-[#28e98c]"
          } hover:text-[#28e98c] group relative transition-colors duration-300`}
          href={"#projects"}
        >
          <NavTooltip text="Projects" />
          <MdOutlineGridOn />
        </Link>
        <Link
          className={`${
            activeSection === "contact" && "text-[#28e98c]"
          } hover:text-[#28e98c] group relative transition-colors duration-300`}
          href={"#contact"}
        >
          <NavTooltip text="Contact" />
          <MdOutlineEmail />
        </Link>
      </div>
    </div>
  );
};

export default FloatingNavbar;
