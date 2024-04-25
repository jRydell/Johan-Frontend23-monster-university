import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MonsterContext } from "../state/MonsterStateContext";
import { Monster } from "../types/types";

const EditMonster = () => {
  const { monsterID = "" } = useParams<{ monsterID: string }>();
  const { state, dispatch } = useContext(MonsterContext);
  const navigate = useNavigate();

  const [monster, setMonster] = useState<Monster>({
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

  useEffect(() => {
    // Find the selected monster based on monsterID
    const selectedMonster = state.monsters.find(
      (monster) => monster.first_name === monsterID
    );

    // If monster is found, populate the form data with its information
    if (selectedMonster) {
      setMonster(selectedMonster);
    }
  }, [monsterID, state.monsters]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log("Name:", name);
    console.log("Value:", value);
    setMonster({ ...monster, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
    console.log("Monster before dispatch:", monster);

    // Create the updated monster object
    const updatedMonster = {
      ...monster,
      abilities: { science: [], magic: [] },
    };

    console.log("Updated monster:", updatedMonster);

    // Dispatch an action to update the monster data
    dispatch({
      type: "UPDATE",
      payload: {
        first_name: monsterID,
        updatedMonster: updatedMonster,
      },
    });

    console.log("Dispatch action dispatched");

    // Redirect to the monster page after updating
    navigate(`/monsters/${monsterID}`);
  };

  return (
    <div>
      <h2>Edit Monster</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First name:
          <input
            type="text"
            name="first_name"
            value={monster.first_name}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditMonster;
