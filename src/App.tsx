import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar.tsx";
import GameGrid from "./components/GameGrid.tsx";
import GenreList from "./components/GenreList.tsx";
import type { Genre } from "./hooks/useGenre.ts";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector.tsx";
import type { Platform } from "./hooks/usePlatform.ts";
import SortSelector from "./components/SortSelector.tsx";
import GameHeading from "./components/GameHeading.tsx";

export interface GameQuery {
  genre: number | null;
  platform: number | null;
  sortOrder: string;
  searchText: string;
}
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const handleGenreSelect = (genre: Genre) =>
    setGameQuery({ ...gameQuery, genre: genre.id });
  const handlePlatformSelect = (platform: Platform) =>
    setGameQuery({ ...gameQuery, platform: platform.id });
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem area="nav">
        <NavBar
          OnSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        ></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={handleGenreSelect}
          ></GenreList>
        </GridItem>
      </Show>

      <GridItem area="main">
        <Box paddingLeft={8}>
          <GameHeading gameQuery={gameQuery}></GameHeading>
          <HStack spacing={5}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              handlePlatformSelect={handlePlatformSelect}
            ></PlatformSelector>
            <SortSelector
              handleSortSelect={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
              selectedSort={gameQuery.sortOrder}
            ></SortSelector>
          </HStack>
        </Box>
        <GameGrid gameQuery={gameQuery}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
