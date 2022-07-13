import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  font: {
    backgroundColor: "none",
    textDecoration: "none",
    color: "#000",
    "&:hover": {
      color: "#029fb2",
    },
  },
}));

export default function CategoryCard({ post }) {
  const classes = useStyles();
  const MAX_LENGTH = 450;

  return (
    <Card sx={{ maxWidth: "820px" }}>
      <CardMedia
        component="img"
        height="400"
        image={post.blog_post_layout_featured_media_urls.full[0]}
        alt={post.slug}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component={Link}
          to={post.slug}
          className={classes.font}
        >
          <div dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
        </Typography>
        <Typography variant="body2" color="text.secondary" component="div">
          <div>
            {post.content.rendered.length > MAX_LENGTH ? (
              <div
                dangerouslySetInnerHTML={{
                  __html: post.content.rendered.substring(0, MAX_LENGTH),
                }}
              ></div>
            ) : (
              <div
                dangerouslySetInnerHTML={{
                  __html: post.content.rendered,
                }}
              ></div>
            )}
          </div>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" component={Link} to={post.slug}>
          Lexo me shume
        </Button>
      </CardActions>
    </Card>
  );
}
