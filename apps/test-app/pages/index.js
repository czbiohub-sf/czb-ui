import { Banner } from "@czb-ui/core";
import Image from "next/image";
import viralBackgroundBiohub from "../public/images/viral_background_biohub.png";

export default function Home() {
  return (
    <div>
      <Banner
        title="CZBUI"
        subtitle="The portal for the CZ Biohub's UI library."
        background={
          <Image src={viralBackgroundBiohub} layout="fill" objectFit="cover" />
        }
      />
    </div>
  );
}
