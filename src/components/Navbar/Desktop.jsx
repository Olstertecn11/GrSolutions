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

const menuItems = ['INICIO', 'SERVICIOS', 'NOSOTROS', 'CONTACTO'];

const renderMenuItem = (item) => {
  const isDropdown = item !== 'CONTACT';
  return isDropdown ? (
    <Menu key={item}>
      <MenuButton fontWeight={item === 'HOME' ? 'bold' : 'normal'} _hover={{ color: 'teal.300' }}>
        {item} <ChevronDownIcon />
      </MenuButton>
      <MenuList>
        <MenuItem>{item} Option 1</MenuItem>
        <MenuItem>{item} Option 2</MenuItem>
      </MenuList>
    </Menu>
  ) : (
    <Text key={item} _hover={{ color: 'teal.300' }}>
      {item}
    </Text>
  );
};

export default function Desktop() {
  return (
    <Box bg={colors.navbar} px={6} py={4} color="white">
      <Flex align="center">
        <HStack spacing={4}>
          {menuItems.map((item, index) => (
            <Flex key={item} align="center">
              {renderMenuItem(item)}
              {index < menuItems.length - 1 && (
                <Text mx={2} color="gray.400">/</Text>
              )}
            </Flex>
          ))}
        </HStack>

        <Spacer />

        <HStack spacing={4}>
          <IconButton color='white' icon={<FaFacebookF />} variant="ghost" aria-label="Facebook" />
          <IconButton color='white' icon={<FaLinkedinIn />} variant="ghost" aria-label="LinkedIn" />

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

          <IconButton icon={<Search2Icon />} variant="ghost" aria-label="Search" color='white' borderLeft={'1px solid white'} borderRadius={0} />
        </HStack>
      </Flex>
    </Box>
  );
}
