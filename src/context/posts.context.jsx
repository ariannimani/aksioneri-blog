import React, { createContext, useReducer, useState } from "react";
import { fetchPostByCategory, fetchPostsById } from "../blog/data/fetchData";
import { postReducer } from "../reducers/postReducer";

const initialState = {
  loading: true,
  error: "",
  results: [],
};

export const PostsContext = createContext({
  setApiParameters: () => {},
});

export const PostsProvider = ({ children }) => {
  const [posts, dispatch] = useReducer(postReducer, initialState);
  const [apiParameters, setApiParameters] = useState({ category: null });

  const fetchByCategory = async () => {
    await fetchPostByCategory(apiParameters.category).then((results) => {
      dispatch({ type: "FETCH_SUCCESS", playload: results });
    });
  };

  const fetchById = async (postId) => {
    await fetchPostsById(postId).then((results) => {
      dispatch({ type: "FETCH_SUCCESS", playload: results });
    });
  };

  const value = {
    posts,
    apiParameters,
    setApiParameters,
    fetchById,
    fetchByCategory,
  };

  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
};
