import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
    width: "auto",
    display: (props) => props.displayFlex,
    flexDirection: (props) => props.displayFlexDirection,
  },
  font: {
    bottom: "20%",
    width: "100%",
    textAlign: "center",
    color: "#fff",
    backgroundColor: "none",
    textShadow: "2px 2px 4px #000000",
    "&:hover": {
      color: "#029fb2",
    },
  },
}));

export default function BasicCard({ post, height }) {
  const classes = useStyles();

  if (post !== undefined)
    return (
      <Card
        className={classes.root}
        elevation={0}
        key={post.id}
        to={`/post/${post.slug}`}
      >
        <CardMedia
          component="img"
          sx={{ height: height }}
          image={post.blog_post_layout_featured_media_urls.full[0]}
          alt={post.slug}
        />
        <CardContent>
          <Typography gutterBottom component="div" className={classes.font}>
            <div dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          </Typography>
        </CardContent>
      </Card>
    );
}
