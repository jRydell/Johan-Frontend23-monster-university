import { NavLink, Outlet } from "react-router-dom";

export const Navigation = () => {
  return (
    <>
      <nav className="Navigation">
        <NavLink to="/">Start</NavLink>
        <NavLink to="/Monsters">Monsters</NavLink>
        <NavLink to="/AddMonster">Add Monster</NavLink>
      </nav>
      <section>
        <Outlet />
      </section>
    </>
  );
};
