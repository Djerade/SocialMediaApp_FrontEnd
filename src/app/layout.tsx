// app/layout.tsx
import { ColorModeScript, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { Box, Flex } from '@chakra-ui/react'
import { ApolloClient,  ApolloProvider, InMemoryCache } from "@apollo/client";

import Sidebar from './components/sidebare'
import { fonts } from './fonts'
import { Providers } from './providers'
import NaveBar from './components/navebar'
import theme from './theme'


const client = new ApolloClient({
  uri:'http://localhost:5000/graphql',
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