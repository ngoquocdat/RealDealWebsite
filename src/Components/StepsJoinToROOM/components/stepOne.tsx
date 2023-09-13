import React from "react";
import { Box, Button, Chip, TextField, Typography } from "@mui/material";
import { formatter, roomInfo } from "../datas";
import { IContext, RealDealContext } from "../../context";

interface IStepOne {
  errors: any;
  setError: (error: any) => void;
  changeStep: (stepNum: number) => void;
}

export default function StepOne(props: IStepOne) {
  const { errors, setError, changeStep } = props;
  const { processJoinRoom } = React.useContext<IContext>(RealDealContext);
  const [selectedSettingRoom, setSelectedSettingRoom] = React.useState<any>({
    totalCounter: 300,
    counter: 20,
    apartmentPrice: 13000000000,
    discount: 12,
  });

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
                    error={
                      errors.filter(
                        (error: any) => error.fieldError === "memberCounter"
                      )?.length > 0
                    }
                    sx={{ width: "50px" }}
                    label={""}
                    defaultValue={`${info.value}`}
                    size="small"
                    onChange={(evt?: any) => {
                      if (evt?.target.value <= 1) {
                        setError([
                          ...errors,
                          { isError: true, fieldError: "memberCounter" },
                        ]);
                      } else {
                        setError((errors: any) =>
                          errors.filter(
                            (error: any) =>
                              !(error.fieldError === "memberCounter")
                          )
                        );
                      }
                    }}
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
        ;
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
              defaultValue={selectedSettingRoom.counter}
              onChange={(evt?: any) => {
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
                    (evt?.target.value / selectedSettingRoom.totalCounter) *
                    evt?.target.value;
                  setError(
                    errors.filter(
                      (error: any) => !(error.fieldError === "roomCounter")
                    )
                  );
                  setSelectedSettingRoom({
                    ...selectedSettingRoom,
                    discount: (_discount / 10) * 15,
                    counter: evt?.target.value,
                  });
                }
              }}
            />
            / <Typography>{selectedSettingRoom.totalCounter}</Typography>
          </Box>
          {errors.find((error: any) => error.fieldError === "roomCounter") ? (
            <Typography sx={{ color: "red", paddingTop: "10px" }}>
              Số lượng căn hộ không vượt quá 60 căn hộ trong một Room
            </Typography>
          ) : (
            ""
          )}
        </Box>
        <Box>
          <Typography>Giá bất động sản ( tính trên đơn vị căn hộ )</Typography>
          <Typography sx={{ fontWeight: 500, fontSize: "32px" }}>
            {`${formatter.format(selectedSettingRoom.apartmentPrice)} VND`}
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
              selectedSettingRoom.apartmentPrice -
                selectedSettingRoom.apartmentPrice *
                  (selectedSettingRoom.discount / 100)
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
