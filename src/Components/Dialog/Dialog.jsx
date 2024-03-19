import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const DialogComponent = (props) => {
  const {
    buttonTitle,
    buttonVariant,
    dialogTitle,
    dialogContentText,
    buttons,
  } = props;

  const [openDialog, setOpenDialog] = useState(false);

  return (
    <>
      <Button variant={buttonVariant} onClick={() => setOpenDialog(true)}>
        {buttonTitle}
      </Button>

      <Dialog
        id={`${buttonTitle}-dialog`}
        open={openDialog}
        onClose={() => setOpenDialog(false)}>
        <DialogTitle>{dialogTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText>{dialogContentText}</DialogContentText>
        </DialogContent>
        <DialogActions>
          {buttons.map((button, index) => (
            <Button
              key={index}
              onClick={() => setOpenDialog(false)}
              {...(button.color && { color: button.color })}
              {...(button.link && {
                LinkComponent: Link,
                to: `/${button.link}`,
              })}>
              {button.text}
            </Button>
          ))}
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DialogComponent;
