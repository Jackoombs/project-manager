import { signIn } from "next-auth/react";

const LogInBtnTag = () => {
  return (
    <button
      className="justify-self-end text-slate-800 text-3xl font-medium bg-orange-200 w-40 rounded py-1 duration-150 hover:bg-orange-500 hover:scale-105"
      onClick={() => signIn(undefined, { callbackUrl: "/projects" })}
    >
      Sign Up
    </button>
  );
};

export default LogInBtnTag;
