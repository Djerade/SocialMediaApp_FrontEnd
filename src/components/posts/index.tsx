import {
  Flex,
  IconButton,
  useColorMode,
  Text,
  Spacer,
  WrapItem,
  Avatar,
  Box,
  Textarea,
} from '@chakra-ui/react';
import { GrMore } from 'react-icons/gr';
import { FiMessageCircle } from "react-icons/fi";
import { IoIosSend, IoIosHeartEmpty } from "react-icons/io";
import { FaRegBookmark } from "react-icons/fa";
import Profile from '../profile';
import { Image } from '@chakra-ui/react';

const Posts = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex  align={'center'} justify ={"center"} flexDirection={'column'} w={{ base: '90%', sm: '90%', md: '35%' }}>
      <Flex mb={1} align={'center'} w={'100%'} justify={'space-between'}>
        <Flex align={'center'} flexDirection={'row'}>
          <Profile />
          <Text fontWeight ='semibold' ml={1} variant="">
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
      <Flex mb={1} bg={'green'} w={'100%'}>
        <Image
          src="https://i.pinimg.com/564x/47/71/33/47713376bf139b945fbfaaffe4c9dc4d.jpg"
          alt="pp"
        />
      </Flex>
      <Flex flexDirection={'column'}>
        <Flex align={'center'} justify={'space-between'}>
          <Flex flexDirection={'row'}>
            <IconButton
              color={colorMode == 'light' ? 'black' : 'white'}
              bg={colorMode == 'light' ? 'white' : 'black'}
              icon={<IoIosHeartEmpty />}
              aria-label={''}
            />
            <IconButton
              color={colorMode == 'light' ? 'black' : 'white'}
              bg={colorMode == 'light' ? 'white' : 'black'}
              icon={<FiMessageCircle />}
              aria-label={''}
            />
            <IconButton
              color={colorMode == 'light' ? 'black' : 'white'}
              bg={colorMode == 'light' ? 'white' : 'black'}
              icon={<IoIosSend />}
              aria-label={''}
            />
          </Flex>
          <IconButton
            color={colorMode == 'light' ? 'black' : 'white'}
            bg={colorMode == 'light' ? 'white' : 'black'}
            icon={<FaRegBookmark  />}
            aria-label={''}
          />
        </Flex>
        <Flex flexDirection={'column'}>
          <Flex mt={1} mb={1} align='center' flexDirection={'row'}>
              <WrapItem borderRadius={'60px'} bgGradient='linear(to-l, #7928CA, #FF0080 )' p={1}>
                <Avatar
                    // name='mon profile'
                    src='https://bit.ly/prosper-baba'
                    size={'10px'}
                     w="20px"
                     h="20px"
                />
              </WrapItem>
            <Text>
              71 J'aime
            </Text>
          </Flex>
          <Text fontWeight ='semibold' >bde_ucao, un bon moment passé ensemble pendant 3 jours</Text>
        <Text textColor={"gray.500"} fontSize ={"12px"}>Voir 1 commentaire</Text>
         <Flex mt={1} mb={1} justify={'space-between'} flexDirection={"row"}>
            <Text textColor={"gray.500"} fontSize ={"12px"} >Ajouter un commentaire...</Text>
            <IconButton
               color={colorMode == 'light' ? 'gray.500' : 'white'}
               bg={colorMode == 'light' ? 'white' : 'black'}
               icon={<FaRegBookmark  />}
               size={"12px"}
               aria-label={''}
             />
         </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Posts;
