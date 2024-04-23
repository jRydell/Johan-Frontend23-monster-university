import { useContext } from "react";
import { MonsterContext } from "../state/MonsterStateContext";
import { NavLink, Outlet } from "react-router-dom";

export const Monsters = () => {
  const { state } = useContext(MonsterContext);
  return (
    <>
      <section className="Monsters">
        <h2>All Monsters</h2>
        <ul>
          {state.monsters.length ? (
            state.monsters.map((monster) => (
              <li key={monster.first_name}>
                <NavLink
                  to={`/monsters/${monster.first_name}`}
                  style={({ isActive }) =>
                    isActive ? { color: "blue" } : { color: "" }
                  }
                >
                  {monster.first_name} {monster.last_name}
                </NavLink>
              </li>
            ))
          ) : (
            <p>
              <i>No monsters</i>
            </p>
          )}
        </ul>
      </section>
      <section>
        <Outlet />
      </section>
    </>
  );
};