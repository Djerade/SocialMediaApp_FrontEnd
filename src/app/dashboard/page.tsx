'use client'
import { useColorMode } from '@chakra-ui/react';
import { Flex } from "@chakra-ui/react";
import { NextPage } from 'next'

// Import
import { gql } from '@apollo/client/core';
import { useQuery } from '@apollo/client';
import Storie from '@/components/section_profile';




interface Props { }

const Index: NextPage<Props> = ({ }) => {

//   const POST = gql`
//     query GetPosts {
//         getPosts {
//             id
//             body
//             createdAt
//           user {
//                 username
//                 email
//             }
//         }
//     }
// `;
  
  
//   const { data, loading, error } = useQuery(POST, { onCompleted(data) {
//       console.log('-->',data);
//   }, onError(error) {
//       console.error(error);
      
//   },});

  
  // const { colorMode,   toggleColorMode } = useColorMode();
  return <div>
    <Flex flexDirection={"column"}>
    
      <Storie/>
    </Flex>
  </div>
}

export default Index