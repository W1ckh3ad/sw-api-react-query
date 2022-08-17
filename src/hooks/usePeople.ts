import axios from "axios";
import { useInfiniteQuery, useQuery } from "react-query";

export const usePeople = (page: number = 1) =>
  useQuery<{
    next?: string;
    previous?: string;
    results: { name: string; homeworld: string; species: string[] }[];
  }>(["sw-people", page], async () => {
    const { data } = await axios.get(
      "https://swapi.dev/api/people?page=" + page
    );
    return data;
  });
