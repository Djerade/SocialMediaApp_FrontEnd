'use client';
import { ColorModeScript } from '@chakra-ui/react';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';

import { fonts } from './fonts';
import { Providers } from './providers';
import theme from './theme';

import { JSX, ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import { AuthProvider } from '@/Context/authContext';

// const token = localStorage.getItem('token');

const httpLink = createHttpLink({
  uri: 'http://localhost:5000/graphql',
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
  return (
    <html lang="en" className={fonts.rubik.variable}>
      <body>
        <ApolloProvider client={client}>
          <ColorModeScript initialColorMode={theme.initialColorMode} />
          <Providers>{children}</Providers>
        </ApolloProvider>
      </body>
    </html>
  );
}
