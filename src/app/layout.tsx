// app/layout.tsx
import { ColorModeScript } from '@chakra-ui/react'
import { Box, Flex } from '@chakra-ui/react'
import Sidebar from './components/sidebare'
import { fonts } from './fonts'
import { Providers } from './providers'
import NaveBar from './components/navebar'
import theme from './theme'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en' className={fonts.rubik.variable}>
      <body>
        <ColorModeScript  initialColorMode={theme.initialColorMode}  />
        <Providers>
          <Flex w={'100%'} flexDirection={"row"}>
            <Sidebar />
            <Flex width={'100%'} flexDirection={'column'}>
              <NaveBar/> 
              <Box>
                {children}
              </Box>
            </Flex>
          </Flex>
        </Providers>
      </body>
    </html>
  )
}