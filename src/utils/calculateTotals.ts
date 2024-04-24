import { Monster } from "../types/types";

export const calculateTotals = (monsters: Monster[]) => {
  const totalMonsters = monsters.length;
  const totalEyes = monsters.reduce((acc, curr) => acc + curr.num_eyes, 0);
  const totalArms = monsters.reduce((acc, curr) => acc + curr.num_arms, 0);
  const totalHorns = monsters.reduce((acc, curr) => acc + curr.num_horns, 0);
  const totalWings = monsters.reduce((acc, curr) => acc + curr.num_wings, 0);
  const totalTentacles = monsters.reduce(
    (acc, curr) => acc + curr.num_tentacles,
    0
  );
  const totalMouths = monsters.reduce((acc, curr) => acc + curr.num_mouths, 0);
  const totalTails = monsters.reduce((acc, curr) => acc + curr.num_tails, 0);

  return {
    totalMonsters,
    totalEyes,
    totalArms,
    totalHorns,
    totalWings,
    totalTentacles,
    totalMouths,
    totalTails,
  };
};
