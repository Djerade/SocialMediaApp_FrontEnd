'use client';
import { Link } from '@chakra-ui/next-js';
import Login from './UI/auth';
import Index from './UI/Dashboard/page';

export default function Home() {
  return (
    <div>
      <Login />
    </div>
  );
}
