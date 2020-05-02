import React from "react";
import ApolloClient from "apollo-boost";
import {ApolloProvider} from '@apollo/react-hooks'
// import ApolloClient from "apollo-client";
// import { ApolloProvider } from "react-apollo";
import Routes from "./Routes";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  );
}

export default App;

// there are two kinds of people in this world
// 1. Those who can extrapolate from incomplete data.
