import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid, makeStyles } from "@material-ui/core";
import { PostsContext } from "../../../context/posts.context";
const useStyles = makeStyles({
  color: {
    background: "#fff",
    borderRadius: 10,
    maxWidth: 255,
    height: 360,
    marginTop: 10,
  },
});
export default function SwipeText({ currentPosts }) {
  const classes = useStyles();
  const { startStep, endStep } = useContext(PostsContext);
  return (
    <React.Fragment>
      <Grid container direction="row" justifyContent="space-between">
        {currentPosts.slice(startStep, endStep).map((step, index) => (
          <Grid
            container
            item
            justifyContent="space-between"
            key={step.id}
            xs={4}
            className={classes.color}
          >
            <Grid item>
              <Box
                component="img"
                sx={{
                  height: 255,
                  display: "block",
                  maxWidth: 255,
                  overflow: "hidden",
                  borderRadius: "10px 10px 0px 0px",
                }}
                src={step.blog_post_layout_featured_media_urls.full[0]}
                alt={step.slug}
              />
            </Grid>
            <Grid item>
              <Typography
                variant="h6"
                sx={{ fontSize: 16, minHeight: 70 }}
                dangerouslySetInnerHTML={{
                  __html: step.title.rendered,
                }}
              ></Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}
