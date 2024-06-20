import { Banner, InfoBox } from "@czb-ui/core";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

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
        <Box sx={{ my: 8 }}>
          <InfoBox
            title="Explore Next.js"
            subtitle="For new applications, we recommend using the App Router. This router allows you to use React's latest features and is an evolution of the Pages Router based on community feedback."
            page={{
              title: "Next.js Docs",
              to: "https://nextjs.org/docs",
              externalLink: true,
            }}
          />
        </Box>
      </Container>
    </>
  );
}
