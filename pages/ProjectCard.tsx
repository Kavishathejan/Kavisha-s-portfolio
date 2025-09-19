import Image from "next/image";
import React from "react";

interface HoverLink {
  label: string;
  url?: string; // optional, if URL exists it’s clickable
}

interface ProjectCardProps {
  title: string;
  tech: string;
  img: any; // StaticImageData or string
  alt: string;
  link?: string;
  hoverLinks?: HoverLink[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, tech, img, alt, hoverLinks }) => {
  return (
    <div className="group relative text-center shadow-lg p-5 rounded-xl my-5 dark:bg-gradient-to-b from-gray-900 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
      
      {/* Project Title & Tech */}
      <h3 className="text-lg py-3 font-semibold dark:text-white md:text-xl">{title}</h3>
      <h4 className="text-gray-500 text-xs py-2 font-medium dark:text-white md:text-sm">{tech}</h4>

      {/* Project Image */}
      <div className="w-full h-48 sm:h-64 md:h-80 relative mx-auto overflow-hidden rounded-lg">
        <Image
          src={img}
          alt={alt}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
        />

        {/* Hover Overlay */}
        {hoverLinks && (
          <div className="absolute inset-0 flex flex-col sm:flex-row items-center justify-center gap-3 bg-black bg-opacity-50 opacity-100 sm:opacity-0 group-hover:opacity-100 transition duration-300">
            {hoverLinks.map((link, idx) =>
              link.url ? (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-600 text-white text-sm md:text-base px-3 py-2 rounded-lg shadow-lg hover:bg-indigo-500 transition"
                >
                  {link.label}
                </a>
              ) : (
                <span
                  key={idx}
                  className="text-white text-sm md:text-base font-medium"
                >
                  {link.label}
                </span>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
