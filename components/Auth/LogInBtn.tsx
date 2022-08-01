import { useSession, signIn, signOut } from "next-auth/react"

const LogInBtn = () => {

  const { data: session } = useSession()

  const handleClick = () => {
    session ? signOut() : signIn()
  }

  return (
    <button 
      className="hidden justify-self-end text-slate-800 text-3xl font-medium bg-orange-200 w-max rounded px-4 py-1 duration-150 hover:bg-orange-500 hover:scale-105 lg:block"
      onClick={handleClick}>
      {session ? "Log out" : "Log in"}
    </button>
  );
};

export default LogInBtn;
