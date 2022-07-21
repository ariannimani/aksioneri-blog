import {
  Box,
  Card,
  makeStyles,
  CardMedia,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    height: 422,
    position: "relative",
  },
  image: { width: "100%", height: "100%", zIndex: -1, borderRadius: 5 },
  font: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    bgcolor: "rgba(0, 0, 0, 0.54)",
    color: "#fff",
    padding: "10px",
  },
});
export default function FeaturedCard({ currentPosts }) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      {currentPosts !== undefined ? (
        <Card
          key={currentPosts.id}
          component={Link}
          to={`/${currentPosts.category}/${currentPosts.slug}`}
        >
          <CardMedia
            component="img"
            image={currentPosts.blog_post_layout_featured_media_urls.full[0]}
            alt={currentPosts.slug}
            className={classes.image}
          />
          <Typography
            className={classes.font}
            variant="h5"
            component="div"
            dangerouslySetInnerHTML={{
              __html: currentPosts.title.rendered,
            }}
          />
        </Card>
      ) : (
        "Error Loading Featured Post"
      )}
    </Box>
  );
}
