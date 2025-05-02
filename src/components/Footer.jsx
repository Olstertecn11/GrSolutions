import {
  Box,
  Flex,
  Text,
  VStack,
  HStack,
  Input,
  Button,
  Divider,
  Image,
  Icon,
} from '@chakra-ui/react';
import { PhoneIcon, CalendarIcon } from '@chakra-ui/icons';
import colors from '@/config/colors';

const Footer = () => {
  return (
    <Box bg={colors.footer} color="white" px={[6, 12, 20]} py={10}>
      <Flex direction={['column', 'row']} justify="space-between" gap={10} flexWrap="wrap">
        {/* ABOUT OUR CONSULTING */}
        <Box flex="1" minW="220px">
          <Text fontWeight="bold" fontSize="lg" mb={4}>
            ABOUT OUR CONSULTING
          </Text>
          <Text color="gray.300" fontSize="sm" mb={4}>
            That started from this tropic port aboard this tiny ship today still want by theam government they survive on up to thetre east side to a deluxe as soldiers of artics fortune.
          </Text>
          <HStack spacing={2} mt={4}>
            <PhoneIcon />
            <Text color="gray.100" fontSize="sm">Any Queries : (+1) 234 567 900</Text>
          </HStack>
        </Box>

        {/* RECENT POSTS */}
        <Box flex="1" minW="220px">
          <Text fontWeight="bold" fontSize="lg" mb={4}>
            RECENT POSTS
          </Text>

          {/* Post 1 */}
          <HStack align="start" spacing={4} mb={4}>
            <Image
              src="https://via.placeholder.com/60"
              alt="Post 1"
              boxSize="60px"
              objectFit="cover"
              borderRadius="md"
            />
            <VStack align="start" spacing={1}>
              <Text fontSize="sm">
                Till wanted by theam govern they survive as soldiers.
              </Text>
              <HStack fontSize="xs" color="gray.300">
                <CalendarIcon />
                <Text>Feb 06, 2018</Text>
              </HStack>
            </VStack>
          </HStack>

          {/* Post 2 */}
          <HStack align="start" spacing={4}>
            <Image
              src="https://via.placeholder.com/60"
              alt="Post 2"
              boxSize="60px"
              objectFit="cover"
              borderRadius="md"
            />
            <VStack align="start" spacing={1}>
              <Text fontSize="sm">
                World don't move to beat of just one drum.
              </Text>
              <HStack fontSize="xs" color="gray.300">
                <CalendarIcon />
                <Text>Mar 20, 2018</Text>
              </HStack>
            </VStack>
          </HStack>
        </Box>

        {/* SOLUTIONS */}
        <Box flex="1" minW="200px">
          <Text fontWeight="bold" fontSize="lg" mb={4}>
            SOLUTIONS
          </Text>
          <VStack align="start" spacing={2} fontSize="sm" color="gray.300">
            <Text>○ Travel and Aviation</Text>
            <Text>○ Business Services</Text>
            <Text>○ Consumer Products</Text>
            <Text>○ Financial Services</Text>
            <Text>○ Software Research</Text>
            <Text>○ Quality Resourcing</Text>
          </VStack>
        </Box>

        {/* NEWSLETTER */}
        <Box flex="1" minW="200px">
          <Text fontWeight="bold" fontSize="lg" mb={4}>
            NEWSLETTER
          </Text>
          <VStack spacing={4}>
            <Input placeholder="Name *" variant="flushed" color="gray.100" />
            <Input placeholder="Email *" variant="flushed" color="gray.100" />
            <Button bg="gray.100" color="blue.900" w="full" fontWeight="bold">
              SUBSCRIBE
            </Button>
          </VStack>
        </Box>
      </Flex>

      <Divider my={8} borderColor="gray.600" />

      {/* Bottom footer */}
      <Flex justify="space-between" align="center" direction={['column', 'row']} textAlign="center">
        <Text fontSize="sm" color="gray.400">
          © Copyrights 2018. All Rights Reserved.
        </Text>
        <HStack spacing={6} mt={[4, 0]}>
          <Text fontSize="sm">About</Text>
          <Text fontSize="sm">Solutions</Text>
          <Text fontSize="sm">FAQ’s</Text>
          <Text fontSize="sm">Contact</Text>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Footer;
