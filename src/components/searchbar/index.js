import React from "react";
import styled from "styled-components";
import * as colors from "../../colors";
import SearchIcon from "../../images/search-icon-yellow.png";
import CalendarIcon from "../../images/year-icon.png";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.searchTimeoutId = 0;

    this.handleSearch = this.handleSearch.bind(this);

    this.state = {
      keyword: "",
      delayedKeyword: "",
      isFetching: false,
    };
  }

  handleSearch(e) {
    this.setState({ keyword: e.target.value });
    this.setState({ isFetching: true });

    clearTimeout(this.searchTimeoutId);

    this.searchTimeoutId = setTimeout(() => {
      if (this.state.keyword !== this.state.delayedKeyword) {
        this.props.searchMovies(this.state.keyword);
      }

      this.setState({ delayedKeyword: this.state.keyword });
      this.setState({ isFetching: false });
    }, 500);
  }

  render() {
    return (
      <SearchBarWrapper>
        <SearchField>
          <ImgSearchIcon src={SearchIcon} />
          <InputSearch
            type="text"
            placeholder="Search..."
            onChange={this.handleSearch}
          />
        </SearchField>
        <CalendarField>
          <ImgCalendarIcon src={CalendarIcon} />
          <InputCalendar type="text" placeholder="Year of release" />
        </CalendarField>
      </SearchBarWrapper>
    );
  }
}
const SearchBarWrapper = styled.div`
  width: 260px;
`;
const SearchField = styled.div`
  position: relative;
  padding: 0;
  margin: 0;
  margin-bottom: 15px;
  @media (max-width: 768px) {
    margin-left: 50px;
  } ;
`;
const InputSearch = styled.input`
  border-style: none;
  border-bottom: 2px solid ${colors.primaryColor};
  width: auto;
  height: 20px;
  margin: 0;
  padding-left: 50px;
  outline-style: none;
  @media (max-width: 768px) {
    width: 100%;
  } ;
`;
const ImgSearchIcon = styled.img`
  position: absolute;
  bottom: 8px;
  left: 10px;
  width: 20px;
  height: 20px;
`;
const InputCalendar = styled.input`
  border-style: none;
  border-bottom: 2px solid ${colors.primaryColor};
  width: auto;
  height: 20px;
  margin: 0;
  padding-left: 50px;
  outline-style: none;
  @media (max-width: 768px) {
    display: none;
  } ;
`;
const ImgCalendarIcon = styled.img`
  position: absolute;
  bottom: 8px;
  left: 10px;
  width: 20px;
  height: 20px;
  @media (max-width: 768px) {
    display: none;
  } ;
`;
const CalendarField = styled.div`
  position: relative;
  padding: 0;
  margin: 0;
`;
