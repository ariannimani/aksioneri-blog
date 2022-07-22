import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { PostsContext } from "../../../context/posts.context";
import { Box, CardMedia, Container, Typography } from "@mui/material";
import SideBox from "../../components/Boxes/SideBox/SideBox";

const PostDetails = ({ posts }) => {
  const { postId } = useParams();
  const { singlePost, fetchById } = useContext(PostsContext);

  useEffect(() => {
    fetchById(postId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postId]);

  return (
    <Container sx={{ display: "flex", gap: "40px" }}>
      {singlePost.map((post) => (
        <Box key={post.id}>
          <CardMedia
            component="img"
            image={post.blog_post_layout_featured_media_urls.full[0]}
            alt={post.slug}
          />
          <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          <Typography gutterBottom component="div">
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          </Typography>
        </Box>
      ))}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "5px;",
        }}
      >
        <h2>Te ngjashme</h2>
        {posts.slice(0, 10).map((post) => (
          <SideBox
            post={post}
            key={post.id}
            height={70}
            displayFlex={"flex"}
            displayFlexDirection={"column"}
          ></SideBox>
        ))}
      </Box>
    </Container>
  );
};

export default PostDetails;
