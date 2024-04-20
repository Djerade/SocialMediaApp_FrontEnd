'use client';
import { useColorMode } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';
import { NextPage } from 'next';

// Import

import { gql } from '@apollo/client/core';
import { useQuery } from '@apollo/client';
import Loading from '../../../components/Splash';
import Story from '@/components/Story';
import Storie from '@/components/section_profile';

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
      console.log(data);
    },
    onError(error) {
      console.error(error);
    },
  });
  if (loading) {
    return <Loading />;
  }
  useColorMode();
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
