import { Grid, Container } from "@mui/material";
import { BlockSwitcher } from "../../utils";

// TODO: Put types
export const StackBlock = (props: any) => {
  const blocks = props.block.blocks;

  return (
    <Container sx={{ my: 5 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {blocks.map((block, i) => (
          <Grid item xs={2} sm={4} md={4} key={i}>
            {"test"}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
