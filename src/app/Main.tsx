import Projects from "@/components/projects";
import About from "../components/about";
import FloatingCard from "../components/floating-card";
import Introduction from "../components/introduction";
import Skills from "../components/skills";
import FloatingNavbar from "@/components/floating-nav";
import Footer from "../components/footer";
import Navbar from "@/components/navbar";
export default function Main() {
  return (
    <div className="bg-[#1f1f1f]">
      <div className="max-w-[1536px] mx-auto">
        <Navbar />
        <div className="bg-[#1f1f1f] lg:flex px-5">
          {/* Floating profile Card */}
          <FloatingCard />

          {/* Main Content */}
          <main className="lg:mx-[200px]">
            <div className="lg:ml-40 xl:ml-80">
              <Introduction />
              <About />
              <Skills />
              <Projects />
              <Footer />
            </div>
          </main>
          <aside>
            <FloatingNavbar />
          </aside>
        </div>
      </div>
    </div>
  );
}
