import * as React from "react";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Card, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    height: 279,
    marginTop: 20,
    marginBottom: -40,
  },

  image: {
    maxWidth: 340,
    maxHeight: 210,
    borderRadius: 5,
    marginLeft: 20,
  },
  content: {
    display: "flex",
    flexDirection: "column",
  },
  font: {
    color: "#000",
    textDecoration: "none",
    marginTop: -40,
    "&:hover": {
      color: "#1091ff",
    },
  },
});

export default function FeaturedSideCard({ post }) {
  const classes = useStyles();

  //  const convertDate = (post) => {
  //    const [dateValues, timeValues] = post.date.split("T");
  //    console.log(dateValues);
  //    const [year, month, day] = dateValues.split("-");
  //    const [hours, minutes, seconds] = timeValues.split(":");
  //    const date = new Date(year, month, day);
  //    console.log(date);
  //  };

  return post !== undefined ? (
    <Card elevation={0} className={classes.root}>
      <CardMedia
        component="img"
        image={post.blog_post_layout_featured_media_urls.full[0]}
        alt={post.slug}
        className={classes.image}
      />
      <CardContent className={classes.content}>
        <CardHeader
          titleTypographyProps={{ variant: "h6" }}
          title={post.title.rendered}
          className={classes.font}
          component={Link}
          to={`/${post.category}/${post.slug}`}
          //  subheader={post.date.toString()}
        />

        <Typography
          className={classes.details}
          variant="body2"
          color="text.secondary"
          dangerouslySetInnerHTML={{
            __html: post.excerpt.rendered,
          }}
        />
      </CardContent>
    </Card>
  ) : (
    <div>"Error Loading Featured Post"</div>
  );
}
