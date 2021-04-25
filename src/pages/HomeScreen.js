import React, { useState } from "react";
import Banner from "../components/Banner";
import Nav from "../components/Nav";
import Row from "../components/Row";
import requests from "../requests/Requests";
const HomeScreen = () => {
  const [rows] = useState([
    {
      title: "NETFLIX ORIGINALS",
      fetchUrl: requests.fetchNetFlixOriginals,
      isLargeRow: true,
    },
    {
      title: "Top Rated",
      fetchUrl: requests.fetchTopRated,
      isLargeRow: false,
    },
    {
      title: "Action Movies",
      fetchUrl: requests.fetchActionMovies,
      isLargeRow: false,
    },
    {
      title: "Horror Movies",
      fetchUrl: requests.fetchHorroMovies,
      isLargeRow: false,
    },
    {
      title: "Romance Movies",
      fetchUrl: requests.fetchRomanticMovies,
      isLargeRow: false,
    },
    {
      title: "Documentaries",
      fetchUrl: requests.fetchDocumentaries,
      isLargeRow: false,
    },
  ]);
  return (
    <div>
      {/* Nav */}
      <Nav />
      {/* Banner */}
      <Banner />
      {/* Row */}
      {rows.map((row, index) => {
        return (
          <Row
            key={index}
            title={row.title}
            fetchUrl={row.fetchUrl}
            isLargeRow={row.isLargeRow}
          />
        );
      })}
    </div>
  );
};

export default HomeScreen;
