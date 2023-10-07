import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { Box } from "@mui/material";
import { IContext, RealDealContext } from "../../context";
import ListRealEstate from "../../SalePage/listRealEstate";
import RealEstateItem from "../../SalePage/realEstateItem";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface IFulllScreenDialog {
  isRealestate?: boolean;
  newsSelected: any;
}

export default function FullScreenDialog(props: IFulllScreenDialog) {
  const { newsSelected, isRealestate } = props;
  const { detailsDialog, joinDialog, handleRedirect, selectedRealEstate } =
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
              <CloseIcon
                onClick={() => {
                  selectedRealEstate.setSelectedREs(null);
                }}
              />
            </IconButton>
            <Typography
              sx={{ ml: 2, flex: 1, fontWeight: 700 }}
              variant="h5"
              component="div"
            >
              {newsSelected?.title || selectedRealEstate?.selectedREs?.title}
            </Typography>
            {isRealestate ? (
              <Button
                sx={{ backgroundColor: "#fff", color: "#000", fontWeight: 700 }}
                className="join-to-room-button rd-buttons outlined-button"
                variant="outlined"
                onClick={(evt?: any) => {
                  joinDialog.toggleIsOpenDialog(true);
                  detailsDialog.setIsOpenDetailsDialog(false);
                }}
              >
                Real estate booking
              </Button>
            ) : (
              <Button
                sx={{ backgroundColor: "#fff", color: "#000", fontWeight: 700 }}
                className="join-to-room-button rd-buttons outlined-button"
                variant="outlined"
                onClick={(evt?: any) => {
                  isRealestate && joinDialog.toggleIsOpenDialog(true);
                  detailsDialog.setIsOpenDetailsDialog(false);
                  handleRedirect.setUrl("/");
                  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                  handleRedirect.redirect;
                }}
              >
                Go To Sale List
              </Button>
            )}
          </Toolbar>
        </AppBar>
        {newsSelected && (
          <Box sx={{ padding: "10px 20px 40px 20px" }}>
            <div dangerouslySetInnerHTML={{ __html: newsSelected.content }} />
          </Box>
        )}
        {/** Real estate on selected */}
        <Box>
          {selectedRealEstate.selectedREs && (
            <RealEstateItem
              realestate={selectedRealEstate?.selectedREs}
              posts={[]}
              onBooking
            />
          )}
        </Box>
        {/** Related real estate on sales */}
        <ListRealEstate length={4} />
      </Dialog>
    </Box>
  );
}
