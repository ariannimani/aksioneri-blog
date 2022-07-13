import React from "react";
import FeaturedCard from "../FeaturedCard/FeaturedCard";
import BasicCard from "../BasicCard/BasicCard";
import { Box, Container } from "@mui/material";

const Home = ({ posts }) => {
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
            <BasicCard post={post} key={post.id} height={130} />
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
          <BasicCard
            post={post}
            key={post.id}
            height={70}
            displayFlex={"flex"}
            displayFlexDirection={"row"}
          ></BasicCard>
        ))}
      </Box>
    </Container>
  );
};

export default Home;
