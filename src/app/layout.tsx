'use client';
import {
  ColorModeScript,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { Box, Flex } from '@chakra-ui/react';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';

import { fonts } from './fonts';
import { Providers } from './providers';
import theme from './theme';
import { AuthProvider } from './Context/authContext';
import { AppProps } from 'next/app';
import { Component, JSX, ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';

const token = localStorage.getItem('token');

const httpLink = createHttpLink({
  uri: 'http://localhost:5000/graphql',
  // headers: {
  //   Authorization: `Bearer ${JSON.parse(token as string)}`,
  // },
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  function getLayout(arg0: JSX.Element): ReactNode {
    throw new Error('Function not implemented.');
  }

  return (
    <html lang="en" className={fonts.rubik.variable}>
      <body>
        <AuthProvider>
          <ColorModeScript initialColorMode={theme.initialColorMode} />
          <ApolloProvider client={client}>
            <Providers>{children}</Providers>
          </ApolloProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
