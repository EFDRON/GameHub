import { useQuery } from "@tanstack/react-query";
import type { GameQuery } from "../App";

import type { Platform } from "./usePlatform";

import APIClient, { type FetchResponse } from "../services/api-client";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) => {
  const api = new APIClient<Game>("/games");
  return useQuery({
    queryKey: ["games", gameQuery],
    queryFn: () => {
      return api.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      });
    },
  });
};
export default useGames;
