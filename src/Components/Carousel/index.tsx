import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import { LoremIpsum } from "lorem-ipsum";
import React from "react";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

const carousels = [
  {
    title: "Thông tin dự án bất động sản CityLAnd",
    content: lorem.generateParagraphs(2),
  },
  {
    title: "Tin bất động sản tiềm năng đang được quan tâm nhiều",
    content: lorem.generateParagraphs(5),
  },
  {
    title: "Dưa án chung cư cao cấp mới quận 9",
    content: lorem.generateParagraphs(3),
  },
  {
    title: "View sông với hệ thống căn hộ - nhà phố CurlViewLand",
    content: lorem.generateParagraphs(4),
  },
  {
    title: "Mở bán block CTY1 dưa án tiềm năng Thủ Đức",
    content: lorem.generateParagraphs(2),
  },
];

export default function Carousel() {
  const [position, setPosition] = React.useState<number>(1);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setPosition((position) => {
        if (position === carousels.length) {
          return (position = 1);
        } else {
          return position + 1;
        }
      });
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="carousel">
      <div className="container">
        <div className="carousel-layout-image" />
        {carousels.map((i, indx) => {
          return (
            <Box
              className="carousel-layout-content"
              sx={{ display: `${++indx === position ? "block" : "none"}` }}
            >
              <b className="content-title">{i.title}</b>
              <p className="content-values">{i.content}</p>
              <Button
                className="join-to-room-button rd-buttons contained-button"
                variant="contained"
              >
                Xem Chi Tiết
              </Button>
            </Box>
          );
        })}
      </div>
      <div className="carousel-controllers">
        {carousels.map((i, indx) => {
          return (
            <Box
              className="carousel-controller"
              sx={{
                backgroundColor: `${
                  ++indx === position ? "#FBB713 !important" : "#D9D9D9"
                }`,
              }}
              onClick={() => {
                setPosition(++indx);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
