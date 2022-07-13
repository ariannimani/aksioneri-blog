import React from "react";
import { useParams } from "react-router";

const PostDetails = () => {
  const { postId } = useParams();
  return (
    <React.Fragment>
      <h1>test {postId}</h1>
    </React.Fragment>
  );
};

export default PostDetails;
