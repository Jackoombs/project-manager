import { Header } from "../../components";
import { getSession } from "next-auth/react";
import type { NextPage, GetServerSideProps } from "next";
import ProjectSidebar from "../../components/Dashboard/ProjectSidebar";
import Project from "../api/projects/project";

const Dashboard: NextPage = (session) => {

  return (
    <div className="font-roboto min-h-screen bg-slate-800">
      <Header />
      <main className="grid grid-cols-[1fr_5fr] p-8 h-full">
        <ProjectSidebar />
      </main>
    </div>
  )
}

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
export default Dashboard