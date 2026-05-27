import ProjectCard from "./ProjectCard";

export function FolderGrid({ projects, columns = 3 }) {
  const gridColumns =
    columns === 2
      ? "lg:grid-cols-2"
      : "md:grid-cols-2 xl:grid-cols-3";

  return (
    <div className={`grid w-full grid-cols-1 gap-5 ${gridColumns}`}>
      {projects.map((project) => {
        const cardProject = {
          title: project.title,
          slug: project.slug,
          folderName: project.folderName,
          summary: project.summary,
          description: project.description,
          status: project.status,
          tone: project.tone,
          thumbnail: project.thumbnail,
        };

        return (
          <ProjectCard
            key={project.slug}
            project={cardProject}
          />
        );
      })}
    </div>
  );
}

export const ProjectGrid = FolderGrid;
