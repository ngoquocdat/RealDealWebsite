import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import React from "react";
import { formatter, paymentInfo } from "../datas";
import { IContext, RealDealContext } from "../../context";

interface IStepTwo {
  errors: any;
  setError: (error: any) => void;
  changeStep: (stepNum: number) => void;
}

export default function StepTwo(props: IStepTwo) {
  const { errors, changeStep } = props;
  const { processJoinRoom } = React.useContext<IContext>(RealDealContext);
  const [methodSelected, setMethodSelected] = React.useState<any[]>([]);

  return (
    <Box className="content-container payment">
      <Box className="payment-info">
        {paymentInfo.map((info) => {
          return (
            <Box className="info-wrapper">
              <Typography sx={{ fontWeight: 600 }}>{info.label}</Typography>
              <Typography>
                {info.type === "currency"
                  ? `${formatter.format(info.value as any)} VND`
                  : info.value}
              </Typography>
            </Box>
          );
        })}
      </Box>
      <FormGroup className="payment-method">
        <FormControlLabel
          className="momo-payment"
          control={
            <Checkbox
              checked={methodSelected[0]?.method === "MOMO"}
              onChange={(
                evt: React.ChangeEvent<HTMLInputElement>,
                checked: boolean
              ) => {
                if (checked) {
                  setMethodSelected([{ method: "MOMO", isChecked: checked }]);
                } else {
                  setMethodSelected([]);
                }
              }}
            />
          }
          label="Thanh toán thông qua QR code momo"
        />
        <FormControlLabel
          className="bank-payment"
          control={
            <Checkbox
              checked={methodSelected[0]?.method === "BANK"}
              onChange={(
                evt: React.ChangeEvent<HTMLInputElement>,
                checked: boolean
              ) => {
                if (checked) {
                  setMethodSelected([{ method: "BANK", isChecked: checked }]);
                } else {
                  setMethodSelected([]);
                }
              }}
            />
          }
          label="Thanh toán thông qua QR code chuyển khoản"
        />
      </FormGroup>
      <Box className="buttons">
        <Button
          disabled={!(methodSelected.length > 0)}
          sx={{
            backgroundColor: `${
              methodSelected.length > 0
                ? "#FBB713"
                : "rgba(0, 0, 0, 0.12) !important"
            }`,
          }}
          className="signup rd-buttons contained-button"
          variant={"contained"}
          onClick={(evt?: React.MouseEvent) => {
            changeStep(3);
          }}
        >
          Xác nhận thanh toán
        </Button>
        <Button
          disabled={false}
          sx={{
            backgroundColor: `${
              errors?.length > 0 ? "rgba(0, 0, 0, 0.12) !important" : "#FBB713"
            }`,
          }}
          className="signup rd-buttons contained-button"
          variant={"contained"}
          onClick={(evt?: React.MouseEvent) => {
            changeStep(1);
          }}
        >
          Quay lại bước trước
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
