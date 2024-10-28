import NavList from "../NavList/NavList";
import { TiThMenu } from "react-icons/ti";

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
      <div>
        <TiThMenu />
      </div>
      <ul className="bg-pink-100 md:flex flex-row gap-5 justify-center">
        {routes.map((route) => (
          <NavList key={route.is} route={route}></NavList>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
