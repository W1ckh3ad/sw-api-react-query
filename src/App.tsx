import { Fragment, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { usePeople } from "./hooks/usePeople";
import Planet from "./components/Planet";
import Species from "./components/Species";
import { ReactQueryDevtools } from "react-query/devtools";

function App() {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = usePeople(page);
  if (isLoading) return <p>Loading</p>;
  if (isError) return <p>Error</p>;

  const hasNextPage = !data?.next;
  const hasPreviousPage = !data?.previous;

  const fetchPreviousPage = () => setPage((x) => x - 1);
  const fetchNextPage = () => setPage((x) => x + 1);

  return (
    <>
      <ReactQueryDevtools />
      <div
        className="App"
        style={{ display: "flex", flexDirection: "column", gap: 8 }}
      >
        {data?.results.map((x) => (
          <div key={x.name}>
            name: {x.name} <br />
            world: <Planet url={x.homeworld} /> <br />
            species:{" "}
            {x.species?.length > 0 &&
              x.species.map((x) => <Species key={x} url={x} />)}
          </div>
        ))}

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            type="button"
            disabled={hasPreviousPage}
            onClick={fetchPreviousPage}
          >
            Previous
          </button>
          <button type="button" disabled={hasNextPage} onClick={fetchNextPage}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
