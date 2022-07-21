import { Grid, makeStyles } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { PostsContext } from "../../../context/posts.context";
import FeaturedCard from "../Cards/FeaturedCard/FeaturedCard";
import FeaturedList from "../Cards/FeaturedList/FeaturedList";
import FeaturedSideCard from "../Cards/FeaturedSideCard/FeaturedSideCard";
import TitleCard from "../Cards/TitleCard/TitleCard";
import SwipeText from "../SwipeableTextStepper/SwipeText";

const useStyles = makeStyles({
  root: {
    width: 1200,
  },
  boxFeatured: {},
  boxPostContainer: {},
  boxSideBar: {
    background: "#fff",
    borderRadius: 5,
  },
  trendingBox: {
    height: 549,
  },
  boxPosts: { margin: 20 },
  sideBox: {
    marginTop: 40,
    borderRadius: 5,
  },
});

export default function Home() {
  const classes = useStyles();
  const { fetchByCategory, posts } = useContext(PostsContext);

  useEffect(() => {
    fetchByCategory();
  }, []);

  return (
    <Grid container direction="column" className={classes.root} spacing={2}>
      <Grid
        item
        container
        direction="row"
        className={classes.boxFeatured}
        spacing={2}
      >
        <Grid item xs={6}>
          <FeaturedCard currentPosts={posts.results[0]} />
        </Grid>
        <Grid item xs={3}>
          <FeaturedList currentPosts={posts.results} />
        </Grid>
        <Grid item xs={3}>
          <FeaturedSideCard currentPost={posts.results[7]} />
        </Grid>
      </Grid>
      <Grid item container direction="row" spacing={2}>
        <Grid item container direction="column" xs={9}>
          <Grid item>
            <TitleCard title="Trending News" />
            <Grid
              item
              container
              direction="row"
              className={classes.trendingBox}
            >
              <Grid item xs={6}>
                <FeaturedSideCard currentPost={posts.results[6]} />
              </Grid>
              <Grid item xs={6}>
                <FeaturedList currentPosts={posts.results} />
              </Grid>
            </Grid>
          </Grid>
          <Grid container item className={classes.title}>
            <Grid container item>
              <TitleCard buttons={true} title="Featured News" />
            </Grid>
            <Grid
              item
              container
              direction="row"
              className={classes.trendingBox}
              spacing={2}
            >
              <Grid item xs={12}>
                <SwipeText currentPosts={posts.results} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          xs={3}
          className={classes.sideBox}
        >
          <Grid item>
            <FeaturedList currentPosts={posts.results} />
          </Grid>
          <Grid item>
            <h1>Finance</h1>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
