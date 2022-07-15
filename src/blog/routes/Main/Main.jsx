import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "../../components/Header/Header";
import Home from "../../components/Home/Home";
import { Container } from "@mui/material";
import { CategoriesContext } from "../../../context/categories.context";
import { PostsContext } from "../../../context/posts.context";
import Category from "../Category/Category";
import PostDetails from "../PostDetails/PostDetails";

export default function Main() {
  const { categories } = useContext(CategoriesContext);
  const { posts } = useContext(PostsContext);
  return (
    <React.Fragment>
      <Container display="flex" direction="column" elevation={0}>
        <Header categories={categories.results} />
        <Routes>
          <Route path="/" index element={<Home posts={posts.results} />} />
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
      </Container>
    </React.Fragment>
  );
}
