import { useContext } from "react";
import { MonsterContext } from "../state/MonsterStateContext";
import { calculateTotals } from "../utils/calculateTotals";

export const Start = () => {
  const { state } = useContext(MonsterContext);

  const {
    totalMonsters,
    totalEyes,
    totalArms,
    totalHorns,
    totalWings,
    totalTentacles,
    totalMouths,
    totalTails,
  } = calculateTotals(state.monsters);
  return (
    <div>
      <h2>Monster University!</h2>
      <p>Total monsters: {totalMonsters}</p>
      <p>Total eyes: {totalEyes}</p>
      <p>Total arms: {totalArms}</p>
      <p>Total horns: {totalHorns}</p>
      <p>Total wings: {totalWings}</p>
      <p>Total tentacles: {totalTentacles}</p>
      <p>Total mouths: {totalMouths}</p>
      <p>Total tails: {totalTails}</p>
    </div>
  );
};
