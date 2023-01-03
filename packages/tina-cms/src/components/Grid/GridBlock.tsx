import { Grid, Container } from "@mui/material";
import { BlockSwitcher } from "../../utils";

/*
 * Sample response
 * (what will be in the "block" prop of the GridBlock component)
 * {
 *	  "__typename": "PagesBlocksGrid",
 *	  "blocks": [
 *		  {
 *			  "__typename": "PagesBlocksGridBlocksInfoBox",
 *			  "title": "why tina cms is cool",
 *			  "subtitle": null,
 *			  ...
 *		  }
 *	  ]
 *	}
 */

interface GridBlockProps {
  __typename: string;
  blocks: Array<any>;
}

interface GridProps {
  block: GridBlockProps;
}

export const GridBlock = ({ block }: GridProps) => {
  const blocks = block.blocks;

  return (
    <Container sx={{ my: 5 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8 }}>
        {blocks &&
          blocks.map((nestedBlock, i) => {
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
