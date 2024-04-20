'use client';
import { Link } from '@chakra-ui/next-js';

import { useContext, useState } from 'react';
import Login from './auth';

export default function Home() {
  const [user, setuser] = useState({});
  const datauser = sessionStorage.getItem('user');
  console.log(datauser);

  // if (datauser) {
  //   return (
  //     <div>
  //       <Index />
  //     </div>
  //   );
  // }

  return (
    <div>
      <Login />
    </div>
  );
}
