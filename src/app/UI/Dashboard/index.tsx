import { useColorMode } from '@chakra-ui/react';
import { Avatar, Button, Center, Flex, Text, HStack, IconButton, WrapItem } from "@chakra-ui/react";
import { NextPage } from 'next'

// Import
import Story from '@/app/components/Story'


interface Props { }

const Index: NextPage<Props> = ({ }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return <div>
    {/* <Story /> */}

  </div>
}

export default Index