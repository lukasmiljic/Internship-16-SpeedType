import * as React from "react";
import {
  Box,
  List,
  Divider,
  ListItem,
  FormControlLabel,
  Switch,
  Tooltip,
  Typography,
  Stack,
} from "@mui/material";
import { useWordsPerMinute } from "../../Providers/WordsPerMinuteProvider";
import { useLevel } from "../../Providers/LevelProvider";
import { useScrollingText } from "../../Providers/FadingTextProvider";

const DrawerList = ({ toggleDrawer }) => {
  const { wordsPerMinute, updateWordsPerMinute } = useWordsPerMinute();
  const { level, updateLevel } = useLevel();
  const { scrollingTextEnabeled, updateScrollingTextEnabeled } =
    useScrollingText();

  React.useEffect(() => {
    console.log("scrollingTextEnabeled " + scrollingTextEnabeled);
  }, [scrollingTextEnabeled]);

  return (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <ListItem>
          <Stack padding={1} direction="row" spacing={4}>
            <Tooltip enterDelay={500} title="Number of cleared levels">
              <Typography variant="button">Level {level}</Typography>
            </Tooltip>
            <Tooltip enterDelay={500} title="Current words per minute.">
              <Typography variant="button">WPM {wordsPerMinute}</Typography>
            </Tooltip>
          </Stack>
        </ListItem>
        <Divider />
      </List>
      <Tooltip
        enterDelay={500}
        title="Toggles the floating text background effect on the Home Page on and off. Enabling this effect may affect performance">
        <FormControlLabel
          value="top"
          control={
            <Switch
              checked={scrollingTextEnabeled}
              onChange={(event, checked) => {
                updateScrollingTextEnabeled(checked);
              }}
            />
          }
          label="Enable Scrolling Text"
          labelPlacement="start"
        />
      </Tooltip>
    </Box>
  );
};

export default DrawerList;
