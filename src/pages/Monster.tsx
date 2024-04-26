import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { MonsterContext } from "../state/MonsterStateContext";
import { useNavigate } from "react-router-dom";

export const Monster = () => {
  const { monsterID } = useParams<{ monsterID: string }>();
  const { dispatch, state } = useContext(MonsterContext);
  const navigate = useNavigate();

  const selectedMonster = state.monsters.find(
    (monster) => monster.id === monsterID
  );

  if (!selectedMonster) {
    return <div>Monster not found!</div>;
  }

  const handleClickDelete = () => {
    dispatch({
      type: "REMOVE",
      payload: { id: selectedMonster.id },
    });
    navigate("/monsters");
  };

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

      <button></button>

      <button>
        <Link to={`/monsters/${selectedMonster.id}/edit`}>Edit</Link>
      </button>
      <button onClick={handleClickDelete}>Delete</button>
    </div>
  );
};
