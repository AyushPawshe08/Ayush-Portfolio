"use client";

import { useMemo, useState } from "react";
import { FolderGrid } from "./ProjectGrid";

export default function ProjectSearch({ projects }) {
  const [query, setQuery] = useState("");

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return projects;

    return projects.filter((project) =>
      project.title.toLowerCase().includes(normalizedQuery)
    );
  }, [projects, query]);

  return (
    <div className="w-full">
      <label className="sr-only" htmlFor="project-search">
        Search projects
      </label>
      <div className="relative">
        <input
          id="project-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search projects"
          className="h-12 w-full rounded-[8px] border border-white/10 bg-white/[0.04] px-4 text-sm text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-white/25 focus:bg-white/[0.06] sm:max-w-md"
        />
      </div>

      <div className="mt-8">
        {filteredProjects.length > 0 ? (
          <FolderGrid projects={filteredProjects} columns={3} />
        ) : (
          <p className="rounded-[8px] border border-white/10 bg-white/[0.03] px-4 py-5 text-sm text-slate-400">
            No projects found.
          </p>
        )}
      </div>
    </div>
  );
}
