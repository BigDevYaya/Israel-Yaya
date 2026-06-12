import { MoveUpRight } from "lucide-react";

const ProjectSlide = ({ project }) => {
  return (
    <section className="project-slide w-screen h-screen shrink-0 relative overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 lg:p-24 z-10">
        <h2 className="text-4xl md:text-6xl text-white font-bold mb-3">
          {project.title}
        </h2>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-6">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack?.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-sm font-medium border"
              style={{
                borderColor: project.accentColor,
                color: project.accentColor,
              }}
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium transition-transform hover:scale-105"
          style={{ backgroundColor: project.accentColor }}
        >
          Visit Project
          <MoveUpRight size={18} />
        </a>
      </div>
    </section>
  );
};

export default ProjectSlide;
