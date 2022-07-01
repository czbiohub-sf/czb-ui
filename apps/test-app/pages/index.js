import { Banner, Box } from "@czb-ui/core";
import Image from "next/image";
import viralBackgroundBiohub from "../public/images/viral_background_biohub.png";

export default function Home() {
  return (
    <Box>
      <Banner
        title="CZBUI"
        subtitle="The portal for the CZ Biohub's UI library."
        height="50%"
        background={
          <Image
            src={viralBackgroundBiohub}
            layout="fill"
            objectFit="cover"
            alt="Viral virus (it looks like)"
          />
        }
      />
    </Box>
  );
}
