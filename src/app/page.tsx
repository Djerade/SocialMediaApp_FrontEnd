'use client';
import { Link } from '@chakra-ui/next-js';

import { useContext, useState } from 'react';
import Login from './auth/page';
import Index from './pages/Dashboard/page';
import Loading from '@/components/Splash';

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
      <Loading />
    </div>
  );
}
