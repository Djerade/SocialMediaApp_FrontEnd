'use client';
import {
  Box,
  Button,
  Center,
  Flex,
  Icon,
  IconButton,
  List,
  ListItem,
  Text,
} from '@chakra-ui/react';
import Profile from '../profile/index';
import LogoName from '../logoName/LogoName+';
import LogoImage from '../logoName/logo';
import { useColorMode } from '@chakra-ui/react';
//
import { HiMiniHome } from 'react-icons/hi2';
import { CiLight } from 'react-icons/ci';
import { CiDark } from 'react-icons/ci';
import { IoSearchSharp } from 'react-icons/io5';
import { FaRegCompass } from 'react-icons/fa';
import { RiMovieLine } from 'react-icons/ri';
import { BiMessageRounded } from 'react-icons/bi';
import { CiHeart } from 'react-icons/ci';
import { FaRegPlusSquare } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import Navitem from './Navitem';
interface Item {
  label: String;
  path: String;
  type: String;
  icon: String;
}
const Sidebar = () => {
  const router = useRouter();
  const listMenu = [
    {
      type: 'link',
      label: 'Poste',
      icon: HiMiniHome,
      path: '../../UI/pages/Posts',
    },
    {
      type: 'link',
      label: 'Followings',
      icon: IoSearchSharp,
      path: '../../UI/pages/Followings',
    },
    {
      type: 'link',
      label: 'Découvrir',
      icon: FaRegCompass,
      pathe: '../../UI/pages/Discover',
    },
    {
      type: 'link',
      label: 'Réels',
      icon: RiMovieLine,
      path: '../../UI/pages/Reel',
    },
    {
      label: 'Messages',
      icon: BiMessageRounded,
      path: '../../UI/pages/Messages',
    },
    {
      type: 'link',
      label: 'Notifications',
      icon: CiHeart,
      path: '../../UI/pages/Notification',
    },
    {
      type: 'link',
      label: 'Créer  ',
      icon: FaRegPlusSquare,
      path: '../../UI/pages/Create',
    },
    {
      type: 'link',
      label: 'profil',
      icon: FaRegCompass,
      path: '../../UI/pages/Profils',
    },
  ];
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      w="250px"
      h="100vh"
      display={{ base: 'none', sm: 'block' }}
      p={2}
      bg="white.100"
      boxShadow={'lg'}
    >
      <Flex
        flexDirection={'row'}
        align={'center'}
        width={'100%'}
        h={'50px'}
        justify={'center'}
      >
        <Flex m={2} pt={3} align={'center'} h={'50px'} w={'90px'}>
          <LogoName />
        </Flex>
      </Flex>
      <Center pt={10} flexDirection={'column'} mt={8}>
        <List w={'100%'}>
          {listMenu.map((item, index) => (
            <ListItem key={index}>
              <Navitem item={item} isActive={index === 0} />
            </ListItem>
          ))}
        </List>
      </Center>
      <IconButton
        position={'fixed'}
        bottom={0}
        icon={colorMode === 'light' ? <CiDark /> : <CiLight />}
        my={4}
        onClick={toggleColorMode}
        aria-label={''}
      >
        {colorMode === 'light' ? 'Dark mode' : 'Light mode'}
      </IconButton>
    </Flex>
  );
};
export default Sidebar;
