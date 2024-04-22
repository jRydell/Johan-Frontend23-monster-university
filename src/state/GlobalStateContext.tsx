import { createContext } from "react";
import { GlobalState } from "../types/types";
import monsterData from "../data/monsters.json";

export const InitialGlobalState: GlobalState = monsterData;

export const GlobalContext = createContext<{}>;
