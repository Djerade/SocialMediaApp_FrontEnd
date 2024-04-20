'use client';
import { createContext, useState } from 'react';

export const authContext = createContext({});
export const AuthProvider = ({ children }: any) => {
  const [user, setuser] = useState('null');
  const [islogin, setislogin] = useState(false);
  return (
    <authContext.Provider value={{ user, islogin, setuser, setislogin }}>
      {children}
    </authContext.Provider>
  );
};
