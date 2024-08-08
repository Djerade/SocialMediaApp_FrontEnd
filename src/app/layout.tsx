'use client'
import { ColorModeScript } from '@chakra-ui/react'
import { Box, Flex } from '@chakra-ui/react'
import { ApolloProvider } from "@apollo/client";


import { fonts } from './fonts'
import { Providers } from './providers'

import theme from './theme'
import NaveBar from '@/components/navebar';
import Sidebar from '@/components/sidebare';
import client from '@/lib/client';





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
                <Sidebar  />
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