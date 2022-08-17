import axios from "axios";
import { useInfiniteQuery, useQuery } from "react-query";

export const usePeople = () =>
  useQuery<{ name: string; homeworld: string; species: string[] }[]>(
    "sw-people",
    async () => {
      const { data } = await axios.get("https://swapi.dev/api/people?page=1");
      return data?.results;
    }
  );
