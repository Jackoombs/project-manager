import type { NextPage, GetServerSideProps } from "next";
import { Header } from "../../components/index";
import { getSession } from "next-auth/react";
import ProjectList from "../../components/Project/ProjectList";

const Projects: NextPage = (session) => {
  return (
    <div className="font-roboto min-h-screen bg-slate-800">
      <Header />
      <ProjectList />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin",
        permanent: false,
      },
    };
  }
  return {
    props: session,
  };
}

export default Projects;
