import { Action, MonsterState } from "../types/types";

export const reducer = (state: MonsterState, action: Action): MonsterState => {
  switch (action.type) {
    case "ADD":
      return {
        monsters: [...state.monsters, action.payload],
      };
    case "REMOVE":
      return {
        monsters: state.monsters.filter(
          (monster) => monster.id !== action.payload.id
        ),
      };

    case "UPDATE":
      return {
        ...state,
        monsters: state.monsters.map((monster) =>
          monster.id === action.payload.id
            ? action.payload.updatedMonster
            : monster
        ),
      };
    default:
      return state;
  }
};
