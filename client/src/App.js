import React, { useState } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Link, Redirect } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Navbar, Nav } from "react-bootstrap";
import { FaMoon, FaSun } from "react-icons/fa";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes";

// Components

// Pages
import Main from "./pages/Main";
import Intro from "./pages/Intro";
import AboutMe from "./pages/AboutMe";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const StyledApp = styled.div``;

function App() {  
  const [theme, setTheme] = useState("light");

  const themeDark = () => {
    setTheme("dark");
  }

  const themeLight = () => {
    setTheme("light");
  }

  return (
    <ApolloProvider client={client}>
      <Router>
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme }>
          <GlobalStyles/>
          <div>
            <Navbar bg="none" variant="dark" className="mb-3">
              <Container>
                <Nav className="ms-auto">
                    <Link className="nav-link mx-2" to={`/intro`}>Introduction</Link>
                    <Link className="nav-link mx-2" to={`/projects`}>Projects</Link>
                    <Link className="nav-link mx-2" to={`/about`}>About Me</Link>
                    <div className="mb-3 me-2 text-end">
                      <Button className="btn-success themeL mx-1" onClick={() => themeLight()}><FaSun/></Button>
                      <Button className="btn-success themeD mx-1" onClick={() => themeDark()}><FaMoon/></Button>
                    </div>
                </Nav>
              </Container>
            </Navbar>
          </div>
          <StyledApp className="mainBody">
            <Route exact path="/">
              <Intro/>
            </Route>
            <Route exact path="/intro">
              <Intro/>
            </Route>
            <Route exact path="/projects">
              <Main/>
            </Route>
            <Route exact path="/about">
              <AboutMe/>
            </Route>
          </StyledApp>
        </ThemeProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
