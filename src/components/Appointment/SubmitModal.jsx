import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import "../../styles/SubmitModal.css";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function SubmitModal({
  isOneBoxChecked,
  formData,
  carouselIndex,
  handleProceedClick,
}) {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="SubmitModal">
      <button
        variant="outlined"
        onClick={(e) => {
          e.preventDefault();
          if (carouselIndex < 2) {
            handleProceedClick();
          } else {
            handleClickOpen();
          }
        }}
        className="submitBtn"
        disabled={isOneBoxChecked ? false : true}
      >
        {carouselIndex < 2 ? "下一步" : "完成"}
      </button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Appointments"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            您確定要送出該預約嗎？
          </DialogContentText>
          <DialogContentText id="alert-dialog-slide-description">
            日期：{formData.date.format("YYYY/MM/DD")}
          </DialogContentText>
          <DialogContentText id="alert-dialog-slide-description">
            時間：{formData.time}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>取消</Button>
          {/* associate button's submission event with form using form="appointment"  */}
          <Button
            onClick={() => {
              handleClose();
            }}
            type="submit"
            form="appointment"
          >
            送出
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
