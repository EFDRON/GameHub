import {
  HStack,
  List,
  ListItem,
  Image,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";
import useGameQueryStore from "../store";

const GenreList = () => {
  const selectedGenre = useGameQueryStore((s) => s.gameQuery.genre);
  const setGenreId = useGameQueryStore((s) => s.setGenreId);

  const { data, isLoading, error } = useGenre();
  if (isLoading) {
    return <GenreListSkeleton></GenreListSkeleton>;
  }
  if (error) {
    return null;
  }

  return (
    <>
      <Heading fontSize="2xl" marginBottom={4}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="32px"
                borderRadius={8}
              ></Image>
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={genre.id == selectedGenre ? "bold" : "normal"}
                variant="link"
                fontSize="lg"
                onClick={() => setGenreId(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
