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
          (monster) => monster.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
