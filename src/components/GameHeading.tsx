import { Heading } from "@chakra-ui/react";
import type { GameQuery } from "../App";
import useLookUP from "../hooks/useLookUp";
interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  return (
    <Heading as="h1" marginBottom={4}>
      {gameQuery.platform ? useLookUP(gameQuery.platform, "platform") : ""}{" "}
      {gameQuery.genre ? useLookUP(gameQuery.genre, "genre") : ""} Games
    </Heading>
  );
};

export default GameHeading;
