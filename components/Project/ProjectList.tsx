import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Project from "./Project";
import NewProject from "./NewProject";
import ProjectForm from "./ProjectForm";

const ProjectList = () => {
  interface Project {
    title: string;
    description: string;
    tasks: string[];
    deadline: string;
    createdAt: Date;
  }

  const [formOpen, setFormOpen] = useState(false);

  const { isLoading, error, data } = useQuery(["projectData"], () =>
    fetch("api/projects").then((res) => res.json())
  );

  if (isLoading) return <h1>"Loading..."</h1>;

  if (error instanceof Error) {
    return <h1>{error.message}</h1>;
    // ^?
  }

  return (
    <main className="relative h-full flex flex-col gap-4 py-8 px-2">
      {formOpen ? (
        <ProjectForm setFormOpen={setFormOpen} />
      ) : (
        <>
          <NewProject setFormOpen={setFormOpen} />
          {data.map((project: Project, index: number) => (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              tasks={project.tasks}
              deadline={project.deadline}
              createdAt={project.createdAt}
            />
          ))}
        </>
      )}
    </main>
  );
};

export default ProjectList;
