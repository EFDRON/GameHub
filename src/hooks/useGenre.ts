import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import genres from "../data/genres";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
const apiClient = new APIClient<Genre>("/genres");
const useGenre = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: () => apiClient.getAll({}),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: genres.length, results: genres }, // 24 hours
  });
};

// const useGenre = () => useData<Genre>("/genres");

export default useGenre;
