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
import { lorem } from "../context";
import { getPrice } from "../main";

const RealEstates = [
  {
    id: 1,
    title: "East Sunlight Apartment",
    image:
      "https://newhome.qodeinteractive.com/wp-content/uploads/2023/03/east-sunglight-01-450x300.jpg",
    rsType: "APARTMENTS",
    location: "Ha Noi City",
    address: "123 Hoang Thai Tien Street, District Ho Hoan Kiem, Ha Noi City",
    description: lorem.generateParagraphs(2),
    floorArea: 96,
    facilities: {
      bathroom: 1,
      bedroom: 2,
      others: ["Pool", "Market", "School", "Hospital"],
    },
    price: 3000000000,
    isPopular: true,
    total: 100,
    capacity: 86,
  },
  {
    id: 2,
    title: "South Side Garden House",
    image:
      "https://newhome.qodeinteractive.com/wp-content/uploads/2023/03/property-grid-img-1-450x300.jpg",
    rsType: "APARTMENTS",
    location: "Ho Chi Minh City",
    address: "86 Hoang Minh Giam Street, District Binh Thanh, Ho Chi Minh City",
    description: lorem.generateParagraphs(2),
    floorArea: 138,
    facilities: {
      bathroom: 2,
      bedroom: 3,
      others: ["Pool", "Market", "School", "Hospital"],
    },
    price: 1800000000,
    isPopular: false,
    total: 100,
    capacity: 68,
  },
  {
    id: 3,
    title: "Penthouse Apartment",
    image:
      "https://newhome.qodeinteractive.com/wp-content/uploads/2023/03/penthouse-apartment-01-450x300.jpg",
    rsType: "APARTMENTS",
    location: "Ho Chi Minh City",
    address: "Vin Park, District Binh Thanh, Ho Chi Minh City",
    description: lorem.generateParagraphs(2),
    floorArea: 160,
    facilities: {
      bathroom: 2,
      bedroom: 2,
      others: ["Pool", "Market", "School", "Hospital"],
    },
    price: 2000000000,
    isPopular: true,
    total: 80,
    capacity: 72,
  },
  {
    id: 4,
    title: "Modern Family Home",
    image:
      "https://newhome.qodeinteractive.com/wp-content/uploads/2023/03/modern-family-house-01-450x300.jpg",
    rsType: "APARTMENTS",
    location: "Ho Chi Minh City",
    address: "Road 4 Song Hanh Street, District 2, Ho Chi Minh City",
    description: lorem.generateParagraphs(2),
    floorArea: 120,
    facilities: {
      bathroom: 2,
      bedroom: 3,
      others: ["Pool", "Market", "School", "Hospital"],
    },
    price: 2650000000,
    isPopular: false,
    total: 100,
    capacity: 90,
  },
  {
    id: 5,
    title: "East Sunlight Apartment",
    image:
      "https://newhome.qodeinteractive.com/wp-content/uploads/2023/03/east-sunglight-01-450x300.jpg",
    rsType: "APARTMENTS",
    location: "Ha Noi City",
    address: "123 Hoang Thai Tien Street, District Ho Hoan Kiem, Ha Noi City",
    description: lorem.generateParagraphs(2),
    floorArea: 87,
    facilities: {
      bathroom: 2,
      bedroom: 2,
      others: ["Pool", "Market", "School", "Hospital"],
    },
    price: 3800000000,
    isPopular: false,
    total: 100,
    capacity: 53,
  },
  {
    id: 6,
    title: "East Sunlight Apartment",
    image:
      "https://newhome.qodeinteractive.com/wp-content/uploads/2023/03/east-sunglight-01-450x300.jpg",
    rsType: "APARTMENTS",
    location: "Ha Noi City",
    address: "123 Hoang Thai Tien Street, District Ho Hoan Kiem, Ha Noi City",
    description: lorem.generateParagraphs(2),
    floorArea: 87,
    facilities: {
      bathroom: 2,
      bedroom: 3,
      others: ["Pool", "Market", "School", "Hospital"],
    },
    price: 8000000000,
    isPopular: false,
    total: 100,
    capacity: 36,
  },
  {
    id: 7,
    title: "One Bedroom Studio",
    image:
      "https://newhome.qodeinteractive.com/wp-content/uploads/2023/03/list-half-map-image-2-450x300.jpg",
    rsType: "APARTMENTS",
    location: "Thu Duc City",
    address: "385 Highway 13th, District Tay Thanh, Thu Duc City",
    description: lorem.generateParagraphs(2),
    floorArea: 78,
    facilities: {
      bathroom: 2,
      bedroom: 3,
      others: ["Pool", "Market", "School", "Hospital"],
    },
    price: 3000000000,
    isPopular: false,
    total: 50,
    capacity: 24,
  },
];

export default function ListRealEstate() {
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
      {RealEstates.slice(0, 6).map((rs) => {
        return (
          <Box
            sx={{
              width: "360px",
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
              {rs.facilities.others.map((place) => {
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
              })}
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
    </Box>
  );
}
