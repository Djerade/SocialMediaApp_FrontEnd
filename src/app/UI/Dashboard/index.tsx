import { Box } from '@chakra-ui/react'
import { NextPage } from 'next'

// Import
import Story from '@/app/components/Story'

interface Props { }

const Index: NextPage<Props> = ({}) => {
  return <div>
      <Story/>
  </div>
}

export default Index