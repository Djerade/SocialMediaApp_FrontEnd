import NaveBar from '@/app/components/navebar';
import Sidebar from '@/app/components/sidebare';
import { Box, Flex } from '@chakra-ui/react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Flex w={'100%'} flexDirection={'row'}>
      <Sidebar />
      <Flex width={'100%'} flexDirection={'column'}>
        <NaveBar />
        <Box>{children}</Box>
      </Flex>
    </Flex>
  );
}
