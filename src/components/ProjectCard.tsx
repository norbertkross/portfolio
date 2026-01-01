import { ExternalLink } from "lucide-react";
import type { Project } from "../utils/content";

export default function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick?: () => void;
}) {
  return (
    <div
      className="group flex cursor-pointer flex-col gap-4 rounded-2xl border border-neutral-200 bg-white p-4 transition-all hover:border-neutral-400"
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (!onClick) return;
        if (e.key === "Enter" || e.key === " ") onClick();
      }}
    >
      <div className="relative aspect-video overflow-hidden rounded-xl border border-neutral-100">
        <img
          src={project.images[0]}
          alt={project.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-xl font-bold text-neutral-900">{project.name}</h3>
          <ExternalLink className="h-4 w-4 flex-none text-neutral-400 transition-colors group-hover:text-black" />
        </div>
        <p className="line-clamp-2 text-sm leading-relaxed text-neutral-500">
          {project.description}
        </p>
      </div>
    </div>
  );
}


