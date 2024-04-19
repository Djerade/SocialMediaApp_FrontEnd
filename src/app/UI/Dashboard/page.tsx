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
import { ReactElement } from 'react';
import LayoutMain from '@/app/layout';
import Loading from '../Splash';

interface Props {}

const Index: NextPage<Props> = ({}) => {
  let userToken: any;
  let tokenBearer = 'Bearer';
  if (typeof window !== 'undefined') {
    const token: any = sessionStorage.getItem('user');
    userToken = JSON?.parse(token);
  }
  // console.log('userToken', userToken.token);
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
  tokenBearer = tokenBearer.concat(' ', userToken?.token.toString());

  const { data, loading, error } = useQuery(POST, {
    context: {
      Headers: {
        'x-api-key': '123',
        Authorization: `Bearer${userToken?.token}`,
      },
    },
    onCompleted(data) {
      console.log('->', data);
    },
    onError(error) {
      console.error('>>', error);
    },
  });
  if (loading) {
    return <Loading />;
  }
  console.log(tokenBearer);
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
