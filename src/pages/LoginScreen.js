import React, { useState } from "react";
import {
  makeStyles,
  Container,
  Grid,
  Button,
  Typography,
  Box,
} from "@material-ui/core";
import SignupScreen from "./SignupScreen";
const useStyles = makeStyles((theme) => ({
  navbarLogin: {
    height: 70,
    width: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 9999,
  },
  imgLogo: {
    height: 70,
    objectFit: "cover",
  },
  btnSignin: {
    textTransform: "capitalize",
    padding: "3px 20px",
    backgroundColor: "#e50914",
    color: "white",
    fontSize: "1rem",
    fontWeight: "700",
    borderRadius: 3,
    "&:hover": {
      backgroundColor: "#e50914",
    },
  },
  banner: {
    minHeight: "100vh",
    width: "100%",
    background: `url('https://muii.in/__export/1600794313496/sites/muiindia/img/2020/09/22/619306-bg-full-netflix-grid-v2_desktop.jpg_554688468.jpg') center no-repeat`,
    backgroundSize: "cover",
    backgroundColor: "rgba(0,0,0,.7)",
    backgroundBlendMode: "overlay",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: 400,
  },
  inputEmail: {
    width: "80%",
    padding: "12px 15px",
    fontSize: "1rem",
    border: 0,
    outline: 0,
    fontFamily: "Roboto",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  btnStart: {
    padding: "3px 25px",
    backgroundColor: "#e50914",
    color: "white",
    fontSize: "1rem",
    fontWeight: "700",
    whiteSpace: "nowrap",
    borderRadius: 0,

    "&:hover": {
      backgroundColor: "#e50914",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: ".8rem",
    },
  },
}));
const LoginScreen = () => {
  const classes = useStyles();
  const [signin, setSignin] = useState(false);
  return (
    <div className={classes.root}>
      {/* NAVBAR LOGIN */}
      <div className={classes.navbarLogin}>
        <Container maxWidth="lg">
          <Grid container justify="space-between" alignItems="center">
            <Grid item>
              <img
                className={classes.imgLogo}
                src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                alt="logoImage"
              />
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="default"
                className={classes.btnSignin}
                onClick={() => setSignin(true)}
              >
                sign in
              </Button>
            </Grid>
          </Grid>
        </Container>
      </div>
      {/* NAVBAR LOGIN */}

      {/* BANNER */}
      <div className={classes.banner}>
        {signin ? (
          <SignupScreen />
        ) : (
          <>
            <Container maxWidth="md" align="center">
              <Typography variant="h3" gutterBottom className={classes.title}>
                Unlimited films, TV programmes and more.
              </Typography>
              <Typography variant="h5" paragraph>
                Watch anywhere, Cancel at any time.
              </Typography>
              <Typography variant="subtitle1">
                Ready to watch? Enter your email to create or restart your
                mambership.
              </Typography>
              <Box marginTop={2}>
                <form>
                  <Box display="flex" width="80%">
                    <input
                      type="text"
                      placeholder="Email Address"
                      className={classes.inputEmail}
                    />

                    <Button
                      variant="contained"
                      color="default"
                      className={classes.btnStart}
                      onClick={() => setSignin(true)}
                    >
                      get started
                    </Button>
                  </Box>
                </form>
              </Box>
            </Container>
          </>
        )}
      </div>
      {/* BANNER */}
    </div>
  );
};

export default LoginScreen;
