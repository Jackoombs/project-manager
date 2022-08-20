import { MdAddBox } from "react-icons/md";

interface Props {
  setFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewProject = ({ setFormOpen }: Props) => {
  const handleClick = () => {
    setFormOpen((state) => !state);
  };

  return (
    <>
      <button
        className="flex items-center justify-center self-center gap-2 bg-orange-200 text-slate-800  text-xl font-medium w-full rounded mx-2 py-1 duration-150 hover:bg-orange-500"
        onClick={handleClick}
      >
        <MdAddBox className="text-2xl"/>
        Create New Project
      </button>
    </>
  );
};

export default NewProject;
