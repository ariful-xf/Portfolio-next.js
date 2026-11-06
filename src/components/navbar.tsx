"use client";
import useActiveSection from "@/hooks/useActiveSection";
import { MdOutlineDownload } from "react-icons/md";

const Navbar = () => {
  const activeSection = useActiveSection();

  return (
    <nav className="lg:hidden flex sticky top-0 justify-center items-center bg-[#1f1f1f]/60 z-500 backdrop-blur-sm py-3 md:py-5">
      <div className="navbar-start pl-5 block lg:hidden w-full">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu bg-[#1f1f1f]/80 border border-gray-600 backdrop-blur-sm gap-3 menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <a
              className={`hover:text-[#28e98c] transition-colors duration-300 ${
                activeSection === "home" && "text-[#28e98c]"
              }`}
              href={"#"}
            >
              Home
            </a>
            <a
              className={`hover:text-[#28e98c] transition-colors duration-300 ${
                activeSection === "about" && "text-[#28e98c]"
              }`}
              href={"#about"}
            >
              About
            </a>
            <a
              className={`hover:text-[#28e98c] transition-colors duration-300 ${
                activeSection === "skills" && "text-[#28e98c]"
              }`}
              href="#skills"
            >
              Skills
            </a>
            <a
              className={`hover:text-[#28e98c] transition-colors duration-300 ${
                activeSection === "projects" && "text-[#28e98c]"
              }`}
              href={"#projects"}
            >
              Projects
            </a>
            <a
              className={`hover:text-[#28e98c] transition-colors duration-300 ${
                activeSection === "contact" && "text-[#28e98c]"
              }`}
              href={"#contact"}
            >
              Contact
            </a>
          </ul>
        </div>
      </div>
      <div className="z-50 hidden lg:flex  gap-10 justify-center items-center">
        <a
          className="hover:text-[#28e98c] transition-colors duration-300"
          href={"#"}
        >
          Home
        </a>
        <a
          className="hover:text-[#28e98c] transition-colors duration-300"
          href={"#about"}
        >
          About
        </a>
        <a
          className="hover:text-[#28e98c] transition-colors duration-300"
          href="#skills"
        >
          Skills
        </a>
        <a
          className="hover:text-[#28e98c] transition-colors duration-300"
          href={"#projects"}
        >
          Projects
        </a>
        <a
          className="hover:text-[#28e98c] transition-colors duration-300"
          href={"#contact"}
        >
          Contact
        </a>
      </div>
      <a
        href="https://drive.google.com/drive/folders/1Ce6m_7NdNOzs1wakpELgconpR9cVi7qE?usp=sharing"
        target="_blank"
        className="absolute lg:hidden flex right-5 md:right-10 px-6 gap-1 py-2 items-center text-black uppercase rounded-3xl border-2 bg-[#28e98c] border-green-500 hover:border-green-500 hover:bg-[#1f1f1f] hover:text-[#28e98c] transition-all duration-300"
      >
        <MdOutlineDownload />
        Resume
      </a>
    </nav>
  );
};

export default Navbar;
