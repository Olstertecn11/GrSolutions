
import {
  Box,
  Flex,
  Heading,
  Icon,
  Text,
  VStack,
  Button,
  Image,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';

const helpItems = [
  "¿Requieres asistencia con tu cotización?",
  "¿Tienes dudas para elegir a tu proveedor ideal?",
  "¿Presentas algún inconveniente con tu pago?",
  "¿Tuviste algún problema con tu servicio recibido?",
];

const Contact = () => {
  return (
    <Box bg="gray.50" py={20} px={6}>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        maxW="7xl"
        mx="auto"
        gap={10}
        align="center"
        justify="center"
      >
        {/* Parte izquierda con texto */}
        <Box flex="1">
          <Heading fontSize="2xl" mb={4}>
            ¿Necesitas Ayuda?
          </Heading>

          <VStack align="start" spacing={3} mb={6}>
            {helpItems.map((item, index) => (
              <Flex key={index} align="center">
                <Icon as={FaCheckCircle} color="yellow.400" mr={2} />
                <Text fontSize="md">{item}</Text>
              </Flex>
            ))}
          </VStack>

          <Text color="gray.600" mb={6}>
            No te preocupes, te ayudaremos a solucionarlo de manera rápida y segura.
          </Text>

          <Button
            leftIcon={<BsWhatsapp />}
            colorScheme="whatsapp"
            variant="solid"
            size="lg"
            px={8}
          >
            Contáctanos
          </Button>
        </Box>

        {/* Imagen */}
        <Box flex="1">
          <Image
            src="https://meetatroam.com/wp-content/uploads/2022/08/iStock-1210684755.jpg"
            alt="Centro de atención"
            borderRadius="lg"
            shadow="md"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Contact;
