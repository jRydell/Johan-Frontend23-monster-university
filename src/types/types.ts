export type Monster = {
  name: string;
  hasHorns: boolean;
  eyes: number;
  legs: number;
  strength: number;
  id: string;
};

export type MonsterState = {
  monsters: Monster[];
};

export type Action =
  | { type: "ADD"; payload: Monster }
  | { type: "REMOVE"; payload: string };
