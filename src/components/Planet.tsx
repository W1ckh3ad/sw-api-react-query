import { usePlanet } from "../hooks/usePlanet";

const Planet = ({ url }: { url: string }) => {
  const { data, isLoading, isError } = usePlanet(url);

  if (isLoading) return <>Loading</>;
  if (isError) return <>Error</>;

  return <>{data?.name}</>;
};
export default Planet;
