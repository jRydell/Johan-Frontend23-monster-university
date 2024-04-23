import { useContext } from "react";
import { MonsterContext } from "../state/MonsterStateContext";
import { Monster } from "./Monster";
import { NavLink } from "react-router-dom";

export const Monsters = () => {
  const { state, dispatch } = useContext(MonsterContext);
  return (
    <section className="Monsters">
      <h2>All Monsters</h2>
      <ul>
        {state.monsters.length ? (
          state.monsters.map((monster) => (
            <li key={monster.id}>
              <NavLink to={`monster/${monster.id}`}>
                {monster.first_name} {monster.last_name}{" "}
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
  );
};
