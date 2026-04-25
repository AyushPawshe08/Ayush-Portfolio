import { FolderCard } from "./FolderCard";

export function FolderGrid({ projects, columns = 2, withSummary = true }) {
  const gridClass =
    columns === 3
      ? "grid gap-8 md:grid-cols-2 xl:grid-cols-3"
      : "grid gap-8 md:gap-10 md:grid-cols-2";

  return (
    <div className={gridClass}>
      {projects.map((project) => (
        <FolderCard
          key={project.title}
          project={project}
          withSummary={withSummary}
        />
      ))}
    </div>
  );
}
