import { GrValidate } from "react-icons/gr";

interface Props {
  tasks: string[];
}

const ProjectTasks = ({ tasks }: Props) => {
  return (
    <div>
      <h4 className="flex gap-2 items-center text-xl font-semibold">
        <GrValidate />
        Tasks:
      </h4>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="text-md">
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectTasks;
