import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid.tsx";
import GameHeading from "./components/GameHeading.tsx";
import GenreList from "./components/GenreList.tsx";
import NavBar from "./components/NavBar.tsx";
import PlatformSelector from "./components/PlatformSelector.tsx";
import SortSelector from "./components/SortSelector.tsx";

function App() {
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
          <GenreList></GenreList>
        </GridItem>
      </Show>

      <GridItem area="main">
        <Box paddingLeft={8}>
          <GameHeading></GameHeading>
          <HStack spacing={5}>
            <PlatformSelector></PlatformSelector>
            <SortSelector></SortSelector>
          </HStack>
        </Box>
        <GameGrid></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
