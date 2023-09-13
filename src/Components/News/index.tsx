import React from "react";
import { Button, Chip, TextField } from "@mui/material";
import { IContext, RealDealContext } from "../context";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import NewsList from "./newsList";

interface IRealNews {
  //["first", "second", "third", "fourth", "five", "six"]
  newsCounter: string[];
}

export default function RealNews(props: IRealNews) {
  const { newsCounter } = props;
  const { joinDialog } = React.useContext<IContext>(RealDealContext);
  return (
    <div className="real-estate-news">
      <div className="tools">
        <div className="searchEngine">
          <Button
            className="join-to-room-button rd-buttons contained-button"
            variant="contained"
          >
            Search
          </Button>
          <TextField
            id="filled-search"
            label="Search real estate"
            type="search"
            variant="filled"
            size="small"
          />
        </div>
        <div className="search-keywords">
          <b>Tìm kiếm từ khóa: </b>
          <div className="chip-keywords">
            {[
              "đất rẻ",
              "bán đất gần metro quận 2",
              "đất lâm nghiệp",
              "Bán đất giá rẻ Quận 8",
              "bán đất gần sông",
            ].map((chip) => (
              <Chip className="chip-search" label={chip} />
            ))}
          </div>
        </div>
      </div>
      <NewsList
        news={newsCounter}
        joinDialogToggle={joinDialog.toggleIsOpenDialog}
      />
      <div className="news-paging">
        6 of 120 <NavigateBefore />
        <NavigateNext />
      </div>
    </div>
  );
}
