import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
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

  function useProjects() {
    return useQuery(["projects"], async () => {
      const data = await fetch(
        "api/projects"
      )
      return await data.json()
    });
  }

  const { isLoading, error, data } = useProjects()

  if (isLoading) return <h1>"Loading..."</h1>;

  if (error instanceof Error) {
    return <h1>{error.message}</h1>;
    // ^?
  }

  console.log(data)

  return (
    <main className="relative h-full flex flex-col gap-8 py-8 px-2">
      <ProjectForm formOpen={formOpen} setFormOpen={setFormOpen} />
      
      <AnimatePresence initial={false}>
        {!formOpen && (
          <motion.div 
            initial={{y: 300, opacity: 0}}
            animate={{ 
              transition: {
                delay: 0.2,
                duration: 0.4, 
                type: "spring", 
                bounce: 0.2,
              },
              y: 0,
              opacity: 1
            }}
            exit={{
              y: 300,
              opacity: 0,
              transition: {
                duration: 0.3,
                type: "linear"
              }
            }}
            className="flex flex-col gap-4">
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
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default ProjectList;
