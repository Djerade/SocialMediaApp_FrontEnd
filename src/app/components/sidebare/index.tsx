'use client'
import { Box, Center, Flex, Text } from "@chakra-ui/react"
import Profile from "../profile/index"
import LogoName from "../logoName/LogoName+"
import LogoImage from "../logoName/Logo";

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

 return <Flex
        w='250px'
        h='100vh'
        display={{ base:"none", sm:"block" }}
        p={2}
        bg='white.100'
        boxShadow={"lg"}>
       <Flex flexDirection={'row'} align={'center'} width={"100%"} h={'50px'} justify={'center'} >
          <LogoImage />
          <Flex ml={2} align={'center'} h={'50px'} w={"90px"}>
            <LogoName />
         </Flex>
      </Flex>
      
      <Center flexDirection={'column'} mt={8}>
        <Profile />
        <Flex mt={'2'} justify={'center'} align={'center'} flexDirection={"column"}>
          <Text fontFamily={"Segoe UI"} fontSize={"lg"} fontWeight={'bold'} color={'black'} >
            Vera Cheery
          </Text>
          <Text fontFamily={"Segoe UI"} fontSize={'xs'} fontWeight={'normal'} color={'gray'} >
            @cheery
          </Text>
     </Flex>
     <Flex pr={5} pl={5}  w={'100%'} justify={'space-between'} align={'center'} >
       {
        items.map((item: Item) => (
          <Flex  flexDirection={'column'}  alignItems={'center'}   >
            <Text fontFamily={"Segoe UI"} fontSize={'sm'} fontWeight={'semibold'} color={'Black'} >
             {item.value}
            </Text>
            <Text fontFamily={"Segoe UI"} fontSize={'xs'} fontWeight={''} color={'gray'} >
             {item.name}
            </Text>
          </Flex>
         ))
       }
     </Flex>
      </Center>
  </Flex>
}
export default Sidebar