import { useSpecies } from "../hooks/useSpecies";

const Species = ({ url }: { url: string }) => {
  const { data, isLoading, isError } = useSpecies(url);

  if (isLoading) return <>Loading</>;
  if (isError) return <>Error</>;

  return <>{data?.name}</>;
};
export default Species;
