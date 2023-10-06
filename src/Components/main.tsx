import React from "react";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Box, Typography } from "@mui/material";
import { RealDealContext } from "./context";
import ChatRoom from "./ChatRoom";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewsContainer from "./Features/News/newsContainer";

import "./index.scss";
import SalesContainer from "./SalePage/salesContainer";
import SignUp from "./Features/Signup";
import JoinRoomDialog from "./Features/JoinRoomDialog";
import { SolarPower } from "@mui/icons-material";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <SalesContainer />,
//   },
//   {
//     path: "/demo",
//     element: <div>Demo page</div>,
//   },
//   {
//     path: "/news",
//     element: <NewsContainer />,
//   },
//   {
//     path: "/chat",
//     element: <ChatRoom />,
//   },
// ]);

export function uniq(a: any) {
  return a.sort().filter(function (item: any, pos: any, ary: any) {
    return !pos || item !== ary[pos - 1];
  });
}

export const getPrice = (num: number) => {
  const units = ["million", "billion", "T", "Q"];
  const unit = Math.floor((num / 1.0e1).toFixed(0).toString().length);
  const r = unit % 3;
  const x =
    Math.abs(Number(num)) / (Number("1.0e+" + (unit - r)).toFixed(2) as any);
  return x.toFixed(2) + " " + units[Math.floor(unit / 3) - 2] + " VND";
};

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
  const [realEstatePosts, setRealEstatePosts] = React.useState<any>(null);
  const [redirectUrl, setRedirectURl] = React.useState<string>("/");
  const [renderContent, setRenderContent] = React.useState<JSX.Element | null>(
    null
  );
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
    realEstatePosts: {
      posts: realEstatePosts,
      setPosts: setRealEstatePosts,
    },
  };

  React.useEffect(() => {
    if (gotoChatRoom) {
      setIsRegistered(true);
      setjoinedRoom(["TDA_ConsultantNHA_2023"]);
    }
  }, [gotoChatRoom, setGotoChatRoom]);

  React.useEffect(() => {
    if (window.location.pathname !== redirectUrl) {
      const newUrl = window.location.origin + redirectUrl;
      window.history.replaceState(undefined, "RealDeal", newUrl);
      handleRenderContent();
    }
  }, [redirectUrl, setRedirectURl]);

  const handleRenderContent = () => {
    let redirectComp = renderContent;
    if (window.location.pathname === "/news") {
      redirectComp = <NewsContainer />;
    } else if (window.location.pathname === "/chat") {
      redirectComp = <div>Chat Room</div>;
    } else if (window.location.pathname === "/about") {
      redirectComp = <div>About Us</div>;
    } else if (window.location.pathname === "/property") {
      redirectComp = <div>Property</div>;
    } else if (window.location.pathname === "/") {
      redirectComp = <SalesContainer />;
    }
    setRenderContent(redirectComp);
  };

  React.useEffect(() => {
    handleRenderContent();
  }, []);

  const renderMenuItems = () => {
    return menuItems.map((menuItem) => (
      <li
        key={`key-${menuItem}`}
        onClick={() => {
          // window.location.href = menuItem.url;
          setRedirectURl(menuItem.url);
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
                {renderContent}
                {/* <RouterProvider router={router} /> */}
                <div className="contacts">
                  <Typography>
                    <b>Address and Contact information</b>
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
