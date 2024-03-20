import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button,
} from "@mui/material";
import { useState, useEffect } from "react";
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

  useEffect(() => {
    if (buttonTitle === undefined) {
      setOpenDialog(true);
    }
  }, [buttonTitle, setOpenDialog]);

  return (
    <>
      {buttonTitle && (
        <Button variant={buttonVariant} onClick={() => setOpenDialog(true)}>
          {buttonTitle}
        </Button>
      )}

      <Dialog
        id={`${buttonTitle}-dialog`}
        open={openDialog}
        onClose={() => setOpenDialog(false)}>
        <DialogTitle>{dialogTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText
            dangerouslySetInnerHTML={{
              __html: dialogContentText.replace(/\n/g, "<br />"),
            }}
          />
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
              })}
              {...(button.clickFunction && {
                onClick: button.clickFunction,
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
