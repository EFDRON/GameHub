import { Card, Heading, Image } from "@chakra-ui/react";
import useGames, { type Game } from "../hooks/useGames";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image}></Image>
      <Heading fontSize="2xl">{game.name}</Heading>
    </Card>
  );
};

export default GameCard;
