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
      <p>Total number of monsters: {totalMonsters}</p>
      <p>Total number of eyes: {totalEyes}</p>
      <p>Total number of arms: {totalArms}</p>
      <p>Total number of horns: {totalHorns}</p>
      <p>Total number of wings: {totalWings}</p>
      <p>Total number of tentacles: {totalTentacles}</p>
      <p>Total number of mouths: {totalMouths}</p>
      <p>Total number of tails: {totalTails}</p>
    </div>
  );
};
