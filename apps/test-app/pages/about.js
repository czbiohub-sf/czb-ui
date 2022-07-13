import { Typography, Container } from "@mui/material";

export default function About() {
  return (
    <Container>
      <Typography variant="h1">ABOUT TABULA SAPIENS</Typography>
      <Typography>
        Tabula Sapiens is a benchmark, first-draft human cell atlas of nearly
        500,000 cells from 24 organs of 15 normal human subjects. This work is
        the product of the Tabula Sapiens Consortium. Taking the organs from the
        same individual controls for genetic background, age, environment, and
        epigenetic effects, and allows detailed analysis and comparison of cell
        types that are shared between tissues. Our work creates a detailed
        portrait of cell types as well as their distribution and variation in
        gene expression across tissues and within the endothelial, epithelial,
        stromal and immune compartments.
      </Typography>
    </Container>
  );
}
