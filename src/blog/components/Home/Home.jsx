import React, { useContext, useEffect } from "react";
import FeaturedCard from "../FeaturedCard/FeaturedCard";
import BasicCard from "../BasicCard/BasicCard";
import { Box, Container } from "@mui/material";
import SideCard from "../SideCard/SideCard";
import { PostsContext } from "../../../context/posts.context";

const Home = ({ posts }) => {
  const { fetchByCategory } = useContext(PostsContext);

  useEffect(() => {
    fetchByCategory(0);
  }, []);

  return (
    <Container
      sx={{
        display: "flex",
        gap: "20px",
      }}
    >
      <Box>
        <FeaturedCard featuredPost={posts[0]} />

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
        >
          {posts.slice(0, 3).map((post) => (
            <BasicCard
              post={post}
              key={post.id}
              height={130}
              displayFlex={"flex"}
              displayFlexDirection={"row"}
            />
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "5px;",
        }}
      >
        {posts.slice(0, 5).map((post) => (
          <SideCard
            post={post}
            key={post.id}
            height={70}
            displayFlex={"flex"}
            displayFlexDirection={"column"}
          ></SideCard>
        ))}
      </Box>
    </Container>
  );
};

export default Home;
