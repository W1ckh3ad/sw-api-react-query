import axios from "axios";
import { useInfiniteQuery, useQuery } from "react-query";

export const useSpecies = (url: string) =>
  useQuery<{ name: string }>(["sw-species", url], async () => {
    const { data } = await axios.get(url);
    return data;
  });
