import {
  Box,
  Button,
  Center,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

import type { GameQuery } from "../App";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];
  const dataLength =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;
  return (
    <>
      {error && <Text>{error.message}</Text>}
      <InfiniteScroll
        dataLength={dataLength}
        next={fetchNextPage}
        hasMore={!!hasNextPage}
        loader={
          <center>
            <Spinner></Spinner>
          </center>
        }
      >
        <SimpleGrid
          padding={10}
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          spacing={5}
        >
          {isLoading &&
            skeletons.map((s) => (
              <GameCardContainer key={s}>
                <GameCardSkeleton></GameCardSkeleton>
              </GameCardContainer>
            ))}
          {data?.pages.map((page) => (
            <React.Fragment>
              {page.results.map((game) => (
                <GameCardContainer key={game.id}>
                  <GameCard game={game}></GameCard>
                </GameCardContainer>
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
    </>
  );
};

export default GameGrid;
