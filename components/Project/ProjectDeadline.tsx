import { HiClock } from "react-icons/hi";
import { format, parseISO } from "date-fns";

interface Props {
  deadline: string;
}

const ProjectDeadline = ({ deadline }: Props) => {
  return (
    <h4 className="flex gap-2 items-center self-center text-2xl font-semibold">
      <HiClock />
      Deadline:
      <p className="font-xl">{format(parseISO(deadline), "dd/MM/yy")}</p>
    </h4>
  );
};

export default ProjectDeadline;
