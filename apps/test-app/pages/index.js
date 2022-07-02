import { GenericBanner, Box } from "@czb-ui/core";
import Image from "next/image";
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
    </Box>
  );
}
