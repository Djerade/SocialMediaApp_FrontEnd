'use client'
import { Box, Button, Center, Flex, Icon, IconButton, Text } from "@chakra-ui/react"
import Profile from "../profile/index"
import LogoName from "../logoName/LogoName+"
import LogoImage from "../logoName/logo";
import { useColorMode } from '@chakra-ui/react';
//
import { HiMiniHome } from "react-icons/hi2";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { IoSearchSharp } from "react-icons/io5";
import { FaRegCompass } from "react-icons/fa";
import { RiMovieLine } from "react-icons/ri";
import { BiMessageRounded } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { FaRegPlusSquare } from "react-icons/fa";

interface Item {
  name: String;
  value: String;
}
const Sidebar = () => {
  const listMenu = [
    {
      "name": "Poste",
      "value": "5842",
      "icon": HiMiniHome
    },
    {
      "name": "Followings",
      "value": "5842",
      "icon": IoSearchSharp
    },
    {
      "name": "Découvrir",
      "value": "5842",
      "icon": FaRegCompass 
    },
        {
      "name": "Réels",
      "value": "5842",
      "icon": RiMovieLine 
    },
    {
      "name": "Messages",
      "value": "5842",
      "icon": BiMessageRounded
    },
    {
      "name": "Notifications",
      "value": "5842",
      "icon": CiHeart 
    },
    {
      "name": "Créer  ",
      "value": "5842",
      "icon": FaRegPlusSquare
    },
    {
      "name": "profil",
      "value": "5842",
      "icon": FaRegCompass 
    }
  ];
  const { colorMode, toggleColorMode } = useColorMode();

 return <Flex  w='250px' h='100vh' display={{ base:"none", sm:"block" }} p={2} bg={colorMode== "dark" ? "black.100":" white.100"} boxShadow={"lg"}>
   <Flex flexDirection={'row'} align={'center'} width={"100%"} h={'50px'} justify={'center'} >
     <Flex m={2} pt={3} align={'center'} h={'50px'} w={"90px"}>
        <LogoName />  
     </Flex>
   </Flex>
   <Center pt={10} flexDirection={'column'} mt={8}>
     {
       listMenu.map((item) => (
         <Button  justifyContent={"flex-start"} bg={colorMode == "light"? "white": "black.100"} _hover={{ bg: 'gray.200' }} mb={2} w={'90%'} aria-label={""} >
           <Icon w={6} h={6} as={item.icon} me={4} />
           <Text textColor={ colorMode == "dark"? "whitesmoke":"black"} variant=''>
             {item.name}
           </Text>
         </Button>
       ) ) 
     }
   </Center>
    <IconButton position={"fixed"} bottom={0} icon={colorMode === "light" ? <CiDark /> : <CiLight /> } my={4} onClick={toggleColorMode} aria-label={""}>
          {colorMode === "light" ? "Dark mode": "Light mode"}
   </IconButton>

  </Flex>
}
export default Sidebar