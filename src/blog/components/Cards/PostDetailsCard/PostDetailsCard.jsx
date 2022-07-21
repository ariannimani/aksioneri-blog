import * as React from "react";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Card, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    background: "#fff",
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
  },

  image: {
    maxWidth: 340,
    maxHeight: 210,
    borderRadius: 5,
  },
  content: {
    display: "flex",
    flexDirection: "column",
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

  return (
    <React.Fragment>
      {post !== undefined ? (
        <Card className={classes.root}>
          <CardMedia
            component="img"
            image={post.blog_post_layout_featured_media_urls.full[0]}
            alt={post.slug}
            className={classes.image}
          />
          <CardContent className={classes.content}>
            <CardHeader
              sx={{ marginBottom: -5 }}
              titleTypographyProps={{ variant: "h6" }}
              title={post.title.rendered}
              subheader={post.date.toString()}
            />

            <Typography
              className={classes.font}
              variant="body2"
              color="text.secondary"
              dangerouslySetInnerHTML={{
                __html: post.excerpt.rendered,
              }}
            />
          </CardContent>
        </Card>
      ) : (
        "Error Loading Featured Post"
      )}
    </React.Fragment>
  );
}
