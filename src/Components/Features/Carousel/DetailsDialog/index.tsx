import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { Box } from "@mui/material";
import { IContext, RealDealContext } from "../../../context";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface IFulllScreenDialog {
  newsSelected: any;
}

export default function FullScreenDialog(props: IFulllScreenDialog) {
  const { newsSelected } = props;
  const { detailsDialog, joinDialog } =
    React.useContext<IContext>(RealDealContext);

  const handleClose = () => {
    detailsDialog.setIsOpenDetailsDialog(false);
  };

  return (
    <Box>
      <Dialog
        fullScreen
        open={detailsDialog.isOpenDetailsDialog}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar
          sx={{
            position: "sticky",
            backgroundColor: "#FBB713",
          }}
        >
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {newsSelected.title}
            </Typography>
            <Button
              sx={{ backgroundColor: "#fff", color: "#000", fontWeight: 700 }}
              className="join-to-room-button rd-buttons outlined-button"
              variant="outlined"
              onClick={(evt?: any) => {
                joinDialog.toggleIsOpenDialog(true);
                detailsDialog.setIsOpenDetailsDialog(false);
              }}
            >
              Tạo phòng tư vấn
            </Button>
          </Toolbar>
        </AppBar>
        <Box sx={{ padding: "10px 20px 40px 20px" }}>
          <div dangerouslySetInnerHTML={{ __html: newsSelected.content }} />
        </Box>
      </Dialog>
    </Box>
  );
}
