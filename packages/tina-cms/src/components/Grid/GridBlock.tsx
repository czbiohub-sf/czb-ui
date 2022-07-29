import { Grid, Container } from "@mui/material";
import { BlockSwitcher } from "../../utils";

// TODO: Put types for props and map
export const GridBlock = (props: any) => {
  const blocks = props.block.blocks;

  return (
    <Container sx={{ my: 5 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8 }}>
        {blocks &&
          blocks.map((nestedBlock: any, i: number) => {
            // Since nested lists get their typename changed,
            // pass the right one for the block switcher component
            const blockTypeNameSplit =
              nestedBlock.__typename.split(/(?=[A-Z])/);
            const newBlockTypeName = blockTypeNameSplit
              .slice(0, 2)
              .concat(blockTypeNameSplit.slice(-2))
              .join("");
            nestedBlock.__typename = newBlockTypeName;

            return (
              <Grid item xs={2} sm={4} md={4} key={i}>
                <BlockSwitcher
                  blocks={[nestedBlock]}
                  disableContainerGutters
                  disableYMargins
                  smallVariants
                />
              </Grid>
            );
          })}
      </Grid>
    </Container>
  );
};
