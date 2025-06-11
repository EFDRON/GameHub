import useData from "./useData";
import type { Genre } from "./useGenre";

export interface Platform {
  id: number;
  slug: string;
  name: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (slectedGenre: Genre | null) =>
  useData<Game>("/games", { params: { genres: slectedGenre?.id } }, [
    slectedGenre?.id,
  ]);

export default useGames;
