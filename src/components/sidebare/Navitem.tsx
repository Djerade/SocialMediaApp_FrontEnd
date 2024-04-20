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
          onClick={(e) => navigate(path)}
          alignItems={' center'}
          flexDirection={'row'}
          justifyContent={'space-between'}
          // as={Link}
          // color={isActive ? 'black' : 'gray.400'}
          bg={'white'}
          borderRadius={10}
          _hover={{ bg: 'gray.200', color: 'black', textDecoration: 'none' }}
          mb={2}
          w={'80%'}
          display={'flex'}
          p={'2'}
          alignContent={'center'}
        >
          <ListIcon as={icon} fontSize={22} m={0} />
          <Text>{label}</Text>
        </LinkChakra>
      </Box>
    );
  }
};
export default Navitem;
