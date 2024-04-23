import { useReducer } from "react";
import { reducer } from "../state/reducer";
import {
  initialMonsterState,
  MonsterContext,
} from "../state/MonsterStateContext";
import { MonsterContextProviderProp } from "../types/types";

export const MonsterContextProvider = ({
  children,
}: MonsterContextProviderProp) => {
  const [state, dispatch] = useReducer(reducer, initialMonsterState);

  return (
    <MonsterContext.Provider value={{ state, dispatch }}>
      {children}
    </MonsterContext.Provider>
  );
};
