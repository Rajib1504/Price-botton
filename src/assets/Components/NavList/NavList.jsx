import PropTypes from "prop-types";
const NavList = ({ route }) => {
  const { id, path, name } = route;
  //   console.log(id);
  return (
    <div className="text-[ffff]">
      <li id={id} className="font-bold hover:bg-yellow-500">
        <a href={path}>{name}</a>
      </li>
    </div>
  );
};
NavList.propTypes = {
  route: PropTypes.object,
};

export default NavList;
