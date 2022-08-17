import axios from "axios";
import { useInfiniteQuery, useQuery } from "react-query";

export const usePlanet = (url: string) =>
  useQuery<{ name: string }>(["sw-planet", url], async () => {
    const { data } = await axios.get(url);
    return data;
  });
