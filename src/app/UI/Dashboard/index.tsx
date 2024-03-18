import { useColorMode } from '@chakra-ui/react';
import { Avatar, Button, Center, Flex, Text, HStack, IconButton, WrapItem } from "@chakra-ui/react";
import { NextPage } from 'next'

// Import
import Story from '@/app/components/Story'
import posts from '@/app/components/posts'
import Storie from '@/app/components/section_profile';


interface Props { }

const Index: NextPage<Props> = ({ }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return <div>
    <Flex flexDirection={"row"}>
      <Story />
      <Storie/>
    </Flex>
  </div>
}

export default Index