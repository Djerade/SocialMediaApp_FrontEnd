'use client'
//Module
import { Flex, Text, Box } from "@chakra-ui/react";
import { NextPage } from 'next'

// Import
import { useQuery } from '@apollo/client';
import Storie from '@/components/stories';
import GET_POST from '@/GraphQl/Queries/getPost';
import Posts from "@/components/posts";
import Suggestion from "@/components/suggestion";
import Profile from "@/components/profile";
import Other from "@/components/other";
import SectionProfile from "@/components/sectionProfile";




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
    <Flex pt={"20px"} pr={'100px'} pl={'100px'}  flexDirection={"row"}>
      <Flex  justify={'center'}   width={"70%"} flexDirection={'column'}   align={'center'}>
        <Storie/>
        <Posts/>
      </Flex>
      <Flex pr={3} pl={3} display={{ base: "none", sm:"none", md:"block"}} w={"30%"}>
        <SectionProfile/>
        <Suggestion/>
        <Other/>
      </Flex>
    </Flex>
  </div>
}

export default Index