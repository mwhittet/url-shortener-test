import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider, Mutation } from "react-apollo";
import { RestLink } from "apollo-link-rest";
import { SHORTEN_LINK } from "./helpers/mutations";

import Entry from "./components/Entry/Entry";
import Result from "./components/Result/Result";

import { Column, GlobalStyle } from "./styled";

const baseURL = "http://localhost:3001";

const restLink = new RestLink({
  uri: baseURL
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  connectToDevTools: true,
  cache,
  link: restLink,
  onError: ({ networkError, graphQLErrors }) => {
    if (graphQLErrors)
      graphQLErrors.map(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );

    if (networkError) console.log(`[Network error]: ${networkError}`);
  }
});

const App = () => {
  const [url, setUrl] = useState("");
  const handleChange = e => {
    setUrl(e.target.value);
  };

  return (
    <ApolloProvider client={client}>
      <Mutation mutation={SHORTEN_LINK}>
        {(shortenLink, { data, error }) => (
          <>
            <GlobalStyle />
            <Column>
              <Entry
                shortenLink={shortenLink}
                handleChange={handleChange}
                url={url}
              />
            </Column>
            <Column>
              {error && url && <>{error.networkError.result}</>}
              {data && url && <Result baseURL={baseURL} data={data} />}
            </Column>
          </>
        )}
      </Mutation>
    </ApolloProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
