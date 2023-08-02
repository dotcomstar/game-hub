import { Box, Grid, GridItem, Show, Wrap, WrapItem } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";
import GameHeading from "../components/GameHeading";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading />
          <Wrap marginBottom={5}>
            <WrapItem>
              <Box marginRight={4}>
                <PlatformSelector />
              </Box>
            </WrapItem>
            <WrapItem>
              <SortSelector />
            </WrapItem>
          </Wrap>
          <GameGrid />
        </Box>
      </GridItem>
    </Grid>
  );
};

export default HomePage;
