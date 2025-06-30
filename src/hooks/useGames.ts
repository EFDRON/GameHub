import { useInfiniteQuery } from "@tanstack/react-query";
import type { GameQuery } from "../App";

import type { Platform } from "./usePlatform";

import APIClient from "../services/api-client";

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
  return useInfiniteQuery({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      api.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });
};
export default useGames;
