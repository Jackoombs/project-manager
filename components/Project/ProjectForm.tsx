import {
  useForm,
  SubmitHandler,
  Controller,
} from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  setFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
  formOpen: boolean
}

const ProjectForm = ({ setFormOpen, formOpen }: Props) => {
  type Inputs = {
    title: string;
    description: string;
    deadline: Date | null;
  };

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    fetch("api/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(data);
  };

  const handleClick = () => {
    setFormOpen((open) => !open);
  };

  return (
    
    <AnimatePresence>
      {formOpen && (
        <motion.form
          initial={{y: -100, opacity: 0}}
          transition={{ duration: 0.6, type: "spring", bounce: 0.2}}
          animate={{ 
            y: 0, 
            opacity: 1,
            transition: {
              duration: 0.8, type: "spring", bounce: 0.1
            }
          }}
          exit={{
            y:-100,
            opacity: 0,
            transition: {
              duration: 0.2,
              type: "linear"
            }
          }}
          className="flex flex-col gap-2 bg-slate-800 text-slate-800"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="">
            <input
              className="w-full p-2 rounded-lg bg-orange-200 text-center text-2xl font-bold  placeholder:text-slate-600"
              placeholder="Project Title"
              {...register("title", { required: true })}
            />
            <label htmlFor="title"></label>
          </div>
          <div>
            <textarea
              className="w-full p-2 rounded bg-orange-200 text-md font-medium placeholder:text-slate-600"
              placeholder="Project Title"
              rows={4}
              {...register("description")}
            />
            <label htmlFor="description"></label>
          </div>
          <div className="self-center">
            <Controller
              name="deadline"
              control={control}
              defaultValue={undefined}
              render={({ field }) => (
                <DatePicker
                  className="self-center rounded-lg bg-orange-200 text-center text-xl font-bold placeholder:text-slate-600"
                  onChange={(e) => field.onChange(e)}
                  selected={field.value}
                  placeholderText="Project Deadline"
                  minDate={new Date()}
                />
              )}
            />
          </div>
          <div className="justify-center flex gap-8">
            <button
              className="text-2xl cursor-pointer font-bold bg-orange-500 w-32 py-2 my-8 rounded-xl"
              onClick={handleClick}
            >
              BACK
            </button>
            <input
              className="text-2xl text-center cursor-pointer font-bold bg-orange-500 w-32  py-2 my-8 rounded-xl"
              onClick={handleClick}
              type="submit"
              value="CREATE"
            />
          </div>
        </motion.form>
      )}
    </AnimatePresence>
    
  );
};

export default ProjectForm;
