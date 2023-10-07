import { Box, Skeleton } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import { IContext, RealDealContext, lorem } from "../../context";

export default function Carousel() {
  const [position, setPosition] = React.useState<number>(1);
  const { realEstatePosts, detailsDialog, selectedNews, selectedRealEstate } =
    React.useContext<IContext>(RealDealContext);
  const [data, setData] = React.useState<any[]>([]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setPosition((position) => {
        if (position === data?.length) {
          return (position = 1);
        } else {
          return position + 1;
        }
      });
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [data]);

  React.useEffect(() => {
    if (!data?.length) {
      setData(realEstatePosts?.posts?.slice(0, 6));
    }
  }, [realEstatePosts]);

  React.useEffect(() => {
    console.log("selected real estate: ", selectedRealEstate);
  }, [selectedRealEstate?.selectedREs]);

  const CarouselSkeletonLoader = () => {
    return (
      <Box>
        <Skeleton variant="text" sx={{ fontSize: "1rem", height: "70px" }} />
        <br />
        <Skeleton variant="rectangular" width="90%" height={80} />
        <br />
        <Skeleton variant="rounded" width={210} height={50} />
      </Box>
    );
  };

  const CarouselIndicator = () => {
    return (
      <Box sx={{ display: "inline-flex", gap: 2 }}>
        {[1, 2, 3, 4, 5, 6].map((el) => (
          <Box>
            <Skeleton
              variant="rectangular"
              width={40}
              height={12}
              sx={{ borderRadius: "10px" }}
            />
          </Box>
        ))}
      </Box>
    );
  };

  return (
    <div className="carousel">
      <div className="container">
        {data?.length ? (
          <Box
            className="carousel-layout-image"
            component="img"
            src={data.length && data[position]?.featured_image}
            sx={{ marginRight: 3, width: "300px" }}
          />
        ) : (
          <Skeleton
            variant="rectangular"
            width={300}
            height={259}
            sx={{ marginRight: 3 }}
          />
        )}
        {data
          ? data?.map((i, indx) => {
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
                    onClick={() => {
                      detailsDialog?.setIsOpenDetailsDialog(true);
                      selectedNews?.setSelectedNews(i);
                    }}
                  >
                    Details More
                  </Button>
                </Box>
              );
            })
          : CarouselSkeletonLoader()}
      </div>
      <div className="carousel-controllers">
        {data
          ? data?.map((i, indx) => {
              return (
                <Box
                  className="carousel-controller"
                  sx={{
                    backgroundColor: `${
                      ++indx === position ? "#FBB713 !important" : "#D9D9D9"
                    }`,
                    height: 12,
                    width: 40,
                    borderRadius: "10px",
                  }}
                  onClick={() => {
                    setPosition(++indx);
                  }}
                />
              );
            })
          : CarouselIndicator()}
      </div>
    </div>
  );
}
