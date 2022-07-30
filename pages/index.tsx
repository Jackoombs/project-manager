import type { NextPage } from "next";
import { Header } from "../components/index";

const Home: NextPage = () => {
  return (
    <div className="font-roboto min-h-screen bg-slate-800">
      <Header />
    </div>
  );
};

export default Home;
