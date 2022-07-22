import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Menu,
  MenuItem,
  ButtonGroup,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@mui/styles";
import HomeIcon from "@mui/icons-material/Home";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { PostsContext } from "../../../context/posts.context";
import DateHeader from "./DateHeader/DateHeader";
import React from "react";

const useStyles = makeStyles({
  root: {},
  appBar: { minWidth: 1062, maxWidth: 1062, maxHeight: 70 },
  menu: { marginTop: 48, alignItems: "flex-end" },
  tool: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: { alignItems: "flex-start", flexGrow: 1 },
});

const Header = ({ categories }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [subCategories, setSubCategories] = useState([]);
  const open = Boolean(anchorEl);
  const { setApiParameters } = useContext(PostsContext);

  const handleClick = (event, id) => {
    const subCategory = categories.filter((cat) => cat.parent === id);
    setSubCategories(subCategory);
    if (subCategory.length > 0) setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleGoToLink = (category) => {
    setAnchorEl(null);
    if (category !== undefined) setApiParameters({ category: category });
  };

  const classes = useStyles();

  return (
    <Grid container direction="row" className={classes.root}>
      <Grid item>
        <AppBar position="static" color="primary" className={classes.appBar}>
          <Toolbar className={classes.tool}>
            <IconButton
              size="medium"
              edge="start"
              color="inherit"
              aria-label="logo"
              component={Link}
              to={"/"}
            >
              <Typography variant="h6" component="div" className={classes.name}>
                Aksioneri
              </Typography>
            </IconButton>

            <ButtonGroup variant="text">
              <Button
                color="inherit"
                id="resources-button"
                onClick={() => handleGoToLink(null)}
                component={Link}
                to={"/"}
              >
                <HomeIcon />
              </Button>
              {categories
                .sort((a, b) => (a.id > b.id ? 1 : -1))
                .map((cat) =>
                  cat.parent === 0 && cat.name !== "Uncategorized" ? (
                    <Button
                      key={cat.id}
                      color="inherit"
                      id="resources-button"
                      aria-controls={open ? "resources-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onMouseEnter={(event) => handleClick(event, cat.id)}
                      menulistprops={{
                        onMouseLeave: handleClose,
                      }}
                    >
                      {cat.name}
                    </Button>
                  ) : (
                    ""
                  )
                )}
            </ButtonGroup>
            <Menu
              id="resources-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleGoToLink}
              className={classes.menu}
            >
              {subCategories.map((cat) => (
                <MenuItem
                  key={cat.id}
                  onClick={() => handleGoToLink(cat.id)}
                  component={Link}
                  to={cat.slug}
                >
                  {cat.name}
                </MenuItem>
              ))}
            </Menu>
          </Toolbar>
        </AppBar>
      </Grid>
      <Grid item>
        <DateHeader />
      </Grid>
    </Grid>
  );
};

export default Header;
