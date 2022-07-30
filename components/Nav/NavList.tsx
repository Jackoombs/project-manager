import NavLink from "./NavLink";

const NavList = () => {
  const navItems = [
    { linkText: "Projects", linkTo: "/" },
    { linkText: "Tasks", linkTo: "/tasks" },
    { linkText: "Calendar", linkTo: "/calendar" },
    { linkText: "Settings", linkTo: "/settings" },
  ];

  return (
    <>
      {navItems.map((link, index) => (
        <NavLink key={index} linkText={link.linkText} linkTo={link.linkTo} />
      ))}
    </>
  );
};

export default NavList;
