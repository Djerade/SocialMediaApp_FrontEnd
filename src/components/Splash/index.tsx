'use client';

//Moduls
import { Flex } from '@chakra-ui/react';
import { NextPage } from 'next';

// import
import Image from 'next/image';
import logo from '../../../public/Images/logo.png';

interface Props {}

const Loading: NextPage<Props> = ({}) => {
  return (
    <Flex
      flexDirection={'column'}
      justify={'center'}
      align={'center'}
      h="100vh"
      w={'full'}
    >
      <Image src={logo} width={50} height={50} alt="logo name" />
    </Flex>
  );
};

export default Loading;
