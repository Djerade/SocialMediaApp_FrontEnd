'use client'
//Moduls
import { ColorModeScript } from '@chakra-ui/react'
import { ApolloProvider } from "@apollo/client";

// Impots
import { fonts } from './fonts'
import { Providers } from './providers'
import theme from './theme'
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
              {children}
            </Providers>
          </ApolloProvider>
      </body>
    </html>
  )
}