import React from "react";
import { AboutUs } from "./Models/AboutUsModel";
import {
  Box,
  Grid,
  List,
  SxProps,
  Typography,
  alpha,
  styled,
} from "@mui/material";
import { getAboutUs, projectImages } from "Components/utils/datas";

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
  Title: styled(Typography)(({ theme }) => ({
    fontSize: "2.125rem",
  })),
  Description: styled(Typography)<{ width?: number }>(({ theme, width }) => ({
    width: `${width}%`,
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
          paddingTop: 20,
        }}
      >
        {/* Why us */}
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
              height={350}
              width={350}
              custom={{
                margin: "30px 70px 60px",
                zIndex: "100",
                position: "relative",
              }}
              imageSrc={getAboutUs[0].imageUrls[1].url}
            />
          </Grid>
          <Grid
            item
            xs={8}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              textAlign: "left",
              gap: "50px",
            }}
          >
            <AboutUsContainerStyle.Title variant="h4">
              {aboutUs[0].header}
            </AboutUsContainerStyle.Title>
            <AboutUsContainerStyle.Description variant="h5" width={70}>
              {aboutUs[0].text}
            </AboutUsContainerStyle.Description>
          </Grid>
        </Grid>
        {/* What is Real Deal */}
        <Grid container spacing={2} sx={{ paddingTop: 30, paddingBottom: 20 }}>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              maxWidth: "fit-content",
              justifyContent: "center",
            }}
          >
            {projectImages.map((project, index) => {
              return (
                <AboutUsContainerStyle.ContentImage
                  key={`projects-about-us-${project.title}`}
                  height={250}
                  width={250}
                  custom={{
                    position: "relative",
                    borderRadius: "60px",
                    border: "solid 10px #fff",
                    left: `${index > 0 ? index * -30 + "px" : "inherit"}`,
                    top: `${index % 2 === 0 ? "-60px" : "inherit"}`,
                  }}
                  imageSrc={project.url}
                />
              );
            })}
          </Grid>
          <Grid item xs={12}>
            <AboutUsContainerStyle.Description
              variant="h5"
              sx={{
                margin: "auto 10%",
                paddingTop: 10,
                textAlign: "justify",
              }}
            >
              {aboutUs[1].text}
            </AboutUsContainerStyle.Description>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ width: "80vw", margin: "auto" }}>
          {aboutUs.slice(2).map((content, index) => {
            const flexWrapper: SxProps = {
              display: "flex",
              flexDirection: index % 2 === 0 ? "row-reverse" : "inherit",
              padding: "10px 0px",
            };
            return (
              <Box sx={flexWrapper}>
                <Grid item xs={4} sx={{ position: "relative" }}>
                  <AboutUsContainerStyle.ContentImage
                    height={350}
                    width={350}
                    custom={{
                      borderRadius: "50%",
                      margin: "30px 70px 60px",
                      zIndex: "100",
                      position: "relative",
                    }}
                    imageSrc={getAboutUs[0].imageUrls[1].url}
                  />
                </Grid>
                <Grid
                  item
                  xs={8}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    textAlign: "left",
                    gap: "50px",
                  }}
                >
                  <AboutUsContainerStyle.Title variant="h4">
                    {content.header}
                  </AboutUsContainerStyle.Title>
                  <AboutUsContainerStyle.Description
                    variant="h6"
                    width={70}
                    sx={{ whiteSpaceCollapse: "preserve-breaks" }}
                  >
                    {content.text}
                  </AboutUsContainerStyle.Description>
                </Grid>
                ;
              </Box>
            );
          })}
        </Grid>
      </List>
    </Box>
  );
}
