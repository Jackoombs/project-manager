import ProjectTasks from "./ProjectTasks";
import ProjectDeadline from "./ProjectDeadline";
import { FaFlask } from "react-icons/fa";

interface Props {
  title: string;
  description: string;
  tasks: string[];
  deadline: string | null;
  createdAt: Date;
}

const Project = ({ title, description, tasks, deadline }: Props) => {
  return (
    <div className="flex flex-col gap-2 bg-gradient-to-tr from-orange-300 to-orange-600 rounded-xl text-slate-800 p-2">
      <div>
        <h3 className="flex gap-2 items-center text-3xl font-bold">
          <FaFlask />
          {title}
        </h3>
        <p className="text-lg">{description}</p>
      </div>
      <ProjectTasks tasks={tasks} />
      {deadline && <ProjectDeadline deadline={deadline} />}
    </div>
  );
};

export default Project;
