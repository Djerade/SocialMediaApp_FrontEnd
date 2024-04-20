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
import Sidebar from '@/components/sidebare';
import NaveBar from '@/components/navebar';

const httpLink = createHttpLink({
  uri: 'http://localhost:5000/graphql',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YWIwZjM1MDk3NGI1MDJhMjc3NWNhNSIsInVzZXJuYW1lIjoiUGFyZmFpdCIsImVtYWlsIjoicGFyZmFpdEBnbWFpbC5jb20iLCJpYXQiOjE3MTI1MjQwNTIsImV4cCI6MTcxMjUyNzY1Mn0.ORdqS-cJMZSp1GQvLIH4HUx1zU26SXX8sDtc4dbHK7o`,
  },
});

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
        <ColorModeScript initialColorMode={theme.initialColorMode} />
        <ApolloProvider client={client}>
          <Providers>
            <Flex w={'100%'} flexDirection={'row'}>
              <Sidebar />
              <Flex width={'100%'} flexDirection={'column'}>
                <NaveBar />
                <Box>{children}</Box>
              </Flex>
            </Flex>
          </Providers>
        </ApolloProvider>
      </body>
    </html>
  );
}
