import { MdCreate } from "react-icons/md"
import { useRouter } from "next/router"

interface Props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const EditProject = (props: Props) => {

  const router = useRouter()
  const handleClick = () => {
    router.push("/dashboard")
    props.setIsOpen(true)
  }

  return (
      <button onClick={handleClick} className="flex item-center justify-center bg-orange-200 absolute top-2 right-2 p-1 rounded aspect-square" >
        <MdCreate className="text-2xl text-slate-800" />
      </button>
  )
}

export default EditProject