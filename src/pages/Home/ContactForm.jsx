import {
  Box,
  Flex,
  Heading,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Textarea,
  Select,
  Button,
  Image,
} from '@chakra-ui/react';
import colors from '@/config/colors';

const ContactForm = () => {
  return (
    <Box bg="gray.50" py={20} px={6}>
      <Flex
        maxW="7xl"
        mx="auto"
        bg="white"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="lg"
        direction={{ base: 'column', md: 'row' }}
      >
        {/* Imagen izquierda */}
        <Box flex="1" display={{ base: 'none', md: 'block' }}>
          <Image
            src="https://html.creativegigstf.com/charles/images/home/10.jpg" // Cambia a tu imagen local
            alt="Agente de atención"
            objectFit="cover"
            w="100%"
            h="100%"
          />
        </Box>

        {/* Formulario derecho */}
        <Box flex="1" p={10}>
          <Heading fontSize="2xl" mb={6}>
            Solicita una Cotización
          </Heading>

          <Flex gap={6} wrap="wrap">

            <HStack>
              <FormControl flex="1" isRequired>
                <Input placeholder="Tu nombre" border={'none'} borderBottom={'1px solid #d7d0d0'} borderRadius='none' />
              </FormControl>

              <FormControl flex="1" isRequired>
                <Input placeholder="Tu número" border={'none'} borderBottom={'1px solid #d7d0d0'} borderRadius='none' type="tel" />
              </FormControl>
            </HStack>

            <HStack>

              <FormControl flex="1" isRequired>
                <Input type="email" placeholder="Tu correo" border={'none'} borderBottom={'1px solid #d7d0d0'} borderRadius='none' />
              </FormControl>

              <FormControl flex="1" isRequired>
                <Select placeholder="Servicio que buscas?" border={'none'} borderBottom={'1px solid #d7d0d0'} borderRadius='none' >
                  <option>Mudanza</option>
                  <option>Flete empresarial</option>
                  <option>Transporte de mercancía</option>
                </Select>
              </FormControl>
            </HStack>
          </Flex>

          <FormControl mt={6}>
            <FormLabel color='gray.500'>Mensaje</FormLabel>
            <Textarea rows={4} border={'none'} borderBottom={'1px solid #d7d0d0'} bg='gray.50' />
          </FormControl>

          <Button
            mt={8}
            bg='white'
            border={'1px solid #102139'}
            borderRadius='none'
            color='#102139'
            size="lg"
            _hover={{ bg: '#102139', color: 'white' }}
            px={8}
            fontWeight="bold"
          >
            Cotizar
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default ContactForm;
