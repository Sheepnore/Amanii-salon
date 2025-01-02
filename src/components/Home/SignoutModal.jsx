import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import "../../styles/SignoutModal.css";
import { auth } from "../../config/firebase";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function SignoutModal() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="SignoutModal">
      <button
        onClick={(e) => {
          e.preventDefault();
          handleClickOpen();
        }}
        className="signoutBtn"
      >
        登出
      </button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>會員登出</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            您確定要登出嗎？
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>取消</Button>
          <Button
            onClick={(e) => {
              e.preventDefault();
              auth.signOut().then(() => {
                console.log("user signout");
              });
              handleClose();
            }}
          >
            確認
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
