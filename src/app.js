import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import SideNavBar from "./components/sidenavbar";
import Discover from "./pages/discover";
import "./css/app.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: true,
    };
  }

  sideBarToggle() {
    this.setState((prevState) => {
      return { isOpen: !prevState.isOpen };
    });
  }

  render() {
    return (
      <Router>
        <PageContainer>
          <SideNavBar {...this.props} isOpen={this.state.isOpen} />
          <ContentWrapper>
            <Switch>
              <Route
                path="/discover"
                render={(props) => (
                  <Discover
                    {...props}
                    sideBarToggle={() => this.sideBarToggle()}
                  />
                )}
              />
            </Switch>
          </ContentWrapper>
        </PageContainer>
      </Router>
    );
  }
}

const ContentWrapper = styled.main`
  padding-left: 280px;
  @media (max-width: 768px) {
    padding-left: 0;
  } ;
`;

const PageContainer = styled.main`
  overflow-x: hidden;

`;
