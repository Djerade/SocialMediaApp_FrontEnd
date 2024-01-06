import { Center, Flex, Text } from "@chakra-ui/react"
import LogoImage from "../logoName/logo"
import Profile from "../profile/index"
import LogoName from "../logoName/logoName"

const Sidebar = () => {
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
            Vera Cherry
          </Text>
          <Text fontFamily={"Segoe UI"} fontSize={'xs'} fontWeight={'normal'} color={'gray'} >
            Vera Cherry
          </Text>
        </Flex>
      </Center>
  </Flex>
}
export default Sidebar