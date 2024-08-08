'use client';
import { ApolloClient,  ApolloProvider, InMemoryCache, createHttpLink } from "@apollo/client";

const httpLink = createHttpLink({
    uri: process.env.GRAPHQL_API,
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YWIwZjM1MDk3NGI1MDJhMjc3NWNhNSIsInVzZXJuYW1lIjoiUGFyZmFpdCIsImVtYWlsIjoicGFyZmFpdEBnbWFpbC5jb20iLCJpYXQiOjE3MTI1MjQwNTIsImV4cCI6MTcxMjUyNzY1Mn0.ORdqS-cJMZSp1GQvLIH4HUx1zU26SXX8sDtc4dbHK7o`
    }
  });
  
  
  const client = new ApolloClient({
   link: httpLink,
   cache: new InMemoryCache(),
  
  });
export default client;

