import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import axios from "../axios/axios";
// Import Swiper styles
import "swiper/swiper.scss";
import { makeStyles, useTheme, useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  row: {
    margin: "15px 0",
  },
  poster: {
    transition: "transform 400ms linear",
    "&:hover": {
      transform: "scale(1.08)",
    },
  },
  imgMovie: {
    width: "100%",
    height: "100%",
    cursor: "pointer",
    objectFit: "cover",
  },
}));
const base_url = `https://image.tmdb.org/t/p/original`;

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const classes = useStyles();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("xs"));
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await axios.get(fetchUrl);

        setMovies(res.data.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, [fetchUrl]);
  if (loading) {
    return null;
  }
  return (
    <div className={classes.row}>
      <Container maxWidth="lg">
        <Typography variant={`${mobile ? "h6" : "h5"}`} gutterBottom>
          {title}
        </Typography>
        <Swiper spaceBetween={10} slidesPerView={`${mobile ? 4 : 7}`}>
          {movies.map((movie, index) => {
            return (
              <>
                <SwiperSlide key={index}>
                  <div
                    className={classes.poster}
                    style={{ overflow: "hidden" }}
                  >
                    <img
                      className={classes.imgMovie}
                      src={`${base_url}${
                        isLargeRow ? movie.poster_path : movie.backdrop_path
                      }`}
                      alt={movie.name}
                    />
                  </div>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </Container>
    </div>
  );
};

export default Row;
