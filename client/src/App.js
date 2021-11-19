import React, { useState } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from "react-bootstrap";
import { FaMoon, FaSun } from "react-icons/fa";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes";

// Components

// Pages
import Home from "./pages/Main";

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

  // const themeToggler = () => {
  //   theme === "light" ? setTheme("dark") : setTheme("light");
  // }

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
          <div className="mt-1">
            <Button className="btn-success themeL mx-1" onClick={() => themeLight()}><FaSun/></Button>
            <Button className="btn-success themeD mx-1" onClick={() => themeDark()}><FaMoon/></Button>
          </div>
          <GlobalStyles/>
          <StyledApp className="mainBody">
            <Route exact path="/">
              <Home/>
            </Route>
          </StyledApp>
        </ThemeProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;