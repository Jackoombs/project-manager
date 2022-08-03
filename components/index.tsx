import Nav from "./Nav/Nav";
import LogInBtn from "./Auth/LogInBtn";
import LogInBtnTag from "./Auth/LogInBtnTag";
import { SiProcesswire } from "react-icons/si";
import Image from "next/image";
import Link from "next/link";

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
    <div className="flex items-center text-orange-500 text-3xl gap-4 sm:text-4xl">
      <SiProcesswire />
      Projectory
    </div>
  );
};

const Main = () => {
  return (
    <main className="px-2 py-16">
      <Tagline />
    </main>
  );
};

const Tagline = () => {
  return (
    <section>
      <div className="flex flex-col justify-center items-center gap-4 text-center pb-8 md:gap-8 lg:flex-row">
        <h1 className="text-orange-500 text-2xl max-w-[800px] md:text-4xl">
          The one all in one project management app to turn your projects into
          success.
        </h1>
        <div className="w-56 h-56 relative xl:w-64 xl:h-64">
          <Image src="/assets/images/hero.png" layout="fill" className="grow" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <LogInBtnTag />
        <LinkBtn linkText="About Us" linkTo="/" />
      </div>
    </section>
  );
};

interface LinkBtn {
  linkText: string;
  linkTo: string;
}

const LinkBtn = ({ linkText, linkTo }: LinkBtn) => {
  return (
    <Link href={linkTo}>
      <a className="justify-self-end text-slate-800 text-3xl text-center font-medium bg-orange-200 w-40 rounded py-1 duration-150 hover:bg-orange-500 hover:scale-105">
        {linkText}
      </a>
    </Link>
  );
};

export { Header, Main };
