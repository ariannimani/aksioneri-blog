import React, { useEffect, useState } from "react";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import { useLocation } from "react-router-dom";

export default function Category({ posts, category }) {
  const location = useLocation();
  const [path, setPath] = useState("");

  useEffect(() => {
    const arr = location.pathname.replace("/", "").split("-");

    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const str2 = arr.join(" ");

    setPath(str2);
  }, [location.pathname]);

  return (
    <React.Fragment>
      <h3>Kategoria: {path}</h3>
      {posts.map((post) => (
        <CategoryCard post={post} key={post.id} />
      ))}
    </React.Fragment>
  );
}
