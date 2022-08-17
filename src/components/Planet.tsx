import { usePlanet } from "../hooks/usePlanet";

const Planet = ({ url }: { url: string }) => {
  const { data, isLoading, isError } = usePlanet(url);

  if (isLoading) return <p>Loading</p>;
  if (isError) return <p>Error</p>;

  return <>{data?.name}</>;
};
export default Planet;
