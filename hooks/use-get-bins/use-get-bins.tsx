import { useQuery } from "@tanstack/react-query";
import { fetchBins } from "./utils";

export const useGetBins = () => {
  return useQuery({
    queryKey: ["getBins"],
    queryFn: () => fetchBins("bin/getAllBins"),
    refetchInterval: 10000,
    refetchOnWindowFocus: true,
    staleTime: 0,
  });
};
