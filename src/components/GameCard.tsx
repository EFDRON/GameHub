import { Card, Heading, Image, Text } from "@chakra-ui/react";
import useGames, { type Game } from "../hooks/useGames";
import PlatformiconList from "./PlatformiconList";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  console.log(game.parent_platforms.map((platform) => platform.platform));
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image}></Image>
      <Heading fontSize="2xl">{game.name}</Heading>

      <PlatformiconList
        platform={game.parent_platforms.map((platform) => platform.platform)}
      ></PlatformiconList>
    </Card>
  );
};

export default GameCard;
