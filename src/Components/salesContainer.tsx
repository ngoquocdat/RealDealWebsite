import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import BestChoiceRealEstate from "./bestChoiceRealEstate";
import ListRealEstate from "./listRealEstate";

export default function SalesContainer() {
  const [propType, setPropType] = React.useState<number>(0);
  const [location, setLocation] = React.useState<number>(0);

  const handleChangPropType = (event: SelectChangeEvent) => {
    setPropType(Number(event.target.value));
  };

  const handleChangLocation = (event: SelectChangeEvent) => {
    setLocation(Number(event.target.value));
  };

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
        <FormControl
          variant="standard"
          sx={{
            m: 1,
            minWidth: 200,
            padding: "15px",
            borderRadius: "3px",
            backgroundColor: "rgba(225, 225, 225, 0.3)",
            border: "solid 4px rgba(225, 225, 225, 1)",
            top: "60%",
            right: "27%",
            flexDirection: "initial",
            gap: "50px",
          }}
        >
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={propType.toString()}
            onChange={handleChangPropType}
            placeholder="Select property type"
            label="Property Type"
            sx={{ width: 200 }}
          >
            <MenuItem value={0} sx={{ color: "#0000006e" }}>
              <em>Select property type</em>
            </MenuItem>
            <MenuItem value={10}>Apartment</MenuItem>
            <MenuItem value={20}>Luxury Apartment</MenuItem>
            <MenuItem value={30}>Villas</MenuItem>
            <MenuItem value={40}>Penthouse</MenuItem>
          </Select>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={location.toString()}
            onChange={handleChangLocation}
            placeholder="Select property type"
            label="Property Type"
            sx={{ width: 200 }}
          >
            <MenuItem value={0} sx={{ color: "#0000006e" }}>
              <em>Location</em>
            </MenuItem>
            <MenuItem value={10}>District 2</MenuItem>
            <MenuItem value={20}>Thu Duc City</MenuItem>
            <MenuItem value={30}>Binh Duong provine</MenuItem>
            <MenuItem value={40}>District 7</MenuItem>
          </Select>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#ffcc41",
              fontWeight: 500,
              display: "flex",
              gap: "10px",
            }}
          >
            <SearchIcon />
            Search Property
          </Button>
        </FormControl>
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
      <ListRealEstate />
    </>
  );
}
