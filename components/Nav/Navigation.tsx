import NavList from "./NavList";

const Navigation = () => {
  return (
    <nav className="hidden lg:block">
      <ul className="flex gap-8 text-xl font-normal xl:gap-16">
        <NavList />
      </ul>
    </nav>
  );
};

export default Navigation;
