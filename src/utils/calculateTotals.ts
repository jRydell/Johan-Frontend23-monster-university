import { Monster } from "../types/types";
// const totalEyes = monsters.reduce((acc, curr) => acc + curr.num_eyes, 0);

export const calculateTotals = (monsters: Monster[]) => {
  const totalMonsters = monsters.length;
  const totalEyes = monsters.reduce(
    (totalEyesCount, monster) => totalEyesCount + monster.num_eyes,
    0
  );
  const totalArms = monsters.reduce(
    (totalArmsCount, monster) => totalArmsCount + monster.num_arms,
    0
  );
  const totalHorns = monsters.reduce(
    (totalHornsCount, monster) => totalHornsCount + monster.num_horns,
    0
  );
  const totalWings = monsters.reduce(
    (totalWingsCount, monster) => totalWingsCount + monster.num_wings,
    0
  );
  const totalTentacles = monsters.reduce(
    (totalTentaclesCount, monster) =>
      totalTentaclesCount + monster.num_tentacles,
    0
  );
  const totalMouths = monsters.reduce(
    (totalMouthsCount, monster) => totalMouthsCount + monster.num_mouths,
    0
  );
  const totalTails = monsters.reduce(
    (totalTailsCount, monster) => totalTailsCount + monster.num_tails,
    0
  );

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
