import { Card, Heading, HStack, Image } from "@chakra-ui/react";
import { type Game } from "../hooks/useGames";
import PlatformiconList from "./PlatformiconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
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
