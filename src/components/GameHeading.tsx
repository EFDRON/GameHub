import { Heading } from "@chakra-ui/react";
import useLookUP from "../hooks/useLookUp";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

  return (
    <Heading as="h1" marginBottom={4}>
      {gameQuery.platform ? useLookUP(gameQuery.platform, "platform") : ""}{" "}
      {gameQuery.genre ? useLookUP(gameQuery.genre, "genre") : ""} Games
    </Heading>
  );
};

export default GameHeading;
