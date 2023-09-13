import React from "react";
import { Button, Chip, TextField } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { AvatarGenerator } from "random-avatar-generator";
import { IContext, RealDealContext } from "../context";

import "./index.scss";
import { defaultLogin } from "../StepsJoinToROOM/datas";

export default function SignUp() {
  const generator = new AvatarGenerator();
  const { register, joinRoom } = React.useContext<IContext>(RealDealContext);

  //   console.log("Avatar: ", generator.generateRandomAvatar());
  const singUpInfo = React.useRef({
    phoneNumber: defaultLogin.phoneNumber,
    userName: defaultLogin.userName,
    userEmail: defaultLogin.userEmail,
  });

  return (
    <div className="signup-container">
      {register.isUserRegistered ? (
        <div className="user-logged-in">
          <div className="user-info">
            <b style={{ display: "inline-flex", gap: "15px" }}>
              {defaultLogin.userName}
              <NotificationsIcon />
            </b>
            <p>
              Phòng chat:
              {joinRoom.isUserJoinedRoom ? (
                <>
                  {joinRoom.rooms.map((r: string) => (
                    <Chip label={r} />
                  ))}
                </>
              ) : (
                "  Chưa tham gia phòng chat"
              )}
            </p>
          </div>
          <div
            className="avatar"
            style={{
              backgroundColor: "#D9D9D9",
              width: "52px",
              height: "52px",
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
                Dang ky
              </Button>
              <Button className="signin rd-buttons text-button" variant="text">
                Dang nhap
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
