import { useColorMode } from '@chakra-ui/react';
import { Avatar, Button, Center, Flex, Text, HStack, IconButton, WrapItem } from "@chakra-ui/react";
import { NextPage } from 'next'

// Import
import Story from '@/app/components/Story'


interface Props { }

const Index: NextPage<Props> = ({ }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return <div>
    <Story />
    <Text>
      salut
    </Text>
     <Button my={4} onClick={toggleColorMode}>
          {colorMode === "light" ? "Dark mode": "Light mode"}
        </Button>
  </div>
}

export default Index