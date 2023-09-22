import React from "react";
import { Box, Button, Chip, TextField } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { AvatarGenerator } from "random-avatar-generator";
import { IContext, RealDealContext } from "../context";

import "./index.scss";
import { defaultLogin } from "../StepsJoinToROOM/datas";
import { uniq } from "../Index";

interface ISignUp {
  gotoChatRoom?: (isToChatRoom: boolean) => void;
}

export default function SignUp(props: ISignUp) {
  const generator = new AvatarGenerator();
  const { gotoChatRoom } = props;
  const { register, joinRoom } = React.useContext<IContext>(RealDealContext);

  const singUpInfo = React.useRef({
    phoneNumber: defaultLogin.phoneNumber,
    userName: defaultLogin.userName,
    userEmail: defaultLogin.userEmail,
  });

  const handleGotoChatRoom = React.useCallback(() => {
    gotoChatRoom && gotoChatRoom(true);
  }, []);

  return (
    <div className="signup-container">
      {register.isUserRegistered ? (
        <div className="user-logged-in">
          <div className="user-info">
            <b style={{ display: "inline-flex", gap: "15px" }}>
              {defaultLogin.userName}
              <NotificationsIcon />
            </b>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                paddingTop: "5px",
              }}
            >
              Phòng chat:
              {joinRoom.userJoinedRoom?.length ? (
                <Box>
                  {uniq(joinRoom.userJoinedRoom).map((r: string) => (
                    <Chip
                      label={r}
                      sx={{
                        backgroundColor: "#FBB713",
                        color: "#fff",
                        fontWeight: 600,
                      }}
                      onClick={handleGotoChatRoom}
                    />
                  ))}
                </Box>
              ) : (
                "  Chưa tham gia phòng chat"
              )}
            </Box>
          </div>
          <div
            className="avatar"
            style={{
              backgroundColor: "#D9D9D9",
              width: "60px",
              height: "60px",
              backgroundImage: generator.generateRandomAvatar(),
            }}
          />
        </div>
      ) : (
        <>
          <div className="left-wrapper">
            <TextField
              required
              id="phone-number-outlined"
              label="So dien thoai"
              size="small"
              defaultValue={defaultLogin.phoneNumber}
              onChange={(evt?: any) => {
                singUpInfo.current.phoneNumber = evt?.target.value;
              }}
            />
            <TextField
              id="user-name-required"
              label="Ten nguoi dung"
              size="small"
              defaultValue={defaultLogin.userName}
              onChange={(evt?: any) => {
                singUpInfo.current.userName = evt?.target.value;
              }}
            />
          </div>
          <div className="right-wrapper">
            <TextField
              required
              id="user-email-required"
              label="Thu dien tu"
              size="small"
              defaultValue={defaultLogin.userEmail}
              onChange={(evt?: any) => {
                singUpInfo.current.userEmail = evt?.target.value;
              }}
            />
            <div className="buttons-wrapper">
              <Button
                className="signup rd-buttons contained-button"
                variant={register.isUserRegistered ? "text" : "contained"}
                onClick={(evt?: React.MouseEvent) => {
                  const _isRegistered =
                    JSON.stringify(defaultLogin) ===
                    JSON.stringify(singUpInfo.current);
                  register.setIsUserRegistered(_isRegistered);
                }}
              >
                Đăng Ký
              </Button>
              <Button className="signin rd-buttons text-button" variant="text">
                Đăng Nhập
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
