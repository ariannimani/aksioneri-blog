import React, { useEffect, createContext, useState } from "react";

export const CategoriesContext = createContext({
  categories: [],
});

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const urlLink = `https://aksioneri.com/wp-json/wp/v2/categories?per_page=20`;

  //  "https://aksioneri.com/wp-json/wp/v2/posts?page=1";

  async function getData() {
    try {
      const response = await fetch(urlLink, {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
      const result = await response.json();
      if (result) {
        setCategories(result);
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const value = { categories };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
