import React from "react";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Box, Typography } from "@mui/material";
import { RealDealContext } from "./context";
import ChatRoom from "./ChatRoom";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewsContainer from "./newsContainer";

import "./index.scss";
import SalesContainer from "./salesContainer";
import SignUp from "./Features/Signup";
import JoinRoomDialog from "./Features/JoinRoomDialog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SalesContainer />,
  },
  {
    path: "/news",
    element: <NewsContainer />,
  },
]);

export function uniq(a: any) {
  return a.sort().filter(function (item: any, pos: any, ary: any) {
    return !pos || item !== ary[pos - 1];
  });
}

export default function MainContainer() {
  const menuItems = [
    { title: "HOME", url: "/" },
    { title: "PROPERTY", url: "/property" },
    { title: "NEWS", url: "/news" },
    { title: "WHAT'S REALDEAL ?", url: "/about" },
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
          window.location.href = menuItem.url;
          setGotoChatRoom(false);
          setIsProcessJoinRoom(false);
        }}
      >
        {menuItem.title}
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
              <Box
                className="logo"
                component="img"
                src="https://newhome.qodeinteractive.com/wp-content/themes/newhome/assets/img/logo.svg"
              />
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
                <RouterProvider router={router} />
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
