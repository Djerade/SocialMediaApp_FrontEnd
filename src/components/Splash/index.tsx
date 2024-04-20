import { Container } from '@chakra-ui/react';
import { NextPage } from 'next';
import Image from 'next/image';
import logo from '../../../public/Images/logo.png';

interface Props {}

const Loading: NextPage<Props> = ({}) => {
  return (
    <Container>
      <Image src={logo} width={150} height={200} alt="logo name" />
    </Container>
  );
};

export default Loading;
