import {
  Button,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  SxProps,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

interface IRDSearch {
  styling?: SxProps;
  isShowProperty?: boolean;
  handleSearchChange: (searchStrings: any) => void;
}

export default function RDSearch(props: IRDSearch) {
  const { styling, isShowProperty, handleSearchChange } = props;
  const [propType, setPropType] = React.useState<string>("none");
  const [location, setLocation] = React.useState<string>("none");

  const handleChangPropType = (event: SelectChangeEvent) => {
    setPropType(event.target.value);
  };

  const handleChangLocation = (event: SelectChangeEvent) => {
    setLocation(event.target.value);
  };

  const handleSearch = () => {
    handleSearchChange?.({
      searchProp: propType,
      searchLocation: location,
    });
  };

  return (
    <FormControl
      variant="standard"
      sx={{
        ...styling,
        m: 1,
        minWidth: 200,
        padding: "15px",
        flexDirection: "initial",
        gap: "50px",
      }}
    >
      {isShowProperty ? (
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={propType.toString()}
          onChange={handleChangPropType}
          placeholder="Select property type"
          label="Property Type"
          sx={{ width: 200 }}
        >
          <MenuItem value={"none"} sx={{ color: "#0000006e" }}>
            <em>Select property type</em>
          </MenuItem>
          <MenuItem value={"Apartment"}>Apartment</MenuItem>
          <MenuItem value={"LuxApartment"}>Luxury Apartment</MenuItem>
          <MenuItem value={"Villas"}>Villas</MenuItem>
          <MenuItem value={"Penthouse"}>Penthouse</MenuItem>
        </Select>
      ) : (
        ""
      )}
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={location.toString()}
        onChange={handleChangLocation}
        placeholder="Select property type"
        label="Property Type"
        sx={{ width: 200 }}
      >
        <MenuItem value={"none"} sx={{ color: "#0000006e" }}>
          <em>Location</em>
        </MenuItem>
        <MenuItem value={"Dist2"}>District 2</MenuItem>
        <MenuItem value={"ThuDucCity"}>Thu Duc City</MenuItem>
        <MenuItem value={"BinhDuong"}>Binh Duong provine</MenuItem>
        <MenuItem value={"Dist7"}>District 7</MenuItem>
        <MenuItem value={"HaNoi"}>Ha Noi</MenuItem>
      </Select>
      <Button
        variant="contained"
        onClick={handleSearch}
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
  );
}
