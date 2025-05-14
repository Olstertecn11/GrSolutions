import {
  Box,
  Flex,
  Text,
  IconButton,
  Badge,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  HStack,
  Spacer,
} from '@chakra-ui/react';
import {
  ChevronDownIcon,
  Search2Icon,
} from '@chakra-ui/icons';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
  FaShoppingCart,
} from 'react-icons/fa';
import colors from '../../config/colors';
import routes from '@/router/routes';
import { useNavigate } from 'react-router-dom';
import logo from '@/assets/images/app/logo_simple.png'


const renderMenuItem = (item, index) => {

  const history = useNavigate();
  const isDropdown = item.subs && item.subs.length > 0;
  return isDropdown ? (
    <Menu key={index} >
      <MenuButton fontWeight={item.title === 'Inicio' ? 'bold' : 'normal'} _hover={{ color: 'blue.300' }} fontSize={'0.9rem'}>
        {item.title} <ChevronDownIcon />
      </MenuButton>
      <MenuList bg={'#1f314c63'} border='none' backdropFilter={'blur(8px)'} >
        {item.subs.map((subItem, subIndex) => (
          <MenuItem onClick={() => history(subItem.path)} key={subIndex} bg='transparent' _hover={{ backgroundColor: '#0e141d75' }}>{subItem.title}</MenuItem>
        ))
        }
      </MenuList>
    </Menu>
  ) : (
    <Text key={item} _hover={{ color: 'blue.300', cursor: 'pointer' }} fontSize={'0.9rem'} onClick={() => history(item.path)} fontWeight={item.title === 'Inicio' ? 'bold' : 'normal'}  >
      {item.title}
    </Text>
  );
};

export default function Desktop() {
  return (
    <Box bg={colors.navbar} px={6} py={4} color="white">
      <Flex align="center">
        <HStack spacing={4}>
          <img src={logo} alt="Logo" style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
          {routes.filter((route) => !route.isChild).map((item, index) => (
            <Flex key={index} align="center">
              {renderMenuItem(item, index)}
              {index < routes.length - 1 && (
                <Text mx={2} color="gray.400">/</Text>
              )}
            </Flex>
          ))}
        </HStack>

        <Spacer />

        <HStack spacing={4}>
          <IconButton className='navbar-icons' color='white' icon={<FaFacebookF />} variant="ghost" aria-label="Facebook" />
          <IconButton className='navbar-icons' color='white' icon={<FaLinkedinIn />} variant="ghost" aria-label="LinkedIn" />

          {
            /*
          <Box position="relative">
            <IconButton icon={<FaShoppingCart />} variant="ghost" aria-label="Cart" color='white' />
            <Badge
              position="absolute"
              top="0"
              right="0"
              bg="red.500"
              borderRadius="full"
              fontSize="0.7em"
              px={1}
              color="white"
            >
              2
            </Badge>
          </Box>
              */
          }

          <IconButton className='navbar-icons' icon={<Search2Icon />} variant="ghost" aria-label="Search" color='white' borderLeft={'1px solid white'} borderRadius={0} />
        </HStack>
      </Flex>
    </Box>
  );
}
