'use client'
import { Box, Center, Flex, Text } from "@chakra-ui/react"
import Profile from "../profile/index"
import LogoName from "../logoName/LogoName+"
import LogoImage from "../logoName/logo";

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

 return <Flex w='250px' h='100vh' display={{ base:"none", sm:"block" }} p={2} bg='white.100' boxShadow={"lg"}>
       <Flex flexDirection={'row'} align={'center'} width={"100%"} h={'50px'} justify={'center'} >
         <Flex m={2} align={'center'} h={'50px'} w={"90px"}>
            <LogoName />
         </Flex>
        </Flex>
      <Center flexDirection={'column'} mt={8}>
        
      </Center>
  </Flex>
}
export default Sidebar