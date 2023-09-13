import React from "react";
import { Box, Button } from "@mui/material";

interface INewsList {
  titleSize?: number;
  news: string[];
  joinDialogToggle: (isOn: boolean) => void;
}

export default function NewsList(props: INewsList) {
  const { titleSize, news, joinDialogToggle } = props;

  return (
    <div className="real-estate-news-wrapper">
      {news.map((num) => (
        <div className={`news-item ${num}`}>
          <div className="image" />
          <div className="info">
            <Box
              className="title"
              sx={{ fontSize: `${titleSize || 24}px`, fontWeight: 700 }}
            >
              Bất động sản dự án thành phố Thủ đức
            </Box>
            <br />
            <b>Diện tích: </b>120 m2
            <br />
            <b>Tình trạng: </b>bàn giao hoàn chỉnh Quý 3, 2023
            <br />
          </div>
          <div className="description">
            Gần khu dân cư hiện hữu, nhiều nhu cầu tiện ích đáp ứng nhu cầu cho
            mua ở hoặc các hình thức cho thuê khác....
            <div>
              <Button
                className="join-to-room-button rd-buttons contained-button"
                variant="contained"
                onClick={(evt?: any) => {
                  joinDialogToggle(true);
                }}
              >
                Tham gia ROOM
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
