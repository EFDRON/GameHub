import { Card, Heading, HStack, Image } from "@chakra-ui/react";
import { type Game } from "../hooks/useGames";
import PlatformiconList from "./PlatformiconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <HStack justifyContent="space-between" padding={2}>
        <PlatformiconList
          platform={game.parent_platforms.map((platform) => platform.platform)}
        ></PlatformiconList>
        <CriticScore score={game.metacritic}></CriticScore>
      </HStack>
      <Heading fontSize="2xl" marginBottom={2} marginLeft={2}>
        {game.name}
        <Emoji rating={game.rating_top}></Emoji>
      </Heading>
    </Card>
  );
};

export default GameCard;
