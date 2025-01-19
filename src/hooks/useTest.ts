import { useQuery } from "@tanstack/react-query";
import { fetchTest } from "../api/test.api";

export const useTestData = () => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["test"],
    queryFn: () => fetchTest(),
  });
  return { data, isPending, isError };
};
