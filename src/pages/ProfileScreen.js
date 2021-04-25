import {
  makeStyles,
  Container,
  Grid,
  Typography,
  Box,
  Button,
  Divider,
} from "@material-ui/core";
import React from "react";
import Nav from "../components/Nav";
import { useSelector } from "react-redux";
import { auth } from "../firebase/firebase";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& .MuiButton-root": {
      textTransform: "capitalize",
      backgroundColor: "#da222b",
      color: "white",
      fontSize: ".9rem",
      whiteSpace: "nowrap",
      borderRadius: 0,
      "&:hover": {
        backgroundColor: "#e50914",
      },
    },
    "& .MuiDivider-root": {
      marginBottom: 15,
      backgroundColor: "white",
    },
    [theme.breakpoints.down("xs")]: {
      "& .MuiTypography-h4": {
        fontSize: "1.5rem",
      },
      "& .MuiTypography-h6": {
        fontSize: ".8rem",
      },
      "& .MuiButton-root": {
        padding: "4px 8px",
        fontSize: ".8rem",
      },
      "& .MuiTypography-subtitle1": {
        fontSize: ".7rem",
      },
    },
  },
  imgProfile: {
    width: "100%",
    height: "120px",
    [theme.breakpoints.down("xs")]: {
      height: 80,
    },
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  },
  inputEmail: {
    padding: "10px 15px",
    display: "block",
    width: "100%",
    backgroundColor: "#888",
    color: "white",
    marginBottom: "12px",
    fontSize: "1rem",
    fontFamily: "Roboto",
    "&::placeholder": {
      color: "white",
    },
  },
}));
const ProfileScreen = () => {
  const classes = useStyles();
  const { user } = useSelector((state) => state.user);
  const getDate = () => {
    var dt = new Date();

    return dt.getMonth() + 1 + "/" + dt.getDate() + "/" + dt.getFullYear();
  };
  return (
    <div className={classes.root}>
      <Nav />
      <Container maxWidth="sm">
        <Typography variant="h4" gutterBottom color="initial">
          Edit Profile
        </Typography>
        <Divider />
        <Grid container spacing={2}>
          <Grid item xs={3} md={3}>
            <div className={classes.imgProfile}>
              <img
                className={classes.imgProfile}
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt="imgProfle"
              />
            </div>
          </Grid>
          <Grid item xs={9} md={9}>
            <input
              type="text"
              placeholder="Email"
              className={classes.inputEmail}
              readOnly
              value={user.email}
            />
            <Typography variant="h6" gutterBottom>
              Plans (Current Plan:premium)
            </Typography>
            <Divider />
            <Box marginTop={1}>
              <Typography variant="subtitle1">
                Renewal date: {getDate()}
              </Typography>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                marginY={1}
              >
                <Box>
                  <Typography variant="subtitle1" color="initial">
                    Netflix Standard
                  </Typography>
                  <Typography variant="subtitle2" color="initial">
                    1080p
                  </Typography>
                </Box>
                <Box>
                  <Button variant="contained" color="default">
                    Subscribe
                  </Button>
                </Box>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                marginY={1}
              >
                <Box>
                  <Typography variant="subtitle1" color="initial">
                    Netflix Basic
                  </Typography>
                  <Typography variant="subtitle2" color="initial">
                    480p
                  </Typography>
                </Box>
                <Box>
                  <Button variant="contained" color="default">
                    Subscribe
                  </Button>
                </Box>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                marginY={1}
              >
                <Box>
                  <Typography variant="subtitle1" color="initial">
                    Netflix Premium
                  </Typography>
                  <Typography variant="subtitle2" color="initial">
                    4k+HDR
                  </Typography>
                </Box>
                <Box>
                  <Button
                    style={{ backgroundColor: "gray" }}
                    variant="contained"
                    color="default"
                  >
                    Current Package
                  </Button>
                </Box>
              </Box>
              <Button
                fullWidth
                variant="contained"
                color="default"
                onClick={() => auth.signOut()}
              >
                sign out
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ProfileScreen;
