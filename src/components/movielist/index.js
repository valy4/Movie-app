import React from "react";
import styled from "styled-components";
import MovieItem from "../movieitem";

export default class MovieList extends React.Component {
  render() {
    const { movies, genres } = this.props;

    for (let i = 0; i < movies.length; i++) {
      movies[i].genreNames = [];
      for (let genreId of movies[i].genre_ids) {
        for (let genre of genres) {
          if (genreId === genre.id) {
            movies[i].genreNames.push(genre.name);
          }
        }
      }
    }

    const films = movies.map((movie) => <MovieItem mmm={movie} />);

    return (
      <MoviesWrapper>
        {/* Finish the MovieItem component and use it here to display the movie results */}
        {films}
      </MoviesWrapper>
    );
  }
}

const MoviesWrapper = styled.div`
  position: relative;
  margin-right: 15px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    max-width: 500px;
  } ;
`;
