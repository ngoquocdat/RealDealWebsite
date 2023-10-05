import React from "react";
import { Box, Typography } from "@mui/material";
import BestChoiceRealEstate from "./bestChoiceRealEstate";
import ListRealEstate from "./listRealEstate";
import RDSearch from "../Features/Search";

export default function SalesContainer() {
  const [listSearch, setListSearch] = React.useState<any>(null);

  const handleBannerSearch = (searchOpts: any) => {
    console.log("handleBannerSearch: ", searchOpts);
  };

  const handleListRSSearch = (searchOpts: any) => {
    console.log("handleListRSSearch: ", searchOpts);
    setListSearch(searchOpts);
  };

  // React.useEffect(() => {
  //   console.log("listSearch : ", listSearch);
  // });

  const SalesBanner = () => {
    return (
      <Box
        sx={{
          width: "100%",
          height: "550px",
          margin: "auto",
          borderRadius: "10px",
          backgroundImage:
            "url(https://newhome.qodeinteractive.com/wp-content/uploads/2023/03/home-rev-img-2.jpg)",
          backgroundSize: "cover",
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            fontSize: 36,
            top: "60%",
            position: "relative",
            right: "35%",
          }}
        >
          Find you{" "}
          <em>
            <b>best places</b>
          </em>
        </Typography>
        <RDSearch
          handleSearchChange={handleBannerSearch}
          isShowProperty
          styling={{
            borderRadius: "3px",
            backgroundColor: "rgba(225, 225, 225, 0.3)",
            border: "solid 4px rgba(225, 225, 225, 1)",
            top: "60%",
            right: "27%",
          }}
        />
      </Box>
    );
  };

  return (
    <>
      {/** Banner */}
      <SalesBanner />
      {/** Best choice real estates */}
      <BestChoiceRealEstate />
      {/** List real estate on sale */}
      <ListRealEstate
        handleListSearch={handleListRSSearch}
        searchOpts={listSearch}
      />
    </>
  );
}
