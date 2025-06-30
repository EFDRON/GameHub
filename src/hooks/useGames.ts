import { useQuery } from "@tanstack/react-query";
import type { GameQuery } from "../App";

import type { Platform } from "./usePlatform";

import apiClient, { type FetchResponse } from "../services/api-client";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) => {
  return useQuery({
    queryKey: ["games", gameQuery],
    queryFn: () => {
      return apiClient
        .get<FetchResponse<Game>>("/games", {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
          },
        })
        .then((res) => res.data);
    },
  });
};

export default useGames;
