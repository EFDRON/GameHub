import { Heading } from "@chakra-ui/react";
import type { GameQuery } from "../App";
import platforms from "../data/platforms";
import genres from "../data/genres";
interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  return (
    <Heading as="h1" marginBottom={4}>
      {gameQuery.platform
        ? platforms.find((item) => item.id === gameQuery.platform)?.name
        : ""}{" "}
      {gameQuery.genre
        ? genres.find((item) => item.id === gameQuery.genre)?.name
        : ""}{" "}
      Games
    </Heading>
  );
};

export default GameHeading;
