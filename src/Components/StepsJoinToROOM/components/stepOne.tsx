import React from "react";
import { Box, Button, Chip, TextField, Typography } from "@mui/material";
import { formatter, roomInfo } from "../datas";
import { IContext, RealDealContext } from "../../context";
import { ISettingsRoom } from "..";

interface IStepOne {
  errors: any;
  settingsRoom: ISettingsRoom;
  setError: (error: any) => void;
  changeStep: (stepNum: number) => void;
}

export default function StepOne(props: IStepOne) {
  const { errors, settingsRoom, setError, changeStep } = props;
  const { processJoinRoom } = React.useContext<IContext>(RealDealContext);
  const [memberCount, setMemberCount] = React.useState<number>(
    settingsRoom.settings.counter
  );

  return (
    <Box className="content-container">
      <Box className="contents">
        <Box className="room-info">
          {roomInfo.map((info) => {
            let _value: any = info.value;

            if (info.type === "chip") {
              _value = (info.value as string[]).map((val: string) => {
                return <Chip label={val} sx={{ marginRight: "10px" }} />;
              });
            }

            return (
              <Box className="info">
                {info.label && (
                  <Typography sx={{ fontWeight: 600 }}>
                    {`${info.label}:`}
                  </Typography>
                )}
                {info.type === "editText" ? (
                  <TextField
                    disabled
                    error={
                      errors.filter(
                        (error: any) => error.fieldError === "memberCounter"
                      )?.length > 0
                    }
                    sx={{ width: "50px" }}
                    label={""}
                    defaultValue={`${memberCount}`}
                    size="small"
                    value={memberCount}
                    // onChange={(evt?: any) => {
                    //   if (evt?.target.value <= 1) {
                    //     setError([
                    //       ...errors,
                    //       { isError: true, fieldError: "memberCounter" },
                    //     ]);
                    //   } else {
                    //     setError((errors: any) =>
                    //       errors.filter(
                    //         (error: any) =>
                    //           !(error.fieldError === "memberCounter")
                    //       )
                    //     );
                    //   }
                    // }}
                  />
                ) : (
                  <Typography>{_value}</Typography>
                )}
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box className="real-estate-image">
        {[1, 2, 3].map((box) => (
          <Box />
        ))}
      </Box>
      <Box className="room-settings">
        <Box className="room-counter">
          <Typography
            sx={{
              textAlign: "initial",
              paddingBottom: "15px",
              fontWeight: 600,
            }}
          >
            Chọn số lượng căn hộ để tạo ROOM
          </Typography>
          <Box className="select-room">
            <TextField
              error={
                errors.filter(
                  (error: any) => error.fieldError === "roomCounter"
                )?.length > 0
              }
              required
              id="phone-number-outlined"
              label="Số lượng căn hộ: "
              size="small"
              defaultValue={settingsRoom.settings.counter}
              onChange={(evt?: any) => {
                setMemberCount(evt?.target.value);
                if (evt?.target.value > 60 || !evt?.target.value) {
                  setError([
                    ...errors,
                    {
                      isError: true,
                      fieldError: "roomCounter",
                    },
                  ]);
                } else {
                  const _discount =
                    (evt?.target.value / settingsRoom.settings.totalCounter) *
                    evt?.target.value;
                  setError(
                    errors.filter(
                      (error: any) => !(error.fieldError === "roomCounter")
                    )
                  );
                  settingsRoom.setSettings({
                    ...settingsRoom.settings,
                    discount: (_discount / 10) * 15,
                    counter: Number(evt?.target.value),
                  });
                }
              }}
            />
            / <Typography>{settingsRoom.settings.totalCounter}</Typography>
          </Box>
          {errors.find((error: any) => error.fieldError === "roomCounter") ? (
            <Typography sx={{ color: "red", paddingTop: "10px" }}>
              Dự án chỉ được đăng ký tối đa 60 căn ( sản phẩm bất động sản ) cho
              một phòng tư vấn.
            </Typography>
          ) : (
            ""
          )}
        </Box>
        <Box>
          <Typography>Giá bất động sản ( tính trên đơn vị căn hộ )</Typography>
          <Typography sx={{ fontWeight: 500, fontSize: "32px" }}>
            {`${formatter.format(settingsRoom.settings.apartmentPrice)} VND`}
          </Typography>
        </Box>
        <Box>
          <Typography>
            Giá bất động sản đã chiết khấu ( tính trên đơn vị căn hộ )
          </Typography>
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: "32px",
              color: "#FBB713",
              textDecoration: `${errors?.length > 0 ? "line-through" : "auto"}`,
            }}
          >
            {`${formatter.format(
              settingsRoom.settings.apartmentPrice -
                settingsRoom.settings.apartmentPrice *
                  (settingsRoom.settings.discount / 100)
            )} VND`}
          </Typography>
        </Box>
      </Box>
      <Box className="buttons">
        <Button
          disabled={errors?.length > 0}
          sx={{
            backgroundColor: `${
              errors?.length > 0 ? "rgba(0, 0, 0, 0.12) !important" : "#FBB713"
            }`,
          }}
          className="signup rd-buttons contained-button"
          variant={"contained"}
          onClick={(evt?: React.MouseEvent) => {
            changeStep(2);
          }}
        >
          Tiếp tục tạo ROOM
        </Button>
        <Button
          className="signin rd-buttons text-button"
          variant="text"
          onClick={(evt?: React.MouseEvent) => {
            processJoinRoom.setIsProcessJoinRoom(false);
          }}
        >
          Hủy và quay lại trang tin
        </Button>
      </Box>
    </Box>
  );
}
