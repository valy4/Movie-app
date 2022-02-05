import React from "react";
import styled, { css } from "styled-components";
import "./sidenavbar.css";
import { NavLink as Link } from "react-router-dom";
import * as colors from "../../colors";
import Arrow from "../../images/arrow-icon.png";
import SearchWhite from "../../images/search-icon-white.png";

export default class SideNavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: true,
    };
  }
  /* Write the necessary functions to show and hide the side bar on small devices */

  render() {
    return (
      <SideNavBarCont className={this.props.isOpen ? "hidden" : "visible"}>
        {/* Implement a hamburger icon slide in effect for small devices */}

        <SideNavMainLink className="menu_nav_link main_nav_link" to="/" exact>
          Wesley
          <NavIcon src={Arrow}></NavIcon>
        </SideNavMainLink>
        <SideNavMainLink
          className="menu_nav_link discover-nav-link"
          to="/discover"
        >
          Discover
          <NavIcon src={SearchWhite}></NavIcon>
        </SideNavMainLink>
        <SideNavHeader>
          <HeaderText>Watched</HeaderText>
        </SideNavHeader>
        <hr />
        <NavLink className="menu_nav_link" to="/watched/movies">
          Movies
        </NavLink>
        <NavLink className="menu_nav_link" to="/watched/tv-shows">
          Tv Shows
        </NavLink>
        <SideNavHeader>
          <HeaderText>Saved</HeaderText>
        </SideNavHeader>
        <hr />
        <NavLink className="menu_nav_link" to="/saved/movies">
          Movies
        </NavLink>
        <NavLink className="menu_nav_link" to="/saved/tv-shows">
          Tv Shows
        </NavLink>
      </SideNavBarCont>
    );
  }
}

const SideNavBarCont = styled.div`
  position: fixed;
  z-index: 9;
  width: 260px;
  height: 100%;
  background-color: ${colors.sideNavBar};

  @media (max-width: 768px) {
    /* visibility: hidden; */
    margin-top: 50px;
  } ;
`;

const SideNavMainLink = styled(Link)`
  position: relative;
  display: block;
  padding: 25px 35px;
  font-size: 1.6em;
  font-weight: 700;
  color: white;
`;

const NavIcon = styled.img`
  position: absolute;
  right: 35px;
  top: 40%;
`;

const SideNavHeader = styled.div`
  padding: 25px 35px;
`;

const HeaderText = styled.div`
  position: relative;
  display: block;

  font-size: 1.6em;
  font-weight: 700;
  color: white;
`;

const NavLink = styled(Link)`
  display: block;
  font-size: 1em;
  padding-right: 35px;
  padding-left: 35px;
  padding-bottom: 12px;
  color: white;
  font-weight: lighter;
`;
