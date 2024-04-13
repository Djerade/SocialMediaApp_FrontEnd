'use client';
import { useColorMode } from '@chakra-ui/react';
import {
  Avatar,
  Button,
  Center,
  Flex,
  Text,
  HStack,
  IconButton,
  WrapItem,
} from '@chakra-ui/react';
import { NextPage } from 'next';

// Import
import Story from '@/app/components/Story';
import posts from '@/app/components/posts';
import Storie from '@/app/components/section_profile';
import { gql } from '@apollo/client/core';
import { useMutation } from '@apollo/client/react/hooks/useMutation';
import { useQuery } from '@apollo/client';

interface Props {}

const Index: NextPage<Props> = ({}) => {
  const POST = gql`
    query GetPosts {
      getPosts {
        id
        body
        createdAt
        user {
          username
          email
        }
      }
    }
  `;

  // const { data, loading, error } = useQuery(POST, {
  //   onCompleted(data) {
  //     console.log('-->', data);
  //   },
  //   onError(error) {
  //     console.error(error);
  //   },
  // });

  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      <Flex flexDirection={'column'}>
        <Story />
        <Storie />
      </Flex>
    </div>
  );
};

export default Index;
