import { GenericBanner } from "@czb-ui/core";
import { Box } from "@mui/material";
import Image from "next/image";
import { Button } from "czifui";
import viralBackgroundBiohub from "../public/images/viral_background_biohub.png";

export default function Home() {
  return (
    <Box>
      <GenericBanner
        title="CZBUI"
        subtitle="The portal for the CZ Biohub's UI library."
        height="50vh"
        background={
          <Image
            src={viralBackgroundBiohub}
            layout="fill"
            objectFit="cover"
            alt="Viral virus (it looks like)"
          />
        }
      />
      <Button sdsStyle="rounded" sdsType="primary">
        test
      </Button>
    </Box>
  );
}
