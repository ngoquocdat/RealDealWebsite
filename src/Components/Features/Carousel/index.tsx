import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import { IContext, RealDealContext, lorem } from "../../context";

export default function Carousel() {
  const [position, setPosition] = React.useState<number>(2);
  const { realEstatePosts } = React.useContext<IContext>(RealDealContext);
  const [data, setData] = React.useState<any[]>([]);

  React.useEffect(() => {
    console.log("realEstatePosts: ", realEstatePosts);
  });

  React.useEffect(() => {
    const interval = setInterval(() => {
      setPosition((position) => {
        if (position === data?.length) {
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
    console.log("realEstatePosts: ", realEstatePosts?.posts?.slice(0, 6));
    setData(realEstatePosts?.posts?.slice(0, 6));
  }, [realEstatePosts]);

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
