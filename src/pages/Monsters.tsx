import { useContext } from "react";
import { MonsterContext } from "../state/MonsterStateContext";
import { Monster } from "./Monster";
import { NavLink } from "react-router-dom";

export const Monsters = () => {
  const { state, dispatch } = useContext(MonsterContext);
  return (
    <section className="Monsters">
      <ul>
        {state.monsters.length ? (
          state.monsters.map((monster) => (
            <li key={monster.id}>
              <NavLink
                to={`monster/${monster.id}`}
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
              >
                {monster.first_name}{" "}
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
