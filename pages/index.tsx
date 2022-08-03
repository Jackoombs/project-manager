import type { NextPage } from "next";
import { Header, Main } from "../components/index";

const Home: NextPage = () => {
  return (
    <div className="font-roboto min-h-screen bg-slate-800">
      <Header />
      <Main />
    </div>
  );
};

export default Home;
