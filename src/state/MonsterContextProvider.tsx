import { createContext } from "react";
import { MonsterState, Action } from "../types/types";
import monsterData from "../data/monsters.json";

export const initialMonsterState: MonsterState = monsterData;

export const MonsterContext = createContext<{
  state: MonsterState;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialMonsterState,
  dispatch: () => null,
});
