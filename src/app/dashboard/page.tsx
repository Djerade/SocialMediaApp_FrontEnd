'use client'
//Module
import { Flex } from "@chakra-ui/react";
import { NextPage } from 'next'

// Import
import { useQuery } from '@apollo/client';
import Storie from '@/components/stories';
import GET_POST from '@/GraphQl/Queries/getPost';
import Posts from "@/components/posts";
import Suggestion from "@/components/suggestion";




interface Props { }

const Index: NextPage<Props> = ({ }) => {

const { data, loading, error } = useQuery(GET_POST, { 
  onCompleted(data) {
    console.log(data);
}, onError(error) {
    console.error(error)  
},});
  if (loading) {
    return(<Flex>loading</Flex>);
  }
  return <div>
    <Flex p={"20px"} justifyContent={"center"} flexDirection={"row"}>
      <Flex justify={'center'}   width={"80%"} flexDirection={'column'}   align={'center'}>
        <Storie/>
        <Posts/>
      </Flex>
      <Flex w={"20%"}>
         <Suggestion/>
      </Flex>
    </Flex>
  </div>
}

export default Index