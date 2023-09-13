import React from "react";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import "./index.scss";
import { Box, Typography } from "@mui/material";
import SignUp from "./Signup";

import RealNews from "./News";
import JoinRoomDialog from "./JoinRoomDialog";
import RealEstateRegions from "./RealEstateRegions";
import Carousel from "./Carousel";
import StepsJoinToRoom from "./StepsJoinToROOM";
import { RealDealContext } from "./context";

export default function MainContainer() {
  const menuItems = [
    "Tin tức",
    "Đất nền",
    "Dự án chung cư",
    "Nhà phố",
    "RealDeal là gì ?",
  ];
  const renderMenuItems = () => {
    return menuItems.map((menuItem) => (
      <li key={`key-${menuItem}`}>{menuItem}</li>
    ));
  };

  const [isRegistered, setIsRegistered] = React.useState<boolean>(false);
  const [isJoinedRoom, setIsJoinedRoom] = React.useState<boolean>(false);
  const [isOpenJoinDialog, setIsOpenDialog] = React.useState<boolean>(false);
  const [isProcessJoinRoom, setIsProcessJoinRoom] =
    React.useState<boolean>(false);

  const contextObj: any = {
    register: {
      isUserRegistered: isRegistered,
      setIsUserRegistered: setIsRegistered,
    },
    joinRoom: {
      isUserJoinedRoom: isJoinedRoom,
      setIsUserJoinedRoom: setIsJoinedRoom,
    },
    joinDialog: {
      isOpenJoinDialog: isOpenJoinDialog,
      toggleIsOpenDialog: setIsOpenDialog,
    },
    processJoinRoom: {
      isProcessJoinRoom: isProcessJoinRoom,
      setIsProcessJoinRoom: setIsProcessJoinRoom,
    },
  };

  return (
    <RealDealContext.Provider value={contextObj}>
      <div className={`realdeal-main-container`}>
        <div className="grid">
          <article>
            <header className="header">
              {/** RealDeal logo */}
              <div className="logo">
                <b>RealDeal</b>
              </div>
              {/** Main menu */}
              <div className="mainMenu-container">
                <div className="mainMenu">
                  <ul>{renderMenuItems()}</ul>
                  {/** Functions header */}
                  <div className="functions-header">
                    <FavoriteBorderIcon />
                    <GTranslateIcon />
                  </div>
                </div>
                {/** Sign up zone */}
                <SignUp />
              </div>
            </header>
            <div className="contents">
              {/** CAROUSEL */}
              <Carousel />
              {!isProcessJoinRoom ? (
                <Box>
                  {/** REAL ESTATE REGIONS */}
                  <RealEstateRegions />
                  {/** SEARCH - NEWS */}
                  <RealNews
                    newsCounter={[
                      "first",
                      "second",
                      "third",
                      "fourth",
                      "five",
                      "six",
                    ]}
                  />
                </Box>
              ) : (
                <StepsJoinToRoom />
              )}
              <div className="contacts">
                <Typography>
                  <b>Thông tin liên hệ, địa chỉ</b>
                </Typography>
              </div>
            </div>
          </article>
        </div>
      </div>
      {isOpenJoinDialog && (
        <JoinRoomDialog
          open={isOpenJoinDialog}
          selectedValue={""}
          onClose={() => {
            setIsOpenDialog(false);
          }}
        />
      )}
    </RealDealContext.Provider>
  );
}
