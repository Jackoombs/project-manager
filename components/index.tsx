import Nav from "./Nav/Nav";
import LogInBtn from "./Auth/LogInBtn";
import { SiProcesswire } from "react-icons/si";

const Header = () => (
  <>
    <header className="grid grid-cols-[1fr_auto] items-center bg-slate-800 px-4 py-3 lg:px-8 lg:py-5 lg:grid-cols-[1fr_auto_1fr]">
      <Logo />
      <Nav />
      <LogInBtn />
    </header>
    <hr className="border-orange-500 mx-4 lg:mx-8" />
  </>
);

const Logo = () => {
  return (
    <div className="flex items-center text-orange-500 text-3xl gap-4 sm:text-3xl md:text-4xl">
      <SiProcesswire />
      Project-it
    </div>
  );
};

export { Header };
