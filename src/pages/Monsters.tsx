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
              <li key={monster.id}>
                <NavLink
                  to={`/monsters/${monster.id}`}
                  style={({ isActive }) =>
                    isActive ? { color: "blue" } : { color: "black" }
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
