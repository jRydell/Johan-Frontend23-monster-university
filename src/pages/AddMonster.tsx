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

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setMonster({ ...monster, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
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
        </form>
      </div>
    </>
  );
};
