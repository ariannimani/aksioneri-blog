import React, { useContext, useEffect, useState } from "react";
import CategoryBox from "../../components/Boxes/CategoryBox/CategoryBox";
import { useLocation } from "react-router-dom";
import { PostsContext } from "../../../context/posts.context";

export default function Category({ posts }) {
  const location = useLocation();
  const [path, setPath] = useState("");
  const { fetchByCategory } = useContext(PostsContext);

  useEffect(() => {
    fetchByCategory();

    const arr = location.pathname.replace("/", "").split("-");

    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const str2 = arr.join(" ");

    setPath(str2);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return posts.loading ? (
    "Loading..."
  ) : (
    <React.Fragment>
      <h3>Kategoria: {path}</h3>
      {posts.map((post) => (
        <CategoryBox post={post} key={post.id} />
      ))}
    </React.Fragment>
  );
}
