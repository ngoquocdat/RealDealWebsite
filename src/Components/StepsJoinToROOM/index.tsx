import React from "react";
import { Box, Button, Link, Typography } from "@mui/material";
import { IContext, RealDealContext } from "../context";
import NewsList from "../Features/News/newsList";
import StepOne from "./components/stepOne";
import StepTwo from "./components/stepTwo";

import "./index.scss";
import StepThree from "./components/stepThree";
import StepFourth from "./components/stepFourth";

export interface ISettings {
  totalCounter: number;
  counter: number;
  apartmentPrice: number;
  discount: number;
}
export interface ISettingsRoom {
  settings: ISettings;
  setSettings: React.Dispatch<any>;
}

interface IStepjoinRoom {
  redirectToChatRoom: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function StepsJoinToRoom(props: IStepjoinRoom) {
  const { redirectToChatRoom } = props;
  const { joinDialog, realEstatePosts } =
    React.useContext<IContext>(RealDealContext);
  const [currentStep, setCurrentStep] = React.useState<number>(1);
  const [counterError, toggleErrorCounter] = React.useState<any[]>([]);
  const [selectedSettingRoom, setSelectedSettingRoom] = React.useState<any>({
    totalCounter: 300,
    counter: 20,
    apartmentPrice: 13000000000,
    discount: 12,
  });

  const handleChangeStep = (stepNum: number) => {
    setCurrentStep(stepNum);
  };

  const renderStepTabs = () => {
    return (
      <Box className="steps">
        {[
          "Xác nhận thông tin",
          "Hình thức thanh toán",
          "Quét mã QR",
          "Xác nhận thanh toán",
        ].map((step: string, indx: number) => {
          return (
            <Box
              key={`step-${step}-${indx}`}
              className={`step-${indx} process-to-room ${
                ++indx === currentStep ? "active" : ""
              }`}
              sx={{}}
            >
              <Typography fontWeight={600}>{step}</Typography>
            </Box>
          );
        })}
      </Box>
    );
  };

  return (
    <Box className="steps-wrapper">
      {renderStepTabs()}
      {currentStep === 1 && (
        <StepOne
          changeStep={handleChangeStep}
          errors={counterError}
          setError={toggleErrorCounter}
          settingsRoom={{
            settings: selectedSettingRoom,
            setSettings: setSelectedSettingRoom,
          }}
        />
      )}
      {currentStep === 2 && (
        <StepTwo
          changeStep={handleChangeStep}
          errors={counterError}
          setError={toggleErrorCounter}
          settings={selectedSettingRoom}
        />
      )}
      {currentStep === 3 && <StepThree changeStep={handleChangeStep} />}
      {currentStep === 4 && <StepFourth toChatRoom={redirectToChatRoom} />}
      <Box className="selected-project">
        <div className={`news-item`}>
          <Box className="image" sx={{ margin: "0px 20px" }} />
          <div className="info">
            <Box className="title" sx={{ fontSize: `20px`, fontWeight: 700 }}>
              Bất động sản dự án thành phố Thủ đức
            </Box>
            <br />
            <b>Diện tích: </b>120 m2
            <br />
            <b>Tình trạng: </b>bàn giao hoàn chỉnh Quý 3, 2023
            <br />
          </div>
          <div className="description">
            <Typography sx={{ padding: "20px 0px" }}>
              Gần khu dân cư hiện hữu, nhiều nhu cầu tiện ích đáp ứng nhu cầu
              cho mua ở hoặc các hình thức cho thuê khác. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Nam sed egestas sapien. Donec
              et maximus velit. Quisque laoreet sem vitae nulla molestie, non
              viverra tellus imperdiet. Mauris suscipit, mi non aliquam posuere,
              lorem risus congue metus, eget vehicula lorem arcu a felis.
            </Typography>
            <div>
              <Button
                className="join-to-room-button rd-buttons contained-button"
                variant="contained"
                onClick={(evt?: any) => {
                  return null;
                }}
              >
                Dự Toán Khoản Vay
              </Button>
              <Link
                sx={{ fontWeight: 600, fontSize: "18px", paddingLeft: "20px" }}
                component="button"
                variant="body2"
                onClick={() => {
                  return null;
                }}
              >
                Thông tin chi tiết
              </Link>
            </div>
          </div>
        </div>
      </Box>
      <hr
        style={{
          textAlign: "left",
          marginLeft: 0,
          border: "1px solid rgba(0, 0, 0, 0.25)",
        }}
      />
      <Box className="similar-projects">
        <Typography sx={{ fontWeight: "700", fontSize: "24px" }}>
          Các dự án có thể bạn quan tâm:{" "}
        </Typography>
        <NewsList
          titleSize={20}
          counter={["first", "second", "third", "fourth"]}
          news={realEstatePosts.posts?.slice(0, 6) || null}
          toggleDialog={joinDialog.toggleIsOpenDialog}
        />
      </Box>
    </Box>
  );
}
