import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import { LoremIpsum } from "lorem-ipsum";
import React from "react";
import { IContext, RealDealContext } from "../../context";

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
  const [position, setPosition] = React.useState<number>(2);
  const { realEstatePosts } = React.useContext<IContext>(RealDealContext);
  const [data, setData] = React.useState<any[]>([]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setPosition((position) => {
        if (position === data.length) {
          return (position = 2);
        } else {
          return position + 1;
        }
      });
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  React.useEffect(() => {
    console.log("realEstatePosts: ", realEstatePosts.posts?.slice(0, 6));
    setData(realEstatePosts.posts?.slice(0, 6));
  }, [realEstatePosts.posts]);

  return (
    <div className="carousel">
      <div className="container">
        <div className="carousel-layout-image" />
        {data?.map((i, indx) => {
          return (
            <Box
              className="carousel-layout-content"
              sx={{ display: `${++indx === position ? "block" : "none"}` }}
            >
              <b className="content-title">{i.title}</b>
              <p className="content-values">
                {i.excerpt}
                <br />
                <br />
                {lorem.generateParagraphs(3)}
              </p>

              <Button
                className="join-to-room-button rd-buttons contained-button"
                variant="contained"
              >
                Xem Chi Tiết
              </Button>
            </Box>
          );
        }) || null}
      </div>
      <div className="carousel-controllers">
        {data?.map((i, indx) => {
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
