import { HStack, List, ListItem, Skeleton } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  const listItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return (
    <List>
      {listItems.map((item) => (
        <ListItem key={item} paddingY="5px">
          <HStack>
            <Skeleton boxSize="32px" borderRadius={8}></Skeleton>
            <Skeleton height="10px" width="100px" borderRadius={2}></Skeleton>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreListSkeleton;
