import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Stack,
  Menu,
  MenuItem,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { PostsContext } from "../../../context/posts.context";

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

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        {console.log(categories)}
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="logo"
        ></IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Aksioneri
        </Typography>
        <Stack direction="row" spacing={2}>
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
        </Stack>
        <Menu
          id="resources-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleGoToLink}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          MenuListProps={{
            "aria-labelledby": "resources-button",
          }}
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
  );
};

export default Header;
