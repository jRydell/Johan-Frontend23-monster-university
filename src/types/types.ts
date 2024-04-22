export type Monster = {
  name: string;
  hasHorns: boolean;
  eyes: number;
  legs: number;
  strength: number;
};

export type GlobalState = {
  monsters: Monster[];
};
