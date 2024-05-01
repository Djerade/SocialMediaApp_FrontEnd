'useclient';
import { Box, Flex } from '@chakra-ui/react';
import NaveBar from '@/components/navebar';
import Sidebar from '@/components/sidebare';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Flex w={'100%'} bg={'red'} flexDirection={'row'}>
      <Sidebar />
      <Flex width={'100%'} flexDirection={'column'}>
        <NaveBar />
        <Box>{children}</Box>
      </Flex>
    </Flex>
  );
}
