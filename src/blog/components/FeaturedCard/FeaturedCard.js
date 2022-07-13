import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
  },
  font: {
    position: "absolute",
    top: "75%",
    width: "100%",
    textAlign: "left",
    color: "#fff",
    backgroundColor: "none",
    marginLeft: "20px",
    textShadow: "2px 2px 4px #000000",
    "&:hover": {
      color: "#029fb2",
    },
  },
}));

export default function FeaturedCard({ featuredPost }) {
  const classes = useStyles();

  if (featuredPost !== undefined)
    return (
      <Card
        sx={{ maxWidth: 1200 }}
        className={classes.root}
        elevation={0}
        key={featuredPost.id}
        component={Link}
        to={`/${featuredPost.category}/${featuredPost.slug}`}
      >
        <CardMedia
          component="img"
          sx={{ maxHeight: 420 }}
          image={featuredPost.blog_post_layout_featured_media_urls.full[0]}
          alt={featuredPost.slug}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className={classes.font}
          >
            <div
              dangerouslySetInnerHTML={{ __html: featuredPost.title.rendered }}
            />
          </Typography>
        </CardContent>
      </Card>
    );
}
