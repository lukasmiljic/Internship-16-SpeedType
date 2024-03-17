import { Typography } from "@mui/material";
import classes from "./TypeWriter.module.css";

const TypeWriter = () => {
  return (
    <div className={classes.container}>
      <Typography
        className={classes.title}
        variant="h1"
        fontFamily={"monospace"}>
        Typing Game...
      </Typography>
    </div>
  );
};
export default TypeWriter;
