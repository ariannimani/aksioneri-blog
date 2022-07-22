import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid, makeStyles } from "@material-ui/core";
import { PostsContext } from "../../../context/posts.context";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  color: {
    background: "#fff",
    borderRadius: 10,
    maxWidth: 246,
    height: 360,
    marginTop: 10,
  },
  font: {
    color: "#000",

    "&:hover": {
      color: "#1091ff",
    },
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
            component={Link}
            to={`/${step.category}/${step.slug}`}
          >
            <Grid item>
              <Box
                component="img"
                sx={{
                  height: 239,
                  display: "block",
                  maxWidth: 246,
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
                sx={{
                  fontSize: 16,
                  minHeight: 70,
                  textDecoration: "none",
                }}
                dangerouslySetInnerHTML={{
                  __html: step.title.rendered,
                }}
                className={classes.font}
              ></Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}
