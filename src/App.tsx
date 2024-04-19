import { useState } from "react";
import "./App.scss";

function App() {
  const [monsters, setMonsters] = useState([
    { name: "Sweat Beast", hasHorns: false, eyes: 2, legs: 4, strength: 5 },
    { name: "Tome Devourer", hasHorns: false, eyes: 3, legs: 6, strength: 3 },
    {
      name: "Munching Gobbler",
      hasHorns: false,
      eyes: 4,
      legs: 8,
      strength: 2,
    },
    { name: "Maternal Hydra", hasHorns: false, eyes: 6, legs: 12, strength: 1 },
    { name: "Scholarly Fiend", hasHorns: false, eyes: 2, legs: 2, strength: 4 },
    { name: "Muscle Mauler", hasHorns: false, eyes: 2, legs: 4, strength: 5 },
    {
      name: "Matriarchal Harpy",
      hasHorns: false,
      eyes: 4,
      legs: 2,
      strength: 1,
    },
    { name: "Page Ripper", hasHorns: false, eyes: 3, legs: 6, strength: 3 },
    { name: "Grime Ghoul", hasHorns: false, eyes: 2, legs: 4, strength: 4 },
    {
      name: "Scheduler Serpent",
      hasHorns: false,
      eyes: 2,
      legs: 0,
      strength: 2,
    },
    { name: "Ink Scribe", hasHorns: false, eyes: 2, legs: 0, strength: 3 },
    { name: "Recipe Raptor", hasHorns: false, eyes: 2, legs: 2, strength: 2 },
  ]);

  return (
    <div className="App">
      <h1>Monsters</h1>
      <ul>
        {monsters.map((monster, index) => (
          <li key={index}>
            <p>Name: {monster.name} </p>
            <p>Has Horns: {monster.hasHorns ? "Yes" : "No"} </p>
            <p>Eyes: {monster.eyes}</p>
            <p>Legs: {monster.legs}</p>
            <p>Strength: {monster.strength}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
