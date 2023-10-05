import { Box } from "@mui/material";
import React from "react";
import Carousel from "../Carousel";
import RealEstateRegions from "../RealEstateRegions";
import RealNews from ".";

export default function NewsContainer() {
  return (
    <Box>
      {/** CAROUSEL */}
      <Carousel />
      <Box>
        {/** REAL ESTATE REGIONS */}
        <RealEstateRegions />
        {/** SEARCH - NEWS */}
        <RealNews
          newsCounter={["first", "second", "third", "fourth", "five", "six"]}
        />
      </Box>
    </Box>
  );
}
