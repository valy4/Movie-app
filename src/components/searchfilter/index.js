import React from "react";
import styled, { css } from "styled-components";
import ExpandableFilter from "../../components/expandablefilter";
import SearchBar from "../../components/searchbar";

export default class SearchFilters extends React.Component {
  render() {
    const { genres, ratings, languages, searchMovies } = this.props;

    return (
      <FiltersWrapper>
        <SearchFiltersCont id="search_inputs_cont" marginBottom>
          {/* Implement a "SearchBar" component and re-use it for the keyword and the year inputs */}
          <SearchBar searchMovies={searchMovies} />
        </SearchFiltersCont>
        <SearchFiltersCont>
          <CategoryTitle>Movies</CategoryTitle>
          {/* Implement a component called "ExpandableFilter" and apply it to all filter categories */}
          <ExpandableFilter items={genres} title="genre(s)" />
          <ExpandableFilter items={ratings} title="min. vote" />
          <ExpandableFilter items={languages} title="language" />
        </SearchFiltersCont>
      </FiltersWrapper>
    );
  }
}

const FiltersWrapper = styled.div`
  position: relative;
  width: 260px;
  @media (max-width: 768px) {
    display: none;
  } ;
`;

const SearchFiltersCont = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 3px;
  transition: all 0.3s ease-in-out;

  ${(props) =>
    props.marginBottom &&
    css`
      margin-bottom: 15px;
    `}
  @media(max-width: 768px) {
    display: none;
  } ;
`;

const CategoryTitle = styled.div`
  font-weight: 900;
  padding-bottom: 10px;
`;
