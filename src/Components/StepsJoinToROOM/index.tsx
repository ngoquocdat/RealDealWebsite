import React from "react";
import { Box, Button, Link, Typography } from "@mui/material";
import { IContext, RealDealContext } from "../context";
import NewsList from "../News/newsList";
import StepOne from "./components/stepOne";
import StepTwo from "./components/stepTwo";

import "./index.scss";

export default function StepsJoinToRoom() {
  const { joinDialog } = React.useContext<IContext>(RealDealContext);
  const [currentStep, setCurrentStep] = React.useState<number>(1);
  const [counterError, toggleErrorCounter] = React.useState<any[]>([]);

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
        />
      )}
      {currentStep === 2 && (
        <StepTwo
          changeStep={handleChangeStep}
          errors={counterError}
          setError={toggleErrorCounter}
        />
      )}
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
          news={["first", "second", "third", "fourth"]}
          joinDialogToggle={joinDialog.toggleIsOpenDialog}
        />
      </Box>
    </Box>
  );
}
