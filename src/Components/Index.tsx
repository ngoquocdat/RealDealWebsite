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
import ChatRoom from "./ChatRoom";

export function uniq(a: any) {
  return a.sort().filter(function (item: any, pos: any, ary: any) {
    return !pos || item !== ary[pos - 1];
  });
}

export default function MainContainer() {
  const menuItems = [
    "Tin tức",
    "Đất nền",
    "Dự án chung cư",
    "Nhà phố",
    "RealDeal là gì ?",
  ];
  const [isRegistered, setIsRegistered] = React.useState<boolean>(false);
  const [joinedRoom, setjoinedRoom] = React.useState<any[]>([]);
  const [isOpenJoinDialog, setIsOpenDialog] = React.useState<boolean>(false);
  const [gotoChatRoom, setGotoChatRoom] = React.useState<boolean>(false);
  const [isProcessJoinRoom, setIsProcessJoinRoom] =
    React.useState<boolean>(false);

  const contextObj: any = {
    register: {
      isUserRegistered: isRegistered,
      setIsUserRegistered: setIsRegistered,
    },
    joinRoom: {
      userJoinedRoom: joinedRoom,
      setUserJoinedRoom: setjoinedRoom,
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

  React.useEffect(() => {
    if (gotoChatRoom) {
      setIsRegistered(true);
      setjoinedRoom(["TDA_ConsultantNHA_2023"]);
    }
  }, [gotoChatRoom, setGotoChatRoom]);

  const renderMenuItems = () => {
    return menuItems.map((menuItem) => (
      <li
        key={`key-${menuItem}`}
        onClick={() => {
          setGotoChatRoom(false);
          setIsProcessJoinRoom(false);
        }}
      >
        {menuItem}
      </li>
    ));
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
                <SignUp gotoChatRoom={setGotoChatRoom} />
              </div>
            </header>

            {gotoChatRoom ? (
              <div className="chatRoom">
                <ChatRoom />
              </div>
            ) : (
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
                  <StepsJoinToRoom redirectToChatRoom={setGotoChatRoom} />
                )}
                <div className="contacts">
                  <Typography>
                    <b>Thông tin liên hệ, địa chỉ</b>
                  </Typography>
                </div>
              </div>
            )}
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
