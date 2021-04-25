import React, { useRef } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import { auth } from "../firebase/firebase";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#111",
    padding: "60px 40px",
    // width: "30%",
  },
  input: {
    fontFamily: "Roboto",
    display: "block",
    fontSize: ".8rem",
    padding: "10px 15px",
    margin: "15px 0",
    width: "100%",
    borderRadius: 3,
  },
  btn: {
    textTransform: "capitalize",
    backgroundColor: "#e50914",
    color: "white",
    fontSize: "1rem",
    fontWeight: "700",
    whiteSpace: "nowrap",
    borderRadius: 3,
    marginTop: 15,

    "&:hover": {
      backgroundColor: "#e50914",
    },
  },
  account: {
    color: "gray",
    marginTop: "20px",
    "& span": {
      color: "white",
      fontWeight: 700,
      display: "inline-block",
      marginLeft: "3px",
      cursor: "pointer",
      "&:hover": {
        textDecoration: "underline",
      },
    },
  },
}));
const SignupScreen = () => {
  const classes = useStyles();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((userAuth) => {
        console.log(userAuth);
      })
      .catch((error) => {
        alert(error.message);
        console.log(error.message);
      });
  };
  const signin = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((userAuth) => {
        console.log(userAuth);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <Container maxWidth="xs">
      <div className={classes.root}>
        <form>
          <Typography gutterBottom variant="h4">
            Sign In
          </Typography>
          <input
            className={classes.input}
            type="email"
            required
            placeholder="Email"
            ref={emailRef}
          />
          <input
            className={classes.input}
            type="password"
            placeholder="Password"
            ref={passwordRef}
            required
          />
          <Button
            fullWidth
            className={classes.btn}
            variant="contained"
            color="default"
            size="small"
            type="submit"
            onClick={signin}
          >
            sign in
          </Button>
          <Typography variant="subtitle2" className={classes.account}>
            New to Netflix? <span onClick={register}>Sign up now</span>
          </Typography>
        </form>
      </div>
    </Container>
  );
};

export default SignupScreen;
