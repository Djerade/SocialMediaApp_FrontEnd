'use client';

import { useState } from 'react';
import Index from './pages/Dashboard/page';

export default function Home() {
  const [user, setuser] = useState({});
  return (
    <div>
      <Index />
    </div>
  );
}
