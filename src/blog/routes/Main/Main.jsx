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
        <Header categories={categories} />
        <Routes>
          <Route path="/" index element={<Home posts={posts} />} />
          <Route
            path="/:category"
            category=":category"
            element={<Category posts={posts} />}
          />

          <Route
            path={`:category/:postId`}
            element={<PostDetails posts={posts} />}
          />
        </Routes>
      </Container>
    </React.Fragment>
  );
}
