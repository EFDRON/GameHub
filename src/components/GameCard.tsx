import { Card, Heading, HStack, Image } from "@chakra-ui/react";
import { type Game } from "../hooks/useGames";
import PlatformiconList from "./PlatformiconList";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  console.log(game.parent_platforms.map((platform) => platform.platform));
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image}></Image>
      <Heading fontSize="2xl">{game.name}</Heading>
      <HStack justifyContent="space-between" padding={2}>
        <PlatformiconList
          platform={game.parent_platforms.map((platform) => platform.platform)}
        ></PlatformiconList>
        <CriticScore score={game.metacritic}></CriticScore>
      </HStack>
    </Card>
  );
};

export default GameCard;
