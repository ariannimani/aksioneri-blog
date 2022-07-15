import React, { useEffect, createContext, useReducer } from "react";
import { fetchCategories } from "../blog/data/fetchData";
import { categoryReducer } from "../reducers/categoryReducer";

const initialState = {
  loading: true,
  error: "",
  results: [],
};

export const CategoriesContext = createContext({});

export const CategoriesProvider = ({ children }) => {
  const [categories, dispatch] = useReducer(categoryReducer, initialState);

  useEffect(() => {
    fetchCategories().then((results) => {
      dispatch({ type: "FETCH_SUCCESS", playload: results });
    });
  }, []);

  const value = { categories };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
