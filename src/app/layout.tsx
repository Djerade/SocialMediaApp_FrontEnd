'use client'
import { ColorModeScript, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { Box, Flex } from '@chakra-ui/react'
import { ApolloClient,  ApolloProvider, InMemoryCache, createHttpLink } from "@apollo/client";

import Sidebar from './components/sidebare'
import { fonts } from './fonts'
import { Providers } from './providers'
import NaveBar from './components/navebar'
import theme from './theme'

const httpLink = createHttpLink({
  uri: 'http://localhost:5000/graphql',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YWIwZjM1MDk3NGI1MDJhMjc3NWNhNSIsInVzZXJuYW1lIjoiUGFyZmFpdCIsImVtYWlsIjoicGFyZmFpdEBnbWFpbC5jb20iLCJpYXQiOjE3MTI1MDk5NDIsImV4cCI6MTcxMjUxMzU0Mn0.DYrhkJmXzamtWOOHiFBTqOhxT9p5Of_5L1ozVpid4j4`
  }
});


const client = new ApolloClient({
 link: httpLink,
 cache: new InMemoryCache(),

});




export default function RootLayout({
  children, 
}: {
  children: React.ReactNode,
  }) {
  
  // const { colorMode } = useColorMode();
  return (
    <html lang='en' className={fonts.rubik.variable}>
      <body>
        <ColorModeScript initialColorMode={theme.initialColorMode} />
        <ApolloProvider client={client}>
          <Providers>
              <Flex  w={'100%'} flexDirection={"row"}>
                <Sidebar />
                <Flex width={'100%'} flexDirection={'column'}>
                  <NaveBar/> 
                  <Box>
                    {children}
                  </Box>
                </Flex>
              </Flex>
            </Providers>
          </ApolloProvider>
      </body>
    </html>
  )
}