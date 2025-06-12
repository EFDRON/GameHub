import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar.tsx";
import GameGrid from "./components/GameGrid.tsx";
import GenreList from "./components/GenreList.tsx";
import type { Genre } from "./hooks/useGenre.ts";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector.tsx";
import type { Platform } from "./hooks/usePlatform.ts";
function App() {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const handleGenreSelect = (genre: Genre) => setSelectedGenre(genre);
  const handlePlatformSelect = (platform: Platform) =>
    setSelectedPlatform(platform);
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={selectedGenre}
            onSelectGenre={handleGenreSelect}
          ></GenreList>
        </GridItem>
      </Show>

      <GridItem area="main">
        <PlatformSelector
          selectedPlatform={selectedPlatform}
          handlePlatformSelect={handlePlatformSelect}
        ></PlatformSelector>
        <GameGrid
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
        ></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
