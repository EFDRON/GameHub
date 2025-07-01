import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient, { type FetchResponse } from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatform = () => {
  return useQuery<FetchResponse<Platform>>({
    queryKey: ["platforms"],
    queryFn: () => apiClient.getAll({}),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: { count: platforms.length, results: platforms },
  });
};

export default usePlatform;
