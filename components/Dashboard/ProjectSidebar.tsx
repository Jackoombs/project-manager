import { useProjects } from "../../utils/hooks";

const ProjectSidebar = () => {

  interface Project {
    id:string;
    title: string;
    description: string;
    tasks: string[];
    deadline: string;
    createdAt: Date;
  }

  const { isLoading, error, data } = useProjects()

  if (isLoading) return <h1>"Loading..."</h1>;

  if (error instanceof Error) {
    return <h1>{error.message}</h1>;
  }

  return (
    <aside className="flex justify-between">
      <div>
        <h2 className="text-3xl font-medium font text-orange-500 pb-4">Projects</h2>
        <ul>
          {data.map((project: Project) => (

            <li 
              className="text-orange-300 text-xl py-1"
              key={project.id}>{project.title}
            </li>

          ))}
        </ul>
      </div>
      <div className="border-orange-500 border-r-2"></div>
    </aside>
  )
}

export default ProjectSidebar