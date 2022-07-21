import React, { createContext, useReducer, useState } from "react";
import { fetchPostByCategory, fetchPostsById } from "../blog/data/fetchData";
import { postReducer } from "../reducers/postReducer";

const initialState = {
  loading: true,
  error: "",
  results: [],
};

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const [posts, dispatch] = useReducer(postReducer, initialState);
  const [singlePost, setSinglePost] = useState([]);
  const [apiParameters, setApiParameters] = useState({ category: 0 });
  const [startStep, setStartStep] = useState(1);
  const [endStep, setEndStep] = useState(4);
  const maxSteps = posts.results.length;

  const fetchByCategory = async () => {
    await fetchPostByCategory(apiParameters.category).then((results) => {
      dispatch({ type: "FETCH_SUCCESS", playload: results });
    });
  };

  const fetchById = async (postId) => {
    await fetchPostsById(postId).then(
      (results) => setSinglePost(results)
      //dispatch({ type: "FETCH_SUCCESS", playload: results });
    );
  };

  const handleNext = () => {
    if (endStep < maxSteps) {
      setStartStep((prevStartStep) => prevStartStep + 1);
      setEndStep((prevEndStep) => prevEndStep + 1);
    }
  };

  const handleBack = () => {
    if (startStep !== 0) {
      setStartStep((prevStartStep) => prevStartStep - 1);
      setEndStep((prevEndStep) => prevEndStep - 1);
    }
  };

  const value = {
    posts,
    singlePost,
    apiParameters,
    setApiParameters,
    fetchById,
    fetchByCategory,
    handleNext,
    handleBack,
    startStep,
    endStep,
    maxSteps,
  };

  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
};
