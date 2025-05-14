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
import routes from '@/router/routes';

const Footer = () => {
  return (
    <Box bg={colors.footer} color="white" px={[6, 12, 20]} py={10}>
      <Flex direction={['column', 'row']} justify="space-between" gap={10} flexWrap="wrap">
        {/* ABOUT OUR CONSULTING */}
        <Box flex="1" minW="220px">
          <Text fontWeight="bold" fontSize="lg" mb={4}>
            ACERCA DE NOSOTROS
          </Text>
          <Text color="gray.300" fontSize="sm" mb={4} textAlign={'justify'}>
            Somos una empresa de transporte dedicada a brindar soluciones logísticas eficientes y confiables. Con años de experiencia en la industria, nos especializamos en el transporte de mercancías y productos a nivel nacional e internacional. Nuestro compromiso es garantizar la seguridad y puntualidad en cada entrega, adaptándonos a las necesidades específicas de nuestros clientes.
          </Text>
          <HStack spacing={2} mt={4}>
            <PhoneIcon />
            <Text color="gray.100" fontSize="sm">Preguntas : (+502) 5962 1085</Text>
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
              src="https://www.freshbooks.com/wp-content/uploads/2022/03/8-steps-to-starting-a-successful-transport-business.jpg"
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
              src="https://www.freshbooks.com/wp-content/uploads/2022/03/8-steps-to-starting-a-successful-transport-business.jpg"
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

        <Box flex="1" minW="200px">
          <Text fontWeight="bold" fontSize="lg" mb={4}>
            Contactar
          </Text>
          <VStack spacing={4}>
            <Input type="text" placeholder="Nombre *" variant="flushed" color="gray.100" />
            <Input type='email' placeholder="Correo *" variant="flushed" color="gray.100" />
            <Button bg="gray.100" color="blue.900" w="full" fontWeight="bold">
              Enviar Mensaje
            </Button>
          </VStack>
        </Box>
      </Flex>

      <Divider my={8} borderColor="gray.600" />

      <Flex justify="space-between" align="center" direction={['column', 'row']} textAlign="center">
        <Text fontSize="sm" color="gray.400">
          © Copyrights 2025. All Rights Reserved.
        </Text>
        <HStack spacing={6} mt={[4, 0]}>
          {
            routes.map((item, index) => (
              <Text
                key={index}
                _hover={{ color: 'blue.300', cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: '3px' }}
                fontSize={'0.9rem'}
                onClick={() => history(item.path)}
                fontWeight={item.title === 'Inicio' ? 'bold' : 'normal'}
              >
                {item.title}
              </Text>
            ))
          }
        </HStack>
      </Flex>
    </Box>
  );
};

export default Footer;
