import NavList from "../NavList/NavList";

const Navbar = () => {
  const routes = [
    { id: 1, path: "/home", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/blog", name: "Blog" },
  ];
  return (
    <div>
      {routes.map((route) => (
        <NavList key={route.is} route={route}></NavList>
      ))}
    </div>
  );
};

export default Navbar;
