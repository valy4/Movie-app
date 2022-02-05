import React from "react";
import styled from "styled-components";
import { getPopularMovies, getGenre, getSearchMovies } from "../../fetcher";
import SearchFilters from "../../components/searchfilter";
import SearchBar from "../../components/searchbar";
import MovieList from "../../components/movielist";
import MenuHamburger from "../../components/sidenavbar/menuhamburger";

export default class Discover extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: "",
      year: 0,
      results: [],
      totalCount: 0,
      genreOptions: [],
      ratingOptions: [
        { id: 7.5, name: 7.5 },
        { id: 8, name: 8 },
        { id: 8.5, name: 8.5 },
        { id: 9, name: 9 },
        { id: 9.5, name: 9.5 },
        { id: 10, name: 10 },
      ],
      languageOptions: [
        { id: "GR", name: "Greek" },
        { id: "EN", name: "English" },
        { id: "RU", name: "Russian" },
        { id: "PO", name: "Polish" },
      ],
    };
  }

  // Write a function to preload the popular movies when page loads & get the movie genres

  async componentDidMount() {
    const rest = (await getPopularMovies()).data.results;
    this.setState({ results: [...rest] });

    const genres = (await getGenre()).data.genres;
    this.setState({ genreOptions: [...genres] });
  }

  async searchMovies(keyword, year) {
    const found = await getSearchMovies(keyword);
    const foundData = found.data.results;
    this.setState({ results: [...foundData], totalCount: foundData.length });
  }

  // Write a function to trigger the API request and load the search results based on the keyword and year given as parameters

  render() {
    const {
      genreOptions,
      languageOptions,
      ratingOptions,
      totalCount,
      results,
    } = this.state;
    console.log("Props", this.props);
    return (
      <DiscoverWrapper>
        <MobileView>
          <MobileHeader>
            <MenuHamburger sideBarToggle={() => this.props.sideBarToggle()} />
            <MobilePageTitle>Discover</MobilePageTitle>{" "}
            {/* MobilePageTitle should become visible on small screens & mobile devices*/}
          </MobileHeader>
          <SearchBar />
        </MobileView>

        <MovieFilters>
          <SearchFilters
            genres={genreOptions}
            ratings={ratingOptions}
            languages={languageOptions}
            searchMovies={(keyword, year) => this.searchMovies(keyword, year)}
          />
        </MovieFilters>
        <MovieResults>
          {totalCount > 0 && <TotalCounter>{totalCount} results</TotalCounter>}
          <MovieList movies={results || []} genres={genreOptions || []} />
        </MovieResults>
      </DiscoverWrapper>
    );
  }
}

const DiscoverWrapper = styled.main`
  padding: 60px 35px;
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0;
    padding-left: 0;
  }
`;

const TotalCounter = styled.div`
  font-weight: 900;
  padding-left: 45px;
  padding-bottom: 10px;
`;

const MovieResults = styled.div`
  @media (max-width: 768px) {
  } ;
`;

const MovieFilters = styled.div`
  @media (max-width: 768px) {
  } ;
`;

const MobilePageTitle = styled.header`
  display: none;
  @media (max-width: 768px) {
    margin-left: 2rem;
    display: flex;
    font-size: 2.5rem;
    font-weight: 600;
  } ;
`;
const MobileHeader = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 0.9rem;
    margin-left: 0.9rem;
  }
`;
const MobileView = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
