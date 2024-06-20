import { Banner, InfoBox } from "@czb-ui/core";
import { Grid, Container, Typography } from "@mui/material";
import Image from "next/image";
import NextLink from "next/link";

const BannerImageComponent = () => (
  <Image
    src="/home-sf-hero-desk.webp"
    alt="Banner Image"
    layout="fill"
    objectFit="cover"
  />
);

export default function Home() {
  return (
    <>
      <Banner
        headline="Welcome to the App Router Demo"
        image={<BannerImageComponent />}
        type="background"
      />
      <Container sx={{ my: 8 }}>
        <Typography variant="h2" gutterBottom>
          This demo is running on the Next.js App Router.
        </Typography>
        <Typography variant="body1">
          The App Router is a tool that allows you to create a multi-page app
          with Next.js.
        </Typography>
        <Grid sx={{ my: 8 }} spacing={4} direction="row" container>
          <Grid item md>
            <InfoBox
              title="Explore Next.js"
              subtitle="For new applications, we recommend using the App Router. This router allows you to use React's latest features and is an evolution of the Pages Router based on community feedback."
              page={{
                title: "Next.js Docs",
                to: "https://nextjs.org/docs",
                externalLink: true,
                newTab: true,
              }}
              small
            />
          </Grid>
          <Grid item md>
            <InfoBox
              title="Go to about page"
              subtitle="Demo of Next.js app router linking to another page. The page should not reload."
              page={{
                title: "About page",
                to: "/about",
              }}
              pagesComponent={NextLink}
              small
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
