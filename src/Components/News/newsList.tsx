import React from "react";
import { Box, Button } from "@mui/material";
import { IContext, RealDealContext } from "../context";

interface INewsList {
  counter: string[];
  titleSize?: number;
  news: any[];
  toggleDialog: (isOn: boolean) => void;
}

export default function NewsList(props: INewsList) {
  const { titleSize, news, toggleDialog, counter } = props;
  const { selectedNews } = React.useContext<IContext>(RealDealContext);

  return (
    <div className="real-estate-news-wrapper">
      {counter.map((num, index) => (
        <div className={`news-item ${num}`}>
          <Box
            className="image"
            component="img"
            src={news[index]?.featured_image}
          />
          <div className="info">
            <Box
              className="title"
              sx={{ fontSize: `${titleSize || 24}px`, fontWeight: 700 }}
            >
              {news[index]?.title}
            </Box>
            <br />
            <b>Diện tích: </b>120 m2
            <br />
            <b>Tình trạng: </b>bàn giao hoàn chỉnh Quý 3, 2023
            <br />
          </div>
          <div className="description">
            {news[index]?.excerpt}
            <div>
              <Button
                className="join-to-room-button rd-buttons contained-button"
                variant="contained"
                onClick={(evt?: any) => {
                  selectedNews.setSelectedNews(news[index]);
                  toggleDialog(true);
                }}
              >
                Xem chi tiết tin tức
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
