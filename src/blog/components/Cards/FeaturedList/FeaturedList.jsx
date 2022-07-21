import {
  Box,
  makeStyles,
  CardMedia,
  Typography,
  Card,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    //width: (props) => props.widthSize,
    //height: (props) => props.heightSize,
    height: 422,
    borderRadius: 5,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  image: { maxWidth: 75, maxHeight: 52, marginRight: 10, borderRadius: 5 },
  font: {
    color: "#000",
    fontSize: 12,
  },
  mainCard: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 92,
    padding: 15,
    background: "#fff",
    textDecoration: "none",
  },
});
export default function FeaturedList({ currentPosts, widthSize, heightSize }) {
  const classes = useStyles({ widthSize, heightSize });

  const newVar = [...currentPosts];

  return (
    <Box className={classes.root}>
      {currentPosts.length > 0
        ? newVar.slice(0, 5).map((post) => (
            <Card
              key={post.id}
              component={Link}
              to={`/${post.category}/${post.slug}`}
              className={classes.mainCard}
            >
              <CardMedia
                component="img"
                image={post.blog_post_layout_featured_media_urls.thumbnail[0]}
                alt={post.slug}
                className={classes.image}
              />
              <Typography
                className={classes.font}
                style={{ whiteSpace: "pre-wrap" }}
                variant="h5"
                component="div"
                dangerouslySetInnerHTML={{
                  __html: post.title.rendered,
                }}
              />
            </Card>
          ))
        : "Error Loading Featured Post List"}
    </Box>
  );
}
