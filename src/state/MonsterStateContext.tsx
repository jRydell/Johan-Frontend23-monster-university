import { createContext } from "react";
import { MonsterState, Action } from "../types/types";
import monsterData from "../data/monsters.json";
import { v4 as uuidv4 } from "uuid";

// Generate UUIDs for each monster's id field
const monstersWithUUID = monsterData.monsters.map((monster) => ({
  ...monster,
  id: uuidv4(),
}));

// Create the initial state with UUIDs
export const initialMonsterState: MonsterState = {
  monsters: monstersWithUUID,
};

export const MonsterContext = createContext<{
  state: MonsterState;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialMonsterState,
  dispatch: () => null,
});
