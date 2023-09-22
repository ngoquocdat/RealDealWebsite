import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { IContext, RealDealContext } from "../../context";

interface IStepFourth {
  toChatRoom: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function StepFourth(props: IStepFourth) {
  const roomCode = "TDA_ConsultantNHA_2023";
  const { toChatRoom } = props;
  const { processJoinRoom, joinRoom } =
    React.useContext<IContext>(RealDealContext);

  React.useEffect(() => {
    joinRoom.setUserJoinedRoom((joinedRoom: any[]) => {
      return [...joinedRoom, roomCode];
    });
  }, []);

  return (
    <Box className="content-container">
      <Box
        component="img"
        src="https://cdn3d.iconscout.com/3d/free/thumb/free-businessman-with-huge-investment-profit-8838907-7269686.png"
        sx={{ width: "300px", height: "300px", gridColumn: "1/2" }}
      />
      <Box sx={{ gridColumn: "2/6", padding: "20px 80px" }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: 600, paddingBottom: "50px" }}
        >
          Thanh toán thành công
        </Typography>
        <Typography sx={{ paddingBottom: "50px" }}>
          Bạn đã tham gia thành công dự án mua căn hộ{" "}
          <b>Dự án thành phố Thủ đức A</b> , mời bạn vào phòng tư vấn để tư vấn
          viên hỗ trợ cho bạn chi tiết thông tin về bất động sản
        </Typography>
        <Box
          sx={{
            gridColumn: "1/6",
            paddingTop: "20px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <Button
            className="signup rd-buttons contained-button"
            variant={"contained"}
            onClick={() => toChatRoom(true)}
          >
            Đi tới phòng tư vấn
          </Button>
          <Button
            className="signin rd-buttons contained-button"
            variant="contained"
            onClick={() => processJoinRoom.setIsProcessJoinRoom(false)}
          >
            Trang tin tức RealDeal
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
