import { NavLink, Outlet } from "react-router-dom";

export const Navigation = () => {
  return (
    <>
      <nav className="Navigation">
        <NavLink
          to="/"
          style={({ isActive }) =>
            isActive ? { color: "blue" } : { color: "black" }
          }
        >
          Start
        </NavLink>
        <NavLink
          to="/Monsters"
          style={({ isActive }) =>
            isActive ? { color: "blue" } : { color: "black" }
          }
        >
          Monster
        </NavLink>
        <NavLink
          to="/AddMonster"
          style={({ isActive }) =>
            isActive ? { color: "blue" } : { color: "black" }
          }
        >
          Add monster
        </NavLink>
      </nav>
      <section>
        <Outlet />
      </section>
    </>
  );
};
