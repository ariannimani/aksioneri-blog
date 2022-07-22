import { Grid, makeStyles } from "@material-ui/core";
import { Button, Divider } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { PostsContext } from "../../../context/posts.context";
import FeaturedCard from "../Cards/FeaturedCard/FeaturedCard";
import FeaturedList from "../Cards/FeaturedList/FeaturedList";
import FeaturedSideCard from "../Cards/FeaturedSideCard/FeaturedSideCard";
import PostDetailsCard from "../Cards/PostDetailsCard/PostDetailsCard";
import TitleCard from "../Cards/TitleCard/TitleCard";
import SwipeText from "../SwipeText/SwipeText";

const useStyles = makeStyles({
  root: { maxWidth: 1250, margin: "auto" },
  boxFeatured: { marginTop: 20 },
  boxPostContainer: {},
  boxSideBar: {
    background: "#fff",
    borderRadius: 5,
  },
  boxPosts: { margin: 20 },
  sideBox: {
    borderRadius: 5,
    marginTop: 20,
  },
  boxTrending: { background: "#fff", borderRadius: 5 },
  postDetailsContainer: { background: "#fff", borderRadius: 5, marginTop: 20 },
  boxLine: { border: "1px dashed #dcdedf" },
  showButton: { width: "100%" },
});

export default function Home() {
  const classes = useStyles();
  const { fetchByCategory, posts } = useContext(PostsContext);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchByCategory(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const loadMore = () => {
    setPage((page) => page + 1);
  };

  return (
    <Grid container direction="column" className={classes.root} spacing={2}>
      <Grid item container direction="row" spacing={2}>
        <Grid item xs={6}>
          <FeaturedCard currentPosts={posts.results[0]} />
        </Grid>
        <Grid item xs={3}>
          <FeaturedList currentPosts={posts.results} />
        </Grid>
        <Grid item xs={3}>
          <FeaturedSideCard
            currentPost={posts.results[7]}
            maxLengthTitle={40}
            maxLengthContent={240}
          />
        </Grid>
      </Grid>
      <Grid item container direction="row" spacing={2}>
        <Grid
          item
          container
          direction="column"
          xs={8}
          className={classes.boxFeatured}
        >
          <Grid item className={classes.boxTrending}>
            <TitleCard title="Trending News" />
            <Grid item container direction="row">
              <Grid item xs={6}>
                <FeaturedSideCard
                  currentPost={posts.results[6]}
                  maxLengthTitle={100}
                  maxLengthContent={240}
                />
              </Grid>
              <Grid item xs={6}>
                <FeaturedList currentPosts={posts.results} />
              </Grid>
            </Grid>
          </Grid>
          <Grid container item className={classes.boxFeatured}>
            <Grid container item>
              <TitleCard buttons={true} title="Featured News" />
            </Grid>
            <Grid item container direction="row">
              <SwipeText currentPosts={posts.results} />
            </Grid>
          </Grid>
          <Grid container item className={classes.postDetailsContainer}>
            <Grid container item>
              <TitleCard buttons={false} title="Businness" />
            </Grid>
            <Grid item container direction="column">
              {posts.results.map((post) => (
                <React.Fragment key={post.id}>
                  <PostDetailsCard post={post} />
                  <Divider variant="middle" />
                </React.Fragment>
              ))}
            </Grid>
            <Button
              variant="outlined"
              className={classes.showButton}
              onClick={loadMore}
            >
              {posts.loading ? "Loading..." : "Load More"}
            </Button>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          xs={4}
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
