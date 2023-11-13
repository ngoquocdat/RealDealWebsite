import React from "react";
import { Box, Button, Chip, Skeleton, TextField } from "@mui/material";
import { IContext, RealDealContext } from "../../utils/context";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import NewsList from "./newsList";
import RDSearch from "../Search";
import FullScreenDialog from "../DetailsDialog";

interface IRealNews {
  newsCounter: string[];
}

export default function RealNews(props: IRealNews) {
  const { newsCounter } = props;
  const { joinDialog, realEstatePosts, detailsDialog, selectedNews } =
    React.useContext<IContext>(RealDealContext);

  const getData = async () => {
    const response = await fetch("https://realdeal-server.azurewebsites.net/")
      .then((response) => response.json())
      .catch((error) => console.log("getData error: ", error));
    realEstatePosts.setPosts(response);
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <div className="real-estate-news">
      <div className="tools">
        <div className="searchEngine">
          <RDSearch
            handleSearchChange={function (searchStrings: any): void {
              return;
            }}
          />
        </div>
        <div className="search-keywords">
          <b>Search by key words: </b>
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
        counter={newsCounter}
        news={realEstatePosts?.posts || null}
        toggleDialog={detailsDialog?.setIsOpenDetailsDialog}
      />
      <div className="news-paging">
        {`${
          realEstatePosts?.posts
            ? `6 of ${realEstatePosts?.posts?.length}`
            : null
        }`}
        <NavigateBefore />
        <NavigateNext />
      </div>

      {detailsDialog?.isOpenDetailsDialog && selectedNews?.selectedNews && (
        <FullScreenDialog newsSelected={selectedNews?.selectedNews} />
      )}
    </div>
  );
}
