import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar.tsx";
import GameGrid from "./components/GameGrid.tsx";
import GenreList from "./components/GenreList.tsx";
import type { Genre } from "./hooks/useGenre.ts";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector.tsx";
import type { Platform } from "./hooks/usePlatform.ts";
import SortSelector from "./components/SortSelector.tsx";
export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const handleGenreSelect = (genre: Genre) =>
    setGameQuery({ ...gameQuery, genre });
  const handlePlatformSelect = (platform: Platform) =>
    setGameQuery({ ...gameQuery, platform });
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
        <HStack spacing={5} paddingLeft={8}>
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
        <GameGrid gameQuery={gameQuery}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
