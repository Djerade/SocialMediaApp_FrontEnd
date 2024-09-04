'use client'
//Moduls
import { Button, Center, Box, Flex, Icon, IconButton, Text, Link } from "@chakra-ui/react"
import LogoName from "../logoName/LogoName+"
import { useColorMode } from '@chakra-ui/react';
import NextLink from "next/link";


//Import
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { listMenu } from "@/constants";
import {  useRouter } from "next/navigation";
import { Interface } from "readline";


const Sidebar = () => {
 const { colorMode, toggleColorMode } = useColorMode();
 let router = useRouter();
 let link = window.location.pathname
 console.log(link);
 
 const naveItem = (<>
       {
         listMenu.map((item: any) => (
           <Link
              w={'full'}
              key={item.name}
              href={item.path}
              justifyContent={'flex-start'}
             >
            <Button   justifyContent={"flex-start"} bg={colorMode == "light"? "white": "black.100"} _hover={{ bg: 'gray.200' }} mb={2} w={'90%'} aria-label={""} >
                <Icon w={6} h={6} as={item.icon} me={4} />
                <Text textColor={ colorMode == "dark"? "whitesmoke":"black"} variant=''>
                  {item.name}
                </Text>
             </Button>
          </Link> 
         ) ) 
       }
 </>
 );
 
 return( 
  <Flex  left="0" top="0" w="250px" h="100%"  position="fixed" display={{ base:"none", sm:"none", md:"block" }}    p={2} bg={colorMode== "dark" ? "black.100":" white.100"} boxShadow={"lg"}>
    <Flex flexDirection={'row'} align={'center'} width={"100%"} h={'50px'} justify={'center'} >
      <Flex m={2} pt={3} align={'center'} h={'50px'} w={"90px"}>
         <LogoName /> 
      </Flex>
    </Flex>
    <Center  as="nav" pt={10} flexDirection={'column'} mt={8}>
      {naveItem}
    </Center>
    <IconButton position={"fixed"} bottom={0} icon={colorMode === "light" ? <CiDark /> : <CiLight /> } my={4} onClick={toggleColorMode} aria-label={""}>
           {colorMode === "light" ? "Dark mode": "Light mode"}
    </IconButton>
   </Flex>);
}
export default Sidebar