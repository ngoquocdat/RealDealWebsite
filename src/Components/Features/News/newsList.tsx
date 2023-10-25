import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { IContext, RealDealContext, lorem } from "../../context";

interface INewsList {
  counter: string[];
  titleSize?: number;
  news: any[];
  toggleDialog: (isOn: boolean) => void;
}

export default function NewsList(props: INewsList) {
  const { titleSize, news, toggleDialog, counter } = props;
  const { selectedNews } = React.useContext<IContext>(RealDealContext);

  const returnPosText = (index: number) => {
    if (index === 0) {
      return "first";
    } else if (index === 1) {
      return "second";
    } else if (index === 2) {
      return "third";
    } else if (index === 3) {
      return "fourth";
    } else if (index === 4) {
      return "five";
    } else if (index === 5) {
      return "six";
    }
  };

  const convertDate = (date: Date) => {
    const userLocale: string =
      navigator.languages && navigator.languages.length
        ? navigator.languages[0]
        : navigator.language;
    const dateTime = date.toLocaleString("vi-VN", {
      weekday: "short",
      year: "numeric",
      month: "2-digit",
      day: "numeric",
      timeZone: "vi-VN",
    });
    return dateTime;
  };

  return (
    <div className="real-estate-news-wrapper">
      {news?.length &&
        news?.slice(0, counter?.length).map((rs, index) => (
          <div className={`news-item ${returnPosText(index)}`}>
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
              <b>Post date: </b>
              {convertDate(rs.post_date).split(" ")[0]}
              <Typography sx={{ margin: "10px 0px" }}>
                <b>Post by:</b> Nguyễn Hoài Nam
              </Typography>
              <br />
              {news[index]?.excerpt}
            </div>
            <div className="description">
              <div
                dangerouslySetInnerHTML={{
                  __html: `<p>${lorem.generateParagraphs(1)}</p>`,
                }}
              />
              <div>
                <Button
                  className="join-to-room-button rd-buttons contained-button"
                  variant="contained"
                  onClick={(evt?: any) => {
                    selectedNews?.setSelectedNews(news[index]);
                    toggleDialog(true);
                  }}
                >
                  News details
                </Button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
