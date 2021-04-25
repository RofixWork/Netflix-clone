import React, { useState, useEffect } from "react";
import { makeStyles, Container, Typography, Button } from "@material-ui/core";
import axios from "../axios/axios";
import requests from "../requests/Requests";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: 500,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    color: "white",
    display: "flex",
    alignItems: "center",
    objectFit: "contain",
    backgroundColor: "rgba(0,0,0,.4)",
    backgroundBlendMode: "overlay",
  },
  title: {
    [theme.breakpoints.down("xs")]: {
      fontSize: 30,
    },
  },
  btn: {
    backgroundColor: "rgba(51,51,51,.5)",
    padding: ".4rem 1.5rem",
    color: "white",
    borderRadius: "3px",
    margin: "0 14px 10px 0px",
    textTransform: "capitalize",
    transition: "all .2s ease-in",
    "&:hover": {
      backgroundColor: "white",
      color: "#111",
      transition: "all .2s ease-in",
    },
  },
  desc: {
    width: "50%",
    lineHeight: 1.8,
    [theme.breakpoints.down("sm")]: {
      width: "70%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
}));
const Banner = () => {
  const classes = useStyles();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  const truncate = (str, n) => {
    return str.length > n ? str.slice(0, n) + "..." : str;
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(requests.fetchNetFlixOriginals);

      setMovie(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      );
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return null;
  }

  return (
    <div
      className={classes.root}
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h3" className={classes.title}>
          {movie.name || movie.title || movie.original_name}
        </Typography>
        <Button variant="contained" color="default" className={classes.btn}>
          Play
        </Button>
        <Button variant="contained" color="default" className={classes.btn}>
          My List
        </Button>
        <Typography variant="subtitle2" className={classes.desc}>
          {truncate(movie.overview, 250)}
        </Typography>
      </Container>
    </div>
  );
};

export default Banner;
