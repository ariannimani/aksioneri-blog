import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import FeaturedSideCard from "../../Cards/FeaturedSideCard/FeaturedSideCard";

const useStyles = makeStyles({
  root: {
    margin: 20,
    display: "flex",
    flexDirection: "column",
    background: "#ffffff",
    borderRadius: 5,
    width: 710,
    height: 70,
  },
  cards: {
    margin: 20,
    display: "flex",
    flexDirection: "row",
    border: "1px solid #000",
    width: 710,
    height: 419,
  },
  font: {
    marginTop: 20,
    marginLeft: 20,
  },
});

export default function FeaturedBox({ currentPosts }) {
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.root}>
        <Typography variant="h5" className={classes.font}>
          Featured News
        </Typography>
      </Box>
      <Box className={classes.cards}>
        {currentPosts.splice(0, 5).map((post) => (
          <FeaturedSideCard
            currentPost={post}
            widthSize={359}
            heightSize={510}
          />
        ))}
      </Box>
    </Box>
  );
}
