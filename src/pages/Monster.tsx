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
      {selectedMonster.num_eyes > 0 && (
        <p>
          <strong>Number of eyes:</strong> {selectedMonster.num_eyes}
        </p>
      )}
      {selectedMonster.num_arms > 0 && (
        <p>
          <strong>Number of arms:</strong> {selectedMonster.num_arms}
        </p>
      )}
      {selectedMonster.num_horns > 0 && (
        <p>
          <strong>Number of horns:</strong> {selectedMonster.num_horns}
        </p>
      )}
      {selectedMonster.num_wings > 0 && (
        <p>
          <strong>Number of wings:</strong> {selectedMonster.num_wings}
        </p>
      )}
      {selectedMonster.num_tentacles > 0 && (
        <p>
          <strong>Number of tentacles:</strong> {selectedMonster.num_tentacles}
        </p>
      )}
      {selectedMonster.num_mouths > 0 && (
        <p>
          <strong>Number of mouths:</strong> {selectedMonster.num_mouths}
        </p>
      )}
      {selectedMonster.num_tails > 0 && (
        <p>
          <strong>Number of tails:</strong> {selectedMonster.num_tails}
        </p>
      )}
    </div>
  );
};
