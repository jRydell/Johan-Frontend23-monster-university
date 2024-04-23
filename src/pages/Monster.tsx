import { useContext } from "react";
import { useParams } from "react-router-dom";
import { MonsterContext } from "../state/MonsterStateContext";

export const Monster = () => {
  const { monsterID } = useParams<{ monsterID: string }>();
  const { state } = useContext(MonsterContext);

  // Find the selected monster
  const selectedMonster = state.monsters.find(
    (monster) => monster.first_name === monsterID
  );

  if (!selectedMonster) {
    return <div>Monster not found!</div>;
  }

  return (
    <div>
      <h2>
        {selectedMonster.first_name} {selectedMonster.last_name}
      </h2>
      <p>
        <strong>Description:</strong> {selectedMonster.description}
      </p>
      <p>
        <strong>Abilities:</strong>
      </p>
      <ul>
        {selectedMonster.abilities.science.map((ability, index) => (
          <li key={`science-${index}`}>{ability}</li>
        ))}
      </ul>
      <ul>
        {selectedMonster.abilities.magic.map((ability, index) => (
          <li key={`magic-${index}`}>{ability}</li>
        ))}
      </ul>
      <p>
        <strong>Origin:</strong> {selectedMonster.origin}
      </p>
      <p>
        <strong>Number of Eyes:</strong> {selectedMonster.num_eyes}
      </p>
      <p>
        <strong>Number of Arms:</strong> {selectedMonster.num_arms}
      </p>
    </div>
  );
};
