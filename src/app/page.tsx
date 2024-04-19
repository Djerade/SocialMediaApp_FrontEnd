'use client';
import { Link } from '@chakra-ui/next-js';
import Login from './UI/auth';
import Index from './UI/pages/Dashboard/page';

import { useContext, useState } from 'react';
import { AuthProvider } from './Context/authContext';

// import AuthProvider from './Context/authContext';

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
