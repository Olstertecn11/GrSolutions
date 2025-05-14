import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  Button,
  useBreakpointValue,
} from '@chakra-ui/react';

const Contact = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box bg="#0A214A" color="white" py={20} px={6} w={'100%'}>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        maxW="7xl"
        mx="auto"
        align="center"
        gap={10}
      >
        <Box flex="1">
          <Heading fontSize="3xl" mb={6}>
            Contáctanos
          </Heading>

          <Text fontSize="md" mb={4}>
            Si tienes alguna pregunta o necesitas más información sobre nuestros servicios
            , no dudes en ponerte en contacto con nosotros. Estamos aquí para ayudarte y
            responder a todas tus inquietudes.

          </Text>

          <Text fontSize="md" mb={8}>
            Puedes llamarnos al <strong>+52 55 1234 5678</strong> o enviarnos un correo a
            <strong> g&r40example.com</strong>. También puedes completar el formulario a
            continuación y nos pondremos en contacto contigo lo antes posible.
          </Text>

          <Text fontWeight='bold' fontStyle={'italic'} fontSize="2xl" fontFamily="cursive">G&R Logistics</Text>
        </Box>

        <Box
          bg="white"
          borderRadius="lg"
          boxShadow="lg"
          p={8}
          flex="1"
          color="gray.800"
          minW={{ base: '100%', md: '400px' }}
        >
          <Flex gap={4} mb={4} direction={{ base: 'column', md: 'row' }}>
            <FormControl isRequired>
              <Input type="text" placeholder="Tu correo" border={'none'} borderBottom={'1px solid #d7d0d0'} borderRadius='none' />
            </FormControl>
            <FormControl isRequired>
              <Input type="phone" placeholder="Tu teléfono" border={'none'} borderBottom={'1px solid #d7d0d0'} borderRadius='none' />
            </FormControl>
          </Flex>

          <Flex gap={4} mb={4} direction={{ base: 'column', md: 'row' }}>
            <FormControl isRequired>
              <Input type="email" placeholder="Tu correo" border={'none'} borderBottom={'1px solid #d7d0d0'} borderRadius='none' />
            </FormControl>
            <FormControl>
              <Select placeholder="Servicio que buscas?" border={'none'} borderBottom={'1px solid #d7d0d0'} borderRadius='none' >
                <option>Mudanza</option>
                <option>Flete empresarial</option>
                <option>Transporte de mercancía</option>
              </Select>
            </FormControl>
          </Flex>

          <FormControl mb={6}>
            <FormLabel color='gray.500'>Mensaje</FormLabel>
            <Textarea rows={4} border={'none'} borderBottom={'1px solid #d7d0d0'} bg='gray.50' />
          </FormControl>

          <Button
            w="full"
            colorScheme="blue"
            bg="#04194C"
            color="white"
            _hover={{ bg: 'blue.700' }}
            size="lg"
          >
            Enviar
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Contact;
