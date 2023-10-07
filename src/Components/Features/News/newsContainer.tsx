import { Box } from "@mui/material";
import React from "react";
import Carousel from "../Carousel";
import RealEstateRegions from "../RealEstateRegions";
import ListRealEstate from "../../SalePage/listRealEstate";
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
        {/** Real Estate on Sale */}
        <Box sx={{ paddingTop: "50px" }}>
          <ListRealEstate
            handleListSearch={function (searchOpts: any): void {
              throw new Error("Function not implemented.");
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
