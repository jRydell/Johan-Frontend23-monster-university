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
          <strong>Eyes:</strong> {selectedMonster.num_eyes}
        </p>
      )}
      {selectedMonster.num_arms > 0 && (
        <p>
          <strong>Arms:</strong> {selectedMonster.num_arms}
        </p>
      )}
      {selectedMonster.num_horns > 0 && (
        <p>
          <strong>Horns:</strong> {selectedMonster.num_horns}
        </p>
      )}
      {selectedMonster.num_wings > 0 && (
        <p>
          <strong>Wings:</strong> {selectedMonster.num_wings}
        </p>
      )}
      {selectedMonster.num_tentacles > 0 && (
        <p>
          <strong>Tentacles:</strong> {selectedMonster.num_tentacles}
        </p>
      )}
      {selectedMonster.num_mouths > 0 && (
        <p>
          <strong>Mouths:</strong> {selectedMonster.num_mouths}
        </p>
      )}
      {selectedMonster.num_tails > 0 && (
        <p>
          <strong>Tails:</strong> {selectedMonster.num_tails}
        </p>
      )}
    </div>
  );
};
