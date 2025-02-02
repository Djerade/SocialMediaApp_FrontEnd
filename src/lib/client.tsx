'use client';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';

const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

const httpLink = createHttpLink({
  uri: process.env.GRAPHQL_API,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
export default client;
