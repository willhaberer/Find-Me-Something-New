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
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

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
            <Route exact path="/spotify" element={<Spotify />} />
            <Route exact path="/soundcloud" element={<Soundcloud />} />
            <Route exact path="/youtube" element={<Youtube />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
