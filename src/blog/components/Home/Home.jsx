import React from "react";
import BasicCard from "../BasicCard/BasicCard";

const Home = ({ posts }) => {
  return (
    <React.Fragment>
      <BasicCard featuredPost={posts[0]} />
    </React.Fragment>
  );
};

export default Home;
