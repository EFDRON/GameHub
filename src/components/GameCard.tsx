import { Card, Heading, HStack, Image } from "@chakra-ui/react";
import { type Game } from "../hooks/useGames";
import PlatformiconList from "./PlatformiconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  console.log(getCroppedImageUrl(game.background_image));
  return (
    <Card width="300px" borderRadius={10} overflow="hidden">
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
