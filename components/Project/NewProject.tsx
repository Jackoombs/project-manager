import { IoIosCreate } from "react-icons/io";

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
        className="flex items-center justify-center self-center gap bg-orange-200 text-slate-800  text-3xl font-medium w-full rounded mx-2 py-1 duration-150 hover:bg-orange-500"
        onClick={handleClick}
      >
        <IoIosCreate />
        Create New Project
      </button>
    </>
  );
};

export default NewProject;
