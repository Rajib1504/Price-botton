import { useState } from "react";
import NavList from "../NavList/NavList";
import { TiThMenu } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const routes = [
    { id: 1, path: "/home", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/blog", name: "Blog" },
  ];
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <div className="bg-pink-100 flex p-3 items-center justify-between">
      <div className="  md:hidden" onClick={() => setOpen(!open)}>
        {open === true ? (
          <IoCloseSharp className="text-2xl" />
        ) : (
          <TiThMenu className="text-2xl"></TiThMenu>
        )}
      </div>
      <div className=" font-bold text-2xl">Logo</div>
      <ul
        className={`bg-yellow-100 md:bg-transparent md:flex absolute md:static  duration-1000 ${
          open === true
            ? "top-14 left-6 rounded-md p-2 w-36"
            : "top-12 -left-60 "
        }  flex-row gap-5 justify-center px-2`}
      >
        {routes.map((route) => (
          <NavList key={route.is} route={route}></NavList>
        ))}
      </ul>
      <btn className="btn">click</btn>
    </div>
  );
};

export default Navbar;
