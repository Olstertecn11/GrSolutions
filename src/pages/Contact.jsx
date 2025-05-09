import {
  Box,
  Flex,
  Heading,
  Text,
  HStack,
  FormControl,
  FormLabel,
  Icon,
  Input,
  Select,
  Textarea,
  Button,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FaWhatsapp } from "react-icons/fa";
import { PiHeadphonesFill } from "react-icons/pi";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";


const Contact = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box bg="linear-gradient(90deg,rgba(16, 33, 57, 1) 0%, rgba(75, 95, 128, 1) 50%, rgba(63, 124, 209, 1) 100%)" color="white" py={20} px={6}>
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

          <Text fontSize="md" mb={4} textAlign="justify" color="gray.100">
            ¿Tienes preguntas o necesitas más información sobre nuestros servicios? En <strong>G&R Logistics</strong>, estamos comprometidos con brindarte atención personalizada y soluciones a la medida de tus necesidades logísticas.
          </Text>

          <Text fontSize="md" mb={8} textAlign="justify" color="gray.100">
            Puedes comunicarte con nosotros al{" "}
            <Text as="span" fontWeight="bold" color="blue.400">
              +502 1234 5678
            </Text>{" "}
            o escribirnos a{" "}
            <Text as="span" fontWeight="bold" color="blue.400">
              contacto@g&r_solutions.com
            </Text>
            . Si lo prefieres, también puedes completar el formulario a continuación y uno de nuestros asesores se pondrá en contacto contigo lo antes posible.
          </Text>


          <HStack justifyContent={'center'} alignContent={'center'} gap={'2rem'} >
            <Icon as={FaWhatsapp} color='white.100' fontSize={'1.4rem'} />
            <Icon as={MdOutlineEmail} color='white.100' fontSize={'1.4rem'} />
            <Icon as={MdOutlinePhone} color='white.100' fontSize={'1.4rem'} />
          </HStack>
        </Box>

        <Box
          bg="#1912125e"
          borderRadius="lg"
          boxShadow="lg"
          p={8}
          flex="1"
          color="gray.800"
          minW={{ base: '100%', md: '400px' }}
        >
          <Flex gap={4} mb={4} direction={{ base: 'column', md: 'row' }}>
            <FormControl isRequired>
              <Input _focus={{ border: 'none', borderColor: 'transparent', boxShadow: 'none', borderBottom: '1px solid #d7d0d0' }} color='white' type="text" placeholder="Tu correo" border={'none'} borderBottom={'1px solid #d7d0d0'} borderRadius='none' />
            </FormControl>
            <FormControl isRequired>
              <Input _focus={{ border: 'none', borderColor: 'transparent', boxShadow: 'none', borderBottom: '1px solid #d7d0d0' }} color='white' type="phone" placeholder="Tu teléfono" border={'none'} borderBottom={'1px solid #d7d0d0'} borderRadius='none' />
            </FormControl>
          </Flex>

          <Flex gap={4} mb={4} direction={{ base: 'column', md: 'row' }}>
            <FormControl isRequired>
              <Input _focus={{ border: 'none', borderColor: 'transparent', boxShadow: 'none', borderBottom: '1px solid #d7d0d0' }} color='white' type="email" placeholder="Tu correo" border={'none'} borderBottom={'1px solid #d7d0d0'} borderRadius='none' />
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
            <FormLabel color='gray.200'>Mensaje</FormLabel>
            <Textarea _focus={{ border: 'none', borderColor: 'transparent', boxShadow: 'none', borderBottom: '1px solid #d7d0d0' }} color='white' rows={4} border={'none'} borderBottom={'1px solid #d7d0d0'} bg='#00000024' />
          </FormControl>

          <Button
            w="full"
            colorScheme="blue"
            bg="#03070c6b"
            color="white"
            _hover={{ bg: 'white', color: 'blue.800' }}
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
