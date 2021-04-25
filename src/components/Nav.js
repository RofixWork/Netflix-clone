import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  nav: {
    width: "100%",
    height: "70px",
    overflow: "hidden",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 9999,
    transition: "all .3s ease-in",
    "&.nav__black": {
      background: "#111",
      transition: "all .3s ease-in",
    },
  },
  imgLogo: {
    height: 70,
    objectFit: "cover",
    cursor: "pointer",
  },
  imgProfile: {
    width: 35,
    objectFit: "cover",
    cursor: "pointer",
  },
}));
const Nav = () => {
  const classes = useStyles();
  const history = useHistory();
  const [show, setShow] = useState(false);
  const transitionNavbar = () => {
    if (window.scrollY > 50) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);

    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);
  return (
    <div className={`${classes.nav} ${show && "nav__black"}`}>
      <Container maxWidth="lg">
        <Grid container alignItems="center" justify="space-between">
          <Grid item>
            <img
              onClick={() => history.push("/")}
              className={classes.imgLogo}
              src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
              alt="logoImage"
            />
          </Grid>
          <Grid item>
            <img
              onClick={() => history.push("/profile")}
              className={classes.imgProfile}
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              alt="imgProfle"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Nav;
