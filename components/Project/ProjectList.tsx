import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Project from "./Project";
import NewProject from "./NewProject";
import ProjectForm from "./ProjectForm";
import { useProjects } from "../../utils/hooks";

const ProjectList = () => {
  interface Project {
    title: string;
    description: string;
    tasks: string[];
    deadline: string;
    createdAt: Date;
  }

  const [formOpen, setFormOpen] = useState(false);

  const { isLoading, error, data } = useProjects()

  if (isLoading) return <h1>"Loading..."</h1>;

  if (error instanceof Error) {
    return <h1>{error.message}</h1>;
    // ^?
  }
  
  return (
    <main className="h-full flex flex-col items-center gap-8 py-8 px-2">
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
            className="flex flex-col gap-4 lg:w-[600px]">
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
