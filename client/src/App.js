import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Spotify from "./pages/Spotify";
import Soundcloud from "./pages/Soundcloud";
import Youtube from "./pages/Youtube";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Navbar />
        <div id="body">
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
          <Route exact path="/spotify">
            <Spotify />
          </Route>
          <Route exact path="/soundcloud">
            <Soundcloud />
          </Route>
          <Route exact path="/youtube">
            <Youtube />
          </Route>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
