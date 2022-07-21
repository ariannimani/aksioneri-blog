import { AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  dateBar: {
    maxWidth: 250,
    maxHeight: 70,
    background: "#29333c",
  },
  text: { margin: "auto" },
});

const DateHeader = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.dateBar}>
      <Toolbar className={classes.dateBar}>
        <h4 className={classes.text}>25 Qershor 2022</h4>
      </Toolbar>
    </AppBar>
  );
};

export default DateHeader;
