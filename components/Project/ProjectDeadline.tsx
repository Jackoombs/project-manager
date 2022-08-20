import { HiClock } from "react-icons/hi";
import { format, parseISO } from "date-fns";

interface Props {
  deadline: string;
}

const ProjectDeadline = ({ deadline }: Props) => {
  return (
    <h4 className="flex gap-2 items-center justify-center text-xl font-semibold">
      <HiClock />
      Deadline:
      <p className="text-lg">{format(parseISO(deadline), "dd/MM/yy")}</p>
    </h4>
  );
};

export default ProjectDeadline;
