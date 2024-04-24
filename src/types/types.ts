export type Monster = {
  id: string;
  first_name: string;
  last_name: string;
  description: string;
  abilities: {
    science: string[];
    magic: string[];
  };
  origin: string;
  num_eyes: number;
  num_arms: number;
  num_horns: number;
  num_wings: number;
  num_tentacles: number;
  num_mouths: number;
  num_tails: number;
};

export type MonsterState = {
  monsters: Monster[];
};

export type Action =
  | { type: "ADD"; payload: Monster }
  | { type: "REMOVE"; payload: string };

export type MonsterContextProviderProp = {
  children: React.ReactNode;
};
