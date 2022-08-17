import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { usePeople } from "./hooks/usePeople";
import Planet from "./components/Planet";
import Species from "./components/Species";

function App() {
  const { data, isLoading, isError } = usePeople();
  if (isLoading) return <p>Loading</p>;
  if (isError) return <p>Error</p>;

  return (
    <div
      className="App"
      style={{ display: "flex", flexDirection: "column", gap: 8 }}
    >
      {data?.map((x) => (
        <div>
          name: {x.name} <br />
          world: <Planet url={x.homeworld} /> <br />
          species:{" "}
          {x.species?.length > 0 && x.species.map((x) => <Species url={x} />)}
        </div>
      ))}
    </div>
  );
}

export default App;
