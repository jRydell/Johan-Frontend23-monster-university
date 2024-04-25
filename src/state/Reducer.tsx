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
          (monster) => monster.first_name !== action.payload.first_name
        ),
      };
    default:
      return state;
  }
};
