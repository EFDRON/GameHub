import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import apiClient from "../services/api-client";
import type { FetchResponse } from "./useData";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}
const usePlatform = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: platforms.length, results: platforms }, // 24 hours
  });
};

export default usePlatform;
