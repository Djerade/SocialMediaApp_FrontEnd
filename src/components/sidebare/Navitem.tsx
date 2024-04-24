import {
  Box,
  ListIcon,
  Text,
  Link,
  Link as LinkChakra,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
const Navitem = ({ item, isActive }: any) => {
  const { push } = useRouter();
  const navigate = (link: any) => {
    push(link);
  };
  if (item.type === 'link') {
    const { label, icon, path } = item;
    return (
      <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <LinkChakra
          onClick={(e) => push(path)}
          alignItems={' center'}
          // href={path}
          flexDirection={'row'}
          justifyContent={'flex-start'}
          // as={Link}
          // color={isActive ? 'black' : 'gray.400'}
          bg={'white'}
          borderRadius={10}
          _hover={{ bg: 'gray.200', color: 'black', textDecoration: 'none' }}
          mb={2}
          w={'90%'}
          pr={2}
          p={2}
          pl={2}
          display={'flex'}
          alignContent={'center'}
        >
          <ListIcon mr={5} as={icon} fontSize={22} />
          <Text>{label}</Text>
        </LinkChakra>
      </Box>
    );
  }
};
export default Navitem;
