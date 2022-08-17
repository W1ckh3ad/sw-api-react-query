import { useSpecies } from "../hooks/useSpecies";

const Species = ({ url }: { url: string }) => {
  const { data, isLoading, isError } = useSpecies(url);

  if (isLoading) return <p>Loading</p>;
  if (isError) return <p>Error</p>;

  return <>{data?.name}</>;
};
export default Species;
