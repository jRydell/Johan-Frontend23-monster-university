import { useState, useContext } from "react";
import { MonsterContext } from "../state/MonsterStateContext";

export const AddMonster = () => {
  const { state, dispatch } = useContext(MonsterContext);
  const [monster, setMonster] = useState({
    id: "",
    first_name: "",
    last_name: "",
    description: "",
    abilities: {
      science: [],
      magic: [],
    },
    origin: "",
    num_eyes: 0,
    num_arms: 0,
    num_horns: 0,
    num_wings: 0,
    num_tentacles: 0,
    num_mouths: 0,
    num_tails: 0,
  });

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    // Dispatch an action to add the new monster
    dispatch({ type: "ADD", payload: monster });
    // Clear the form after submission
    setMonster({
      id: "",
      first_name: "",
      last_name: "",
      description: "",
      abilities: {
        science: [],
        magic: [],
      },
      origin: "",
      num_eyes: 0,
      num_arms: 0,
      num_horns: 0,
      num_wings: 0,
      num_tentacles: 0,
      num_mouths: 0,
      num_tails: 0,
    });
  };

  return (
    <>
      <div>
        <h2>Add monster</h2>
        <form onSubmit={handleSubmit}>
          <label>
            First name:
            <input type="text" name={"first_name"} value={monster.first_name} />
          </label>
          <label>
            Last name:
            <input type="text" name={"last_name"} value={monster.last_name} />
          </label>
          <label>
            Description:
            <textarea name="description" value={monster.description} />
          </label>
        </form>
      </div>
    </>
  );
};
