import {
  useForm,
  SubmitHandler,
  Controller,
} from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { motion, AnimatePresence } from "framer-motion";
import { QueryClient, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

interface Props {
  setFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
  formOpen: boolean
}

const ProjectForm = ({ setFormOpen, formOpen }: Props) => {
  interface Project {
    id: string
    userId: string
    title: string
    description: string | null
    tasks: string[] | null
    deadline: Date | null
    createdAt: Date
    updatedAt: Date
    completed: Boolean | null
  }

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<Project>();
  const onSubmit: SubmitHandler<Project> = (data) => {
    useCreateProject.mutate(data)
  };

  const handleClick = () => {
    setFormOpen((open) => !open);
  };

  const queryClient: QueryClient = useQueryClient()
  const useCreateProject = useMutation(
    (newProject: Project) => axios.post('/api/projects/project', newProject), {
      onSuccess: newProject => {
        queryClient.setQueryData<Array<Project>>(['projects'], prevProjects => {
          if (prevProjects) {
            return [...prevProjects, newProject.data]
          } else {
            return [newProject.data]
          }
        })
      }
    }
  )

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
          className="flex flex-col gap-2 bg-slate-800 text-slate-800 sm:w-[600px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="">
            <input
              className="w-full p-2 rounded bg-orange-200 text-center text-2xl font-bold  placeholder:text-slate-600"
              placeholder="Project Title"
              {...register("title", { required: true })}
            />
            <label htmlFor="title"></label>
          </div>
          <div>
            <textarea
              className="w-full p-2 rounded bg-orange-200 text-md font-medium placeholder:text-slate-600"
              placeholder="Description"
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
                  className="self-center rounded bg-orange-200 text-center text-xl font-bold p-1 placeholder:text-slate-600"
                  onChange={(e) => field.onChange(e)}
                  selected={field.value}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Deadline"
                  minDate={new Date()}
                />
              )}
            />
          </div>
          <div className="justify-center flex gap-8 pt-4">
            <button
              className="text-slate-800 text-2xl text-center font-medium bg-orange-300 w-40 rounded py-1 duration-150 hover:bg-orange-500 hover:scale-105"
              onClick={handleClick}
            >
              Back
            </button>
            <input
              className="text-slate-800 text-2xl text-center font-medium bg-orange-300 w-40 rounded py-1 duration-150 hover:bg-orange-500 hover:scale-105"
              onClick={handleClick}
              type="submit"
              value="Create"
            />
          </div>
        </motion.form>
      )}
    </AnimatePresence>
    
  );
};

export default ProjectForm;
