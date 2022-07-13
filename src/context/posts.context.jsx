import React, { useEffect, createContext, useState } from "react";
export const PostsContext = createContext({
  posts: [],
  setApiParameters: () => {},
});

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [apiParameters, setApiParameters] = useState({ category: null });

  //  "https://aksioneri.com/wp-json/wp/v2/posts?page=1";

  async function getData() {
    try {
      const response = await fetch(getUrl(), {
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
        setPosts(result);
      } else setPosts([]);
    } catch (err) {
      console.log(err);
    }
  }

  const getUrl = () => {
    if (apiParameters.category > 0) {
      return `https://aksioneri.com/wp-json/wp/v2/posts?categories=${apiParameters.category}&order=desc`;
    } else {
      return `https://aksioneri.com/wp-json/wp/v2/posts?&order=desc`;
    }
  };
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiParameters]);

  const value = { posts, apiParameters, setApiParameters };

  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
};
