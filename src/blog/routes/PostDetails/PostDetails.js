import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { PostsContext } from "../../../context/posts.context";

const PostDetails = () => {
  const { postId } = useParams();
  const { posts, fetchById } = useContext(PostsContext);

  useEffect(() => {
    fetchById(postId);
  }, [postId]);

  return (
    <React.Fragment>
      <h1>test {postId}</h1>
    </React.Fragment>
  );
};

export default PostDetails;
