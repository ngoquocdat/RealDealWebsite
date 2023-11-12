import React from "react";
import { AboutUs } from "./Models/AboutUsModel";
import { Box, ImageListItem, List, ListItem, ListItemText, Typography } from "@mui/material";
import { getAboutUs } from "Components/datas";

interface AboutUsContainerProps
{
}

export default function AboutUsContainer()
{
    const aboutUs: AboutUs[] = getAboutUs;

    return(
        <Box sx=
            {{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#d9d9d9",
                padding: "20px",
                margin: "auto",
            }}>
            <List sx={{
                        display: "grid",
                    }}>
                {aboutUs.slice(0).map((data, index) => (
                    <ListItem key={index} 
                            sx={{ 
                                    display: "flex",
                                    flexDirection: index % 2 === 0 ? "row-reverse" : "row", 
                                }}>
                        <Box sx={{
                                    backgroundColor: "#ffffff",
                                    padding: "10px",
                                    margin: "10px",
                                    height: "200px",
                                    width: "1000px",
                                }}>  
                            <ImageListItem key={index}
                                        sx={{
                                                backgroundColor: "#ffffff",
                                                padding: "10px",
                                                margin: "10px",
                                            }}>
                                {data.imageUrls && data.imageUrls.map((image, imageIndex) => (
                                    <img key={`${index}-${imageIndex}`} src={image.url} alt={image.name} style={{width: '100%'}} />
                                ))}
                            </ImageListItem>
                        </Box>
                        <Box sx=
                                {{
                                    backgroundColor: "#ffffff",
                                    padding: "10px",
                                    margin: "10px"
                                }}>
                            {data.header &&
                            <Typography variant="h1" sx={{ fontSize: "40px", margin: "12px"}}>
                                {data.header}
                            </Typography>}
                            <Typography variant="h2" sx={{ fontSize: "30px", margin: "6px" }}>
                                {data.title}
                            </Typography>
                            <ListItemText primary={data.text} sx={{ fontSize: "20px", margin: "0px 16px 0px 16px" }}/>
                        </Box>
                    </ListItem>        
                ))}
            </List>
        </Box>
    );
}