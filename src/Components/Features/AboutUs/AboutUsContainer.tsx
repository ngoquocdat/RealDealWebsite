import React from "react";
import { AboutUs } from "./Models/AboutUsModel";
import {
  Box,
  Grid,
  ImageListItem,
  List,
  ListItem,
  ListItemText,
  Typography,
  alpha,
  styled,
} from "@mui/material";
import { getAboutUs } from "Components/utils/datas";

interface AboutUsContainerProps {}

const AboutUsContainerStyle = {
  ImageWrapper: styled(Box)<{ width?: number; custom?: any }>(
    ({ theme, width, custom }) => ({
      ...custom,
      backgroundColor: alpha("#ffcc41", 0.3),
      padding: theme.spacing(10, 5, 4, 10),
      width: width ? width : "fit-content",
      position: "absolute",
    })
  ),
  ContentImage: styled(Box)<{
    imageSrc: string;
    custom?: any;
  }>(({ theme, imageSrc, custom }) => ({
    ...custom,
    backgroundImage: `url(${imageSrc})`,
    backgroundSize: "cover",
  })),
};
export default function AboutUsContainer(props: AboutUsContainerProps) {
  const aboutUs: AboutUs[] = getAboutUs;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        margin: "auto",
      }}
    >
      <List
        sx={{
          display: "grid",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={4} sx={{ position: "relative" }}>
            <AboutUsContainerStyle.ImageWrapper
              height={350}
              width={200}
              custom={{
                borderRadius: "0px 0px 0px 100px",
              }}
            />
            <AboutUsContainerStyle.ContentImage
              height={300}
              width={300}
              custom={{
                margin: "90px",
                zIndex: "100",
                position: "relative",
              }}
              imageSrc={getAboutUs[0].imageUrls[1].url}
            />
          </Grid>
          <Grid item xs={8}>
            <Box>{getAboutUs[0].header}</Box>
            <Box>{getAboutUs[0].text}</Box>
          </Grid>
        </Grid>
        {/* {aboutUs.slice(0).map((data, index) => (
          <ListItem
            key={index}
            sx={{
              display: "flex",
              flexDirection: index % 2 === 0 ? "row-reverse" : "row",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#ffffff",
                padding: "10px",
                margin: "10px",
                height: "200px",
                width: "1000px",
              }}
            >
              <ImageListItem
                key={index}
                sx={{
                  backgroundColor: "#ffffff",
                  padding: "10px",
                  margin: "10px",
                }}
              >
                {data.imageUrls &&
                  data.imageUrls.map((image, imageIndex) => (
                    <img
                      key={`${index}-${imageIndex}`}
                      src={image.url}
                      alt={image.name}
                      style={{ width: "100%" }}
                    />
                  ))}
              </ImageListItem>
            </Box>
            <Box
              sx={{
                backgroundColor: "#ffffff",
                padding: "10px",
                margin: "10px",
              }}
            >
              {data.header && (
                <Typography
                  variant="h1"
                  sx={{ fontSize: "40px", margin: "12px" }}
                >
                  {data.header}
                </Typography>
              )}
              <Typography variant="h2" sx={{ fontSize: "30px", margin: "6px" }}>
                {data.title}
              </Typography>
              <ListItemText
                primary={data.text}
                sx={{ fontSize: "20px", margin: "0px 16px 0px 16px" }}
              />
            </Box>
          </ListItem>
        ))} */}
      </List>
    </Box>
  );
}
