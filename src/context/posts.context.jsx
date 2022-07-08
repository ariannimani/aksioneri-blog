import React, { useEffect, createContext, useState, useMemo } from "react";
export const PostsContext = createContext({
  posts: [],
  setApiParameters: () => {},
});

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [apiParameters, setApiParameters] = useState([]);
  const urlLink = `https://aksioneri.com/wp-json/wp/v2/posts?categories=${apiParameters}&order=desc`;

  const memo = useMemo(() => ({ posts, setPosts }), [posts]);
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
        setPosts(result);
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getData();
    console.log(posts);
  }, [apiParameters]);

  const value = { posts, apiParameters, setApiParameters };

  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
};
