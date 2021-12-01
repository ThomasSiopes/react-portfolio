import React, { useState } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Link, Redirect } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Navbar, Nav, Row, Col } from "react-bootstrap";
import { FaMoon, FaSun, FaGithub, FaLinkedinIn } from "react-icons/fa";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes";
import { AiOutlineMail } from "react-icons/ai"

// Components

// Pages
import Main from "./pages/Main";
import AllProjects from "./pages/AllProjects";

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

  const handleChange = () => {
    let currentTheme = document.getElementById("theme-switch");
    if(currentTheme && currentTheme.checked) { themeDark() } else { themeLight() }
  }

  return (
    <ApolloProvider client={client}>
      <Router>
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme }>
          <GlobalStyles/>
          <section className="fixed-top">
            <Navbar bg="navbar" variant="dark" className="font-questrial">
              <Container>
                <span className="float-left d-xs-inline d-md-none">
                  <Button className="rounded-0 btn-contact-sm btn-github" href="https://github.com/ThomasSiopes"><FaGithub/></Button>
                  <Button className="rounded-0 btn-contact-sm btn-linkedin" href="https://www.linkedin.com/in/thomas-siopes-001707207/"><FaLinkedinIn/></Button>
                  <Button className="rounded-0 btn-contact-sm btn-email" href="mailto:t.siopes00@yahoo.com"><AiOutlineMail/></Button>
                </span>
                <Nav className="ms-auto">
                    <Link className="nav-link mx-2 d-none d-md-inline" to={`/main`}>Home</Link>
                    <Link className="nav-link mx-2 d-none d-md-inline" to={`/projects`}>Projects</Link>

                    <div className="d-flex align-items-center">
                      <FaSun className="genText mx-2"/>
                      <label className="switch">
                        <input type="checkbox" id="theme-switch" onClick={() => handleChange()}/>
                        <span className="slider round"/>
                      </label>
                      <FaMoon className="genText mx-2"/>
                    </div>
                </Nav>
              </Container>
            </Navbar>
          </section>
          <div>
            <span id="contact-buttons" className="fixed-top d-none d-md-inline">
              <ul className="noDecor ps-0 mb-0">
                <li><Button className="btn-contact btn-github" href="https://github.com/ThomasSiopes" ><FaGithub/></Button></li>
                <li><Button className="btn-contact btn-linkedin" href="https://www.linkedin.com/in/thomas-siopes-001707207/" ><FaLinkedinIn/></Button></li>
                <li><Button className="btn-contact btn-email pt-1 pb-2" href="mailto:t.siopes00@yahoo.com"><AiOutlineMail/></Button></li>
              </ul>
            </span>
            <StyledApp className="mainBody">
              <Route exact path="/">
                <Main/>
              </Route>
              <Route exact path="/main">
                <Main/>
              </Route>
              <Route exact path="/projects">
                <AllProjects/>
              </Route>
            </StyledApp>
          </div>
        </ThemeProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
