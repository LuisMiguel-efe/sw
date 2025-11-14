'use client';

import { useState, useMemo } from 'react';
import { projects as allProjects } from '@/lib/data';
import { ProjectCard } from '@/components/project-card';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export function ProjectsSection() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    if (!searchQuery) {
      return allProjects;
    }
    const lowercasedQuery = searchQuery.toLowerCase();
    return allProjects.filter(
      (project) =>
        project.title.toLowerCase().includes(lowercasedQuery) ||
        project.description.toLowerCase().includes(lowercasedQuery) ||
        project.techStack.some((tech) => tech.toLowerCase().includes(lowercasedQuery))
    );
  }, [searchQuery]);

  return (
    <section id="projects" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container">
        <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            My Projects
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
            A selection of my academic and personal work. Use the search to find projects by technology or keyword.
            </p>
        </div>

        <div className="relative max-w-lg mx-auto mt-8 mb-12">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="e.g., 'AWS Lambda' or 'robotics'..."
            className="w-full pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search projects"
          />
          <div className="text-xs text-muted-foreground mt-2 text-center">
            AI-Powered Project Suggestion Tool
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center mt-16 text-muted-foreground">
            <p className="text-lg">No projects found for "{searchQuery}".</p>
            <p>Try a different keyword.</p>
          </div>
        )}
      </div>
    </section>
  );
}
