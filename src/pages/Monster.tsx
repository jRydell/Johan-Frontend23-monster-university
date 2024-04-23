import { useParams } from "react-router-dom";

export const Monster = () => {
  const params = useParams<{ monsterID: string }>();
  console.log(params);
  return (
    <>
      <div>
        <h2>Monster {params.monsterID}</h2>
      </div>
    </>
  );
};
