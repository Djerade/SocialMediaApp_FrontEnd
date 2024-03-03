'use client'
import { Box, Button, Center, Flex, IconButton, Text } from "@chakra-ui/react"
import Profile from "../profile/index"
import LogoName from "../logoName/LogoName+"
import LogoImage from "../logoName/logo";
import { useColorMode } from '@chakra-ui/react';
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";

interface Item {
  name: String;
  value: String;
}
const Sidebar = () => {
  const items = [
    {
      "name": "Poste",
      "value": "5842",
    },
    {
      "name": "Followings",
      "value": "5842",
    },
    {
      "name": "Followers",
      "value": "5842",
    }
  ];
    const { colorMode, toggleColorMode } = useColorMode();

 return <Flex w='250px' h='100vh' display={{ base:"none", sm:"block" }} p={2} bg='white.100' boxShadow={"lg"}>
       <Flex flexDirection={'row'} align={'center'} width={"100%"} h={'50px'} justify={'center'} >
         <Flex m={2} align={'center'} h={'50px'} w={"90px"}>
            <LogoName />
         </Flex>
        </Flex>
      <Center flexDirection={'column'} mt={8}>
        
   </Center>
    <IconButton position={"fixed"} bottom={0} icon={colorMode === "light" ? <CiDark /> : <CiLight /> } my={4} onClick={toggleColorMode} aria-label={""}>
          {colorMode === "light" ? "Dark mode": "Light mode"}
   </IconButton>

  </Flex>
}
export default Sidebar