import { Box, Button, Flex, IconButton, Input } from '@chakra-ui/react'
import { NextPage } from 'next'
import Logo from '@/app/components/logoName/logoName'
import logo from '@/app/components/logoName/logo'
import LogoImage from '@/app/components/logoName/logo'
import LogoName from '@/app/components/logoName/logoName'

import { GrSend } from "react-icons/gr";
import { RiNotification4Line } from "react-icons/ri";
import { IoMenuSharp } from "react-icons/io5";
import { IoAddSharp } from "react-icons/io5";

interface Props {}

const Index: NextPage<Props> = ({}) => {
    return <Box>
      <Flex p={3} boxShadow={'lg'}  h={'70px'} w={"100%"}>
        <Flex align={'center'}  w={"20%"}>
          <LogoImage />
          <Flex  align={'center'} ml={1} w={"90px"}>
            <LogoName />
          </Flex>
        </Flex>
        <Flex justify={'space-between'} w={"55%"}>
          <Input w={'50%'} placeholder='Search' borderRadius={15} />
          <Button leftIcon={<IoAddSharp/>} color={'white'} borderRadius={'30px'} bgGradient='linear(to-l, #7928CA, #FF0080)'  >
            Create new post
          </Button>
        </Flex>
        <Flex justify={'end'}  align={'end'} width={'25%'}>
          <IconButton mr={5} boxShadow={'lg'} borderRadius={'30px'} bg={'white'} _hover={{ bg: "gray" }} color={'gray'} icon={<GrSend />} aria-label={''} />
          <IconButton mr={5} boxShadow={'lg'} borderRadius={'30px'} bg={'white'} _hover={{ bg: "gray" }} color={'gray'} icon={<RiNotification4Line/>} aria-label={''} />
          <IconButton mr={5} boxShadow={'lg'}  borderRadius={'30px'}  bg={'white'}  _hover={{ bg: "gray" }} color={'gray'} icon={<IoMenuSharp />} aria-label={''} />
        </Flex>
      </Flex>
  </Box>
}

export default Index