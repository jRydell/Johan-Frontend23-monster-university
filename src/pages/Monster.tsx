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
      <h3>
        {selectedMonster.first_name} {selectedMonster.last_name}
      </h3>
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
      {selectedMonster.num_eyes !== undefined &&
        selectedMonster.num_eyes > 0 && (
          <p>
            <strong>Number of Eyes:</strong> {selectedMonster.num_eyes}
          </p>
        )}
      {selectedMonster.num_arms !== undefined &&
        selectedMonster.num_arms > 0 && (
          <p>
            <strong>Number of Arms:</strong> {selectedMonster.num_arms}
          </p>
        )}
      {selectedMonster.num_horns !== undefined &&
        selectedMonster.num_horns > 0 && (
          <p>
            <strong>Number of Horns:</strong> {selectedMonster.num_horns}
          </p>
        )}
      {selectedMonster.num_wings !== undefined &&
        selectedMonster.num_wings > 0 && (
          <p>
            <strong>Number of Wings:</strong> {selectedMonster.num_wings}
          </p>
        )}
    </div>
  );
};
