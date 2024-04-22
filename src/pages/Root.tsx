import { NavLink } from "react-router-dom";

export const Root = () => {
  return (
    <>
      <nav className="Root">
        <NavLink to="/Start">Start</NavLink>
        <NavLink to="/Monsters">Monsters</NavLink>
        <NavLink to="/AddMonster">Add Monster</NavLink>
      </nav>
    </>
  );
};
