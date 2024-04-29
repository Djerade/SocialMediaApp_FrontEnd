import { Container, Flex, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import Image from 'next/image';
import logo from '../../../public/Images/logo.png';

interface Props {}

const Loading: NextPage<Props> = ({}) => {
  return (
    <Flex
      flexDirection={'column'}
      justify={'center'}
      align={'center'}
      bg={'green'}
      h="100vh"
      w={'full'}
    >
      <Image src={logo} width={50} height={50} alt="logo name" />
      <Flex
        marginEnd={0}
        position={'fixed'}
        justify={'center'}
        bg={'red'}
        w={'full'}
      >
        <Text variant="">From</Text>
      </Flex>
    </Flex>
  );
};

export default Loading;
