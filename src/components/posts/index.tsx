import {
  Flex,
  IconButton,
  useColorMode,
  Text,
  Spacer,
  Box,
} from '@chakra-ui/react';
import { GrMore } from 'react-icons/gr';
import Profile from '../profile';
import { Image } from '@chakra-ui/react';

const Posts = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    // <Flex
    //   alignContent={'center'}
    //   justifyContent={'center'}
    //   flexDirection={'column'}
    //   p={5}
    //   w={{ base: '100%', sm: '100%', lg: '50%' }}
    // >
    //   <Flex justifyContent={'space-between'} width={'100%'} align={'center'}>
    //     <Flex alignItems={'center'}>
    //       <Profile />
    //       <Spacer />
    //       <Flex
    //         alignContent={'center'}
    //         flexDirection={'column'}
    //         align={'start'}
    //       >
    //         <Text
    //           fontWeight={'semibold'}
    //           fontSize={{ base: 'xs', md: 'sm', lg: 'md' }}
    //         >
    //           Most.barber.2j
    //         </Text>
    //         <Text fontSize={{ base: 'xs', md: 'sm', lg: 'md' }}>
    //           Audio d'origine
    //         </Text>
    //       </Flex>
    //     </Flex>
    //     <IconButton
    //       color={colorMode == 'light' ? 'black' : 'white'}
    //       bg={colorMode == 'light' ? 'white' : 'black'}
    //       icon={<GrMore />}
    //       aria-label={''}
    //     />
    //   </Flex>
    //   <Flex alignContent={'center'} justifyContent={'center'} width={'90%'}>
    //     <Box
    //       alignItems={'center'}
    //       m={2}
    //       justifyItems={'center'}
    //       boxSize={{ base: '100%', sm: '100%', lg: '80%' }}
    //     >
    //       <Image
    //         src="https://i.pinimg.com/564x/47/71/33/47713376bf139b945fbfaaffe4c9dc4d.jpg"
    //         alt="Dan Abramov"
    //       />
    //     </Box>
    //   </Flex>
    // </Flex>
    <Flex flexDirection={'column'} w={{ base: '90%', sm: '90%', md: '35%' }}>
      {/* <Flex w={'100%'} flexDirection={'column'}></Flex> */}
      <Flex mb={1} align={'center'} w={'100%'} justify={'space-between'}>
        <Flex align={'center'} flexDirection={'row'}>
          <Profile />
          <Text ml={1} variant="">
            bde_ucao
          </Text>
        </Flex>
        <IconButton
          color={colorMode == 'light' ? 'black' : 'white'}
          bg={colorMode == 'light' ? 'white' : 'black'}
          icon={<GrMore />}
          aria-label={''}
        />
      </Flex>
      <Flex bg={'green'} w={'100%'}>
        <Image
          src="https://i.pinimg.com/564x/47/71/33/47713376bf139b945fbfaaffe4c9dc4d.jpg"
          alt="Dan Abramov"
        />
      </Flex>
      <Flex></Flex>
    </Flex>
  );
};

export default Posts;
