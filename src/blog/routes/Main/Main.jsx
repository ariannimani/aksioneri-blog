import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "../../components/Header/Header";
import Home from "../../components/Home/Home";
import { CategoriesContext } from "../../../context/categories.context";
import { PostsContext } from "../../../context/posts.context";
import Category from "../../routes/Category/Category";
import PostDetails from "../PostDetails/PostDetails";
import {
  createTheme,
  Grid,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    background: "#ecedee",
    marginBottom: 30,
  },
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#17222b",
    },
    secondary: {
      main: "#000000",
    },
  },
});

export default function Main() {
  const { categories } = useContext(CategoriesContext);
  const { posts } = useContext(PostsContext);

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        direction="column"
        alignItems="center"
        className={classes.root}
      >
        <Grid item>
          <Header categories={categories.results} />
        </Grid>
        <Grid item>
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route
              path="/:category"
              category=":category"
              element={<Category posts={posts.results} />}
            />

            <Route
              path={`:category/:postId`}
              element={<PostDetails posts={posts.results} />}
            />
          </Routes>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
