'use client'
//Module
import { Flex } from "@chakra-ui/react";
import { NextPage } from 'next'

// Import
import { useQuery } from '@apollo/client';
import Storie from '@/components/section_profile';
import GET_POST from '@/GraphQl/Queries/getPost';
import { loadBindings } from "next/dist/build/swc";




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
    <Flex flexDirection={"column"}>
      <Storie/>
    </Flex>
  </div>
}

export default Index