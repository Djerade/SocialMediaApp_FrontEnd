'use client'
import { Link } from '@chakra-ui/next-js'
import Login from './auth'
import { useState } from "react";

export default function Home() {
  const [user, setuser] = useState({});
  // const datauser = sessionStorage.getItem('user');
  // console.log(datauser);

  // if (datauser) {
  //   return (
  //     <div>
  //       <Index />
  //     </div>
  //   );
  // }

  return (
    <div>
      <Login/>
    </div>
  );
}
