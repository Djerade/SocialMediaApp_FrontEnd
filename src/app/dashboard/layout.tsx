'use client'
//Moduls
import { Box, Flex, useColorMode } from '@chakra-ui/react'

//Imports
import NaveBar from '@/components/navebar';
import Sidebar from '@/components/sidebare';
import { fonts } from '../fonts';

export default function RootLayout({
  children, 
}: {
  children: React.ReactNode,
  }) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <html lang='en' className={fonts.rubik.variable}>
      <body>
          <Flex textColor={colorMode == 'light' ? 'black': 'white'} bg={ colorMode == "dark" ? "black": "white"} w={'100%'} flexDirection={"row"}>
            <Sidebar  />
            <Flex ml={{md:'250px', lg:'250px'}} width={'100%'} flexDirection={'column'}>  
              {/* <NaveBar/>  */}
              <Box>
                {children}
              </Box>
            </Flex>
          </Flex>
      </body>
    </html>
  )
}