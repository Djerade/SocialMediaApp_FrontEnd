'use client'
import { ColorModeScript } from '@chakra-ui/react'
import { Box, Flex } from '@chakra-ui/react'
import { ApolloProvider } from "@apollo/client";





import NaveBar from '@/components/navebar';
import Sidebar from '@/components/sidebare';
import client from '@/lib/client';
import theme from '../theme';
import { Providers } from '../providers';
import { fonts } from '../fonts';





export default function RootLayout({
  children, 
}: {
  children: React.ReactNode,
  }) {
  
  // const { colorMode } = useColorMode();  
  return (
    <html lang='en' className={fonts.rubik.variable}>
      <body>
          <Flex  w={'100%'} flexDirection={"row"}>
            <Sidebar  />
            <Flex width={'100%'} flexDirection={'column'}>
              <NaveBar/> 
              <Box>
                {children}
              </Box>
            </Flex>
          </Flex>
      </body>
    </html>
  )
}