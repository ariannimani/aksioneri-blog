import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  font: {
    width: 130,
    textDecoration: "none",
    fontSize: "14px",
    "&:hover": {
      color: "#029fb2",
    },
  },
}));

export default function SideCard({ post }) {
  const classes = useStyles();
  return (
    <Card
      sx={{ display: "flex" }}
      elevation={0}
      key={post.id}
      component={Link}
      to={`/${post.category}/${post.slug}`}
    >
      <CardMedia
        component="img"
        sx={{ width: 151, height: 100 }}
        image={post.blog_post_layout_featured_media_urls.full[0]}
        alt={post.slug}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          textOverflow: "ellipsis",
        }}
      >
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="p">
            <div
              numberoflines={1}
              className={classes.font}
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
