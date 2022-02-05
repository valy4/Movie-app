import React from "react";
import styled from "styled-components";
import * as colors from "../../colors";

export default class MovieItem extends React.Component {
  render() {
    const { mmm } = this.props;

    const posterUrl = `https://image.tmdb.org/t/p/w500/${mmm?.poster_path}`;
    console.log("Genre names", mmm.genreNames);

    const genresType = mmm.genreNames.join(" | ");

    return (
      // Complete the MovieItem component
      <MovieItemWrapper>
        <LeftCont>
          <Image src={posterUrl} />
        </LeftCont>
        <RightCont>
          <Header>
            <TitleGenreContainer>
              <Title>{mmm?.title}</Title>
              <GenreTypes>{genresType}</GenreTypes>
            </TitleGenreContainer>
            <Rating> {mmm?.vote_average}</Rating>
          </Header>

          <Overview>{mmm?.overview}</Overview>
          <DataRelease>{mmm?.release_date}</DataRelease>
        </RightCont>
      </MovieItemWrapper>
    );
  }
}

const MovieItemWrapper = styled.div`
  position: relative;
  background-color: white;
  border-radius: 3px;
  display: flex;
  margin: 0 15px 15px 45px;
  padding: 20px;
  max-height: 280px;
  @media (max-width: 768px) {
    max-height: 150px;
    padding: 10px;
    margin: 0 7px 7px 20px;
  }
`;

const LeftCont = styled.div`
  display: inline-block;
  margin-right: 20px;
  @media (max-width: 768px) {
    margin-right: 10px;
  }
`;
const Image = styled.img`
  max-width: 200px;
  max-height: 100%;
  @media (max-width: 768px) {
    max-width: 100px;
    max-height: 100%;
  }
`;
const RightCont = styled.div`
  display: inline-block;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
`;
const Title = styled.h1`
  font-size: 1.5rem;
  color: black;
  font-weight: 900;
  margin-top: 0;
  margin-bottom: 0;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;
const Rating = styled.p`
  align-content: flex-end;
  background-color: ${colors.primaryColor};
  height: 1.5rem;
  width: 1.5rem;
  font-size: 1.2rem;
  text-align: center;
  border-radius: 3px;
  color: white;
  padding: 5px;
  margin-top: 0;
  @media (max-width: 768px) {
    font-size: 0.9rem;
    height: 1rem;
    width: 1rem;
  }
`;
const Overview = styled.p`
  font-size: 1rem;
  text-overflow: clip;
  @media (max-width: 768px) {
    font-size: 0.7rem;
    max-height: 70px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
const DataRelease = styled.p`
  font-size: 1rem;
  color: ${colors.primaryColor};
  position: absolute;
  bottom: 0;
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;
const TitleGenreContainer = styled.p`
  display: inline-block;
  margin: 0;
`;
const GenreTypes = styled.p`
  margin: 0;
  font-size: 0.8rem;
  color: ${colors.primaryColor};
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;
