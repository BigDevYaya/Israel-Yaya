import { MoveUpRight } from "lucide-react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { initProjectsAnimation } from "./animation";
import ProjectSlide from "./ProjectSlide";
import projects from "./projectsData";

const Projects = () => {
  const sectionRef = useRef(null);
  const overviewRef = useRef(null);
  const showcaseRef = useRef(null);
  const trackRef = useRef(null);

  useGSAP(() => {
    return initProjectsAnimation({
      section: sectionRef.current,
      overview: overviewRef.current,
      showcase: showcaseRef.current,
      track: trackRef.current,
    });
  });

  return (
    <section
      id="projects"
      className="relative bg-[#00001a] min-h-screen"
      ref={sectionRef}
    >
      <div
        className="flex flex-col items-start justify-center gap-4 projects-section px-4 md:px-10 py-6 md:py-10"
        ref={overviewRef}
      >
        <div className="flex flex-col items-start gap-2 lg:px-10 my-4">
          <h1 className="uppercase text-lg text-[#EF6D58] font-medium">
            Projects
          </h1>
          <h5 className="text-3xl md:text-5xl text-white font-semibold">Latest Projects</h5>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center w-full lg:px-10 mb-4">
          {projects.map((project) => (
            <a
              key={project.id}
              className="border p-2 border-[#9B9B9B] relative project-card"
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 md:h-72 lg:h-80 object-cover rounded"
              />
              <div className="absolute bottom-5 left-5 text-white flex flex-col gap-2">
                <div className="flex items-center gap-2 bg-white text-[#391400] w-fit px-2 py-1 rounded-full">
                  <p>Visit</p>
                  <MoveUpRight />
                </div>
                <h3 className="font-semibold text-xl md:text-3xl">{project.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div
        className="projects-showcase absolute inset-0 opacity-0 pointer-events-none overflow-hidden"
        ref={showcaseRef}
      >
        <div
          className="projects-track flex will-change-transform"
          ref={trackRef}
        >
          {projects.map((project) => (
            <ProjectSlide key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
