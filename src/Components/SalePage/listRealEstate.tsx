import React from "react";
import { Box, Button, Link, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import BathtubIcon from "@mui/icons-material/Bathtub";
import BedIcon from "@mui/icons-material/Bed";
import SchoolIcon from "@mui/icons-material/School";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import AddRoadIcon from "@mui/icons-material/AddRoad";
import FactoryIcon from "@mui/icons-material/Factory";
import WaterIcon from "@mui/icons-material/Water";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { getPrice } from "../main";
import { IRealEstates, RealEstates } from "../datas";
import RDSearch from "../Features/Search";

interface IListRealEstate {
  handleListSearch: (searchOpts: any) => void;
  searchOpts?: any;
}

export default function ListRealEstate(props: IListRealEstate) {
  const { handleListSearch, searchOpts } = props;
  const [currentPage, setCurrentPage] = React.useState<number>(0);
  const [posts, setPosts] = React.useState<IRealEstates[]>([]);
  const [listRsRef, setListRsRef] = React.useState<number[]>([]);

  const handleRenderPagingNum = () => {
    const numberOfPages = (): number => {
      let pages = Math.round(
        (searchOpts?.searchLocation && searchOpts?.searchLocation !== "none"
          ? posts
          : RealEstates
        ).length / 6
      );
      const getDecimalVal = pages.toString().indexOf(".");
      const decimalPart = pages.toString().substring(getDecimalVal + 1);

      return Number(decimalPart) > 1 ? ++pages : pages;
    };
    const _listRsRef = Array.from(Array(numberOfPages()).keys());
    setListRsRef(_listRsRef);
  };

  const handleNumberPosts = () => {
    let posts = null;
    if (searchOpts?.searchLocation && searchOpts?.searchLocation !== "none") {
      posts = RealEstates.filter((rs: any) =>
        rs.searchKey.includes(searchOpts?.searchLocation)
      ).slice(currentPage * 6, currentPage * 6 + 6);
    } else {
      posts = RealEstates.slice(currentPage * 6, currentPage * 6 + 6);
    }
    console.log("handleNumberPosts: ", posts);
    setPosts(posts);
  };

  React.useEffect(() => {
    handleRenderPagingNum();
  }, [posts, searchOpts]);

  React.useEffect(() => {
    handleNumberPosts();
  }, [searchOpts]);

  const renderComp = (rs: IRealEstates) => {
    return rs.facilities.others.map((place: any) => {
      if (place === "School") {
        return <SchoolIcon sx={{ padding: "0px 5px" }} />;
      }
      if (place === "Market") {
        return <LocalGroceryStoreIcon sx={{ padding: "0px 5px" }} />;
      }
      if (place === "Hospital") {
        return <LocalHospitalIcon sx={{ padding: "0px 5px" }} />;
      }
      if (place === "Highway") {
        return <AddRoadIcon sx={{ padding: "0px 5px" }} />;
      }
      if (place === "IndustryZone") {
        return <FactoryIcon sx={{ padding: "0px 5px" }} />;
      }
      if (place === "River" || place === "Pool") {
        return <WaterIcon sx={{ padding: "0px 5px" }} />;
      }
      return null;
    });
  };

  const renderPaging = () => {
    return (
      <Box
        sx={{
          height: "40px",
          display: "flex",
          alignItems: "center",
          flex: "0 1 100%",
          justifyContent: "flex-end",
        }}
      >
        {listRsRef.map((p) => (
          <h3
            className="paging-number"
            onClick={() => setCurrentPage(p)}
            style={{
              cursor: "pointer",
              padding: "0px 20px",
              textDecoration: `${p === currentPage ? "underline" : ""}`,
            }}
          >
            <b>{p + 1}</b>
          </h3>
        ))}
      </Box>
    );
  };

  React.useEffect(() => {
    handleNumberPosts();
  }, [currentPage]);

  return (
    <Box
      sx={{
        width: "80%",
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
        justifyContent: "space-between",
        margin: "auto",
      }}
    >
      <Typography
        sx={{
          fontSize: "32px",
          flex: "0 1 100%",
          fontWeight: 200,
          padding: "40px 0px 20px 0px",
          textAlign: "right",
          right: "10%",
          position: "relative",
        }}
      >
        <em>Find The House of Your Dream</em> <br />
        <b style={{ fontSize: "36px" }}>Using Our Platform</b>
      </Typography>
      <RDSearch
        handleSearchChange={handleListSearch}
        styling={{ flex: "0 1 100%", padding: "30px 0px !important" }}
      />
      {posts.map((rs) => {
        return (
          <Box
            sx={{
              width: "90%",
              height: "fit-content",
              flex: "0 1 calc(33% - 1em)",
              textAlign: "left",
              fontFamily: "Poppins,sans-serif",
            }}
          >
            <Box sx={{ width: "inherit", position: "relative" }}>
              <Button
                variant="contained"
                sx={{
                  color: "#fff",
                  position: "absolute",
                  top: "20px",
                  right: "-3%",
                  backgroundColor: `${
                    rs.isPopular
                      ? "#d25319"
                      : !rs.isPopular && rs.total - rs.capacity < rs.total / 3
                      ? "#51d219"
                      : "#ffcc41"
                  }`,
                }}
              >
                {rs.isPopular ? (
                  <>
                    <LocalFireDepartmentIcon /> Most Popular
                  </>
                ) : null}
                {!rs.isPopular && rs.total - rs.capacity < rs.total / 3
                  ? "SOLD OUT SOON"
                  : null}
                {!rs.isPopular && !(rs.total - rs.capacity < rs.total / 3)
                  ? "ON SELL"
                  : null}
              </Button>
              <Box
                component="img"
                src={rs.image}
                sx={{ width: "inherit", height: "50%" }}
              />
            </Box>
            <Typography
              sx={{
                padding: "10px 0px 0px",
                display: "flex",
                alignItems: "baseline",
              }}
            >
              <LocationOnIcon sx={{ padding: "0px 8px", fill: "#ffcc41" }} />
              <Link href="#" sx={{ textDecoration: "none" }}>
                {rs.location}
              </Link>
            </Typography>
            <Typography
              variant="h5"
              sx={{
                padding: "10px 0px 20px",
                fontFamily: "inherit",
                fontSize: 26,
              }}
            >
              {rs.title}
            </Typography>
            <Box sx={{ display: "flex", gap: "40px", paddingBottom: "20px" }}>
              <Typography>
                <em>
                  <b>Total:</b> {rs.total}
                </em>
              </Typography>
              <Typography>
                <em>
                  <b>Cap:</b> {rs.capacity}
                </em>
              </Typography>
            </Box>
            <Typography sx={{ paddingBottom: "20px" }}>
              <em>Facilities:</em>{" "}
              <Box
                sx={{
                  display: "inline-flex",
                  verticalAlign: "middle",
                  height: "30px",
                }}
              >
                <HomeIcon />
                <Typography sx={{ padding: "0px 15px 0px 5px" }}>
                  <em>
                    <span>
                      {rs.floorArea}
                      <span>
                        m<sup>2</sup>
                      </span>
                    </span>
                  </em>
                </Typography>
                <BathtubIcon />
                <Typography sx={{ padding: "0px 15px 0px 5px" }}>
                  <em>{rs.facilities.bathroom}</em>
                </Typography>
                <BedIcon />
                <Typography sx={{ padding: "0px 15px 0px 5px" }}>
                  <em>{rs.facilities.bedroom}</em>
                </Typography>
              </Box>
            </Typography>
            <Box sx={{ display: "flex" }}>
              <Typography sx={{ fontSize: "inherit", paddingBottom: "20px" }}>
                <em>Near places:</em>{" "}
              </Typography>
              {renderComp(rs)}
            </Box>
            <Typography sx={{ paddingBottom: "20px", width: "inherit" }}>
              <em>Address: {rs.address}</em>
            </Typography>
            <Typography
              sx={{
                width: "inherit",
                overflow: "hidden",
                height: 100,
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 4,
              }}
            >
              {rs.description}
            </Typography>
            <Box
              sx={{
                width: "75%",
                display: "flex",
                borderTop: "solid 1px rgb(0 0 0 / 27%)",
                marginTop: "10px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "x-large",
                  fontWeight: 600,
                  color: "#ffcc41",
                  padding: "10px 0px 25px",
                }}
              >
                {getPrice(rs.price as number)}
              </Typography>
            </Box>
          </Box>
        );
      })}
      {renderPaging()}
    </Box>
  );
}
