import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { PostsContext } from "../../../../context/posts.context";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const useStyles = makeStyles({
  root: {
    background: "#fff",
    borderRadius: 5,
    width: "100%",
  },
  font: { padding: 10, marginLeft: 10 },
  //buttonContainer: { maxWidth: 100 },
  button: { maxWidth: 40, marginTop: 20, marginRight: 25 },
});

export default function TitleCard({ title, buttons }) {
  const classes = useStyles();
  const { handleBack, startStep, endStep, handleNext, maxSteps } =
    useContext(PostsContext);
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      className={classes.root}
    >
      <Grid container item xs={6} justifyContent="flex-start">
        <Typography variant="h4" className={classes.font}>
          {title}
        </Typography>
      </Grid>
      {buttons ? (
        <Grid
          container
          item
          direction="row"
          className={classes.buttonContainer}
          xs={6}
          justifyContent="flex-end"
        >
          <Grid item className={classes.button} xs={6}>
            <Button
              size="small"
              onClick={() => handleBack()}
              disabled={startStep === 0}
            >
              <ChevronLeftIcon />
            </Button>
          </Grid>
          <Grid item className={classes.button} xs={6}>
            <Button
              size="small"
              onClick={() => handleNext()}
              disabled={endStep === maxSteps - 1}
            >
              <ChevronRightIcon />
            </Button>
          </Grid>
        </Grid>
      ) : (
        ""
      )}
    </Grid>
  );
}
