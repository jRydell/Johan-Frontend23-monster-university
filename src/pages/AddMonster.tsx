import { useState, useContext } from "react";
import { MonsterContext } from "../state/MonsterStateContext";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export const AddMonster = () => {
  const { dispatch } = useContext(MonsterContext);
  const navigate = useNavigate();
  const [monster, setMonster] = useState({
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

  const handleChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    const { name, value } = e.target;
    setMonster({ ...monster, [name]: value });
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const id = uuidv4();

    dispatch({ type: "ADD", payload: { ...monster, id: id } });
    // Clear the form after submission
    setMonster({
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
    navigate(`/monsters/${id}`);
  };

  return (
    <>
      <div>
        <h2>Add monster</h2>
        <form onSubmit={handleSubmit}>
          <label>
            First name:
            <input
              type="text"
              name={"first_name"}
              value={monster.first_name}
              onChange={handleChange}
            />
          </label>
          <label>
            Last name:
            <input
              type="text"
              name={"last_name"}
              value={monster.last_name}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Description:
            <textarea
              name="description"
              value={monster.description}
              onChange={handleChange}
            />
          </label>

          <label>
            Origin:
            <textarea
              name="origin"
              value={monster.origin}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Number of eyes:
            <input
              type="number"
              name="num_eyes"
              value={monster.num_eyes}
              onChange={handleChange}
            />
          </label>

          <label>
            Number of arms:
            <input
              type="number"
              name="num_arms"
              value={monster.num_arms}
              onChange={handleChange}
            />
            <br />
          </label>
          <label>
            Number of horns:
            <input
              type="number"
              name="num_horns"
              value={monster.num_horns}
              onChange={handleChange}
            />
          </label>

          <label>
            Number of wings:
            <input
              type="number"
              name="num_wings"
              value={monster.num_wings}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Number of tentacles:
            <input
              type="number"
              name="num_tentacles"
              value={monster.num_tentacles}
              onChange={handleChange}
            />
          </label>

          <label>
            Number of mouths:
            <input
              type="number"
              name="num_mouths"
              value={monster.num_mouths}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Number of tails:
            <input
              type="number"
              name="num_tails"
              value={monster.num_tails}
              onChange={handleChange}
            />
          </label>

          <button type="submit">Add Monster</button>
        </form>
      </div>
    </>
  );
};
