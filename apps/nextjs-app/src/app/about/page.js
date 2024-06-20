import { Banner, InfoBox } from "@czb-ui/core";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Container sx={{ my: 8 }}>
        <Typography variant="h1" gutterBottom>
          Cool, routing works!
        </Typography>
        <Typography variant="body1">
          The skeleton of every application is routing. This page will introduce
          you to the fundamental concepts of routing for the web and how to
          handle routing in Next.js.
        </Typography>
        <Box sx={{ my: 8 }}>
          <InfoBox
            title="Routing Fundamentals"
            subtitle="The skeleton of every application is routing. This page will introduce you to the fundamental concepts of routing for the web and how to handle routing in Next.js."
            page={{
              title: "Next.js App Router Docs",
              to: "https://nextjs.org/docs/app/building-your-application/routing",
              externalLink: true,
            }}
          />
        </Box>
      </Container>
    </>
  );
}
