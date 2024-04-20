'use client';
import { Flex } from '@chakra-ui/react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Flex>{children}</Flex>;
}
