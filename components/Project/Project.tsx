import ProjectTasks from "./ProjectTasks";
import ProjectDeadline from "./ProjectDeadline";
import EditProject from "./EditProject";
import { motion, AnimatePresence } from "framer-motion"
import { FaFlask } from "react-icons/fa";
import { useState } from "react";

interface Props {
  title: string;
  description: string;
  tasks: string[];
  deadline: string | null;
  createdAt: Date;
}

const Project = ({ title, description, tasks, deadline }: Props) => {

  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => setIsOpen(!isOpen)

  const titlePosition = () => {
    return isOpen ? "items-start" : "items-center"
  }

  return (
    <motion.div 
      initial={false}
      onClick={handleClick}
      whileHover={{
        outline: isOpen ? "" : "2px solid #fed7aa",
        transition: { type: "linear", duration: 0.1 },
      }}
      className="relative flex flex-col gap-2 bg-gradient-to-tr from-orange-400 to-orange-600 rounded text-slate-800 p-2">
      <motion.div 
        layout
        className={`${titlePosition()} flex flex-col`}>
        <motion.h3 layout className="flex gap-2 items-center text-xl font-bold">
          <FaFlask />
          {title}
        </motion.h3>
        <motion.p layout className="text-md">{description}</motion.p>
      </motion.div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto"},
              collapsed: { opacity: 0, height: 0}
            }}
            transition={{ duration: 0.2 }}
            >
            <ProjectTasks tasks={tasks} />
            {deadline && <ProjectDeadline deadline={deadline} />}
            <EditProject setIsOpen={setIsOpen} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Project;
