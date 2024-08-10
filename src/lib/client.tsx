'use client';
import { ApolloClient,  ApolloProvider, InMemoryCache, createHttpLink } from "@apollo/client";

const httpLink = createHttpLink({
    uri: process.env.GRAPHQL_API,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });
  
  
  const client = new ApolloClient({
   link: httpLink,
   cache: new InMemoryCache(),
  
  });
export default client;

