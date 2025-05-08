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
import { useLocation } from 'react-router-dom';
import routes from '@/router/routes';
import logo from '@/assets/images/app/logo_simple.png';

const Footer = () => {
  const location = useLocation();
  // if path is http://localhost:5173/Servicios#transporte i need just the "Servicios" part
  const currentPath = location.pathname.split('/')[1].split('#')[0];

  const solutions = [
    'Cotización Unificada e Inteligente',
    'Red de Transportistas Verificados',
    'Traslados de Mercadería con Seguro',
    'Soluciones de Mudanza Personalizadas',
    'Plataforma para Pilotos Externos',
    'Soporte al Cliente Post-Servicio'
  ]


  return (
    <Box bg={colors.footer} color="white" px={[6, 12, 20]} py={10}>
      <Flex direction={['column', 'row']} justify="space-between" gap={10} flexWrap="wrap">
        {/* ABOUT OUR CONSULTING */}
        <Box flex="1" minW="220px">
          <Text fontWeight="bold" fontSize="lg" mb={4}>
            SOBRE NUESTRO SERVICIO
          </Text>
          <Text color="gray.300" fontSize="sm" mb={4} textAlign={'justify'}>
            MueveGT es una plataforma guatemalteca innovadora que conecta usuarios con una red confiable de transportistas. Nos especializamos en brindar soluciones logísticas eficientes, seguras y personalizadas, abarcando desde fletes y mudanzas hasta traslados de mercadería empresarial.
          </Text>
          <HStack spacing={2} mt={4}>
            <PhoneIcon />
            <Text color="gray.100" fontSize="sm">
              Dudas o consultas : (+502) 5962 1085
            </Text>
          </HStack>
        </Box>

        <Box flex="1" minW="220px">
          <HStack align="start" spacing={4} mb={4}>
            <Image
              src={logo}
              alt="Post 1"
              boxSize="240px"
              objectFit="contain"
              borderRadius="md"
            />
          </HStack>
        </Box>

        <Box flex="1" minW="200px">
          <Text fontWeight="bold" fontSize="lg" mb={4}>
            SOLUCIONES
          </Text>
          <VStack align="start" spacing={2} fontSize="sm" color="gray.300">
            {solutions.map((solution, index) => (
              <Text display={'list-item'} key={index} fontSize="sm" color="gray.300">{solution}</Text>
            ))}
          </VStack>
        </Box>

        <Box flex="1" minW="200px">
          <Text fontWeight="bold" fontSize="lg" mb={4}>
            CONTÁCTANOS
          </Text>
          <VStack spacing={4}>
            <Input placeholder="Nombre *" variant="flushed" color="gray.100" />
            <Input placeholder="Correo *" variant="flushed" color="gray.100" />
            <Button bg="gray.100" color="blue.900" w="full" fontWeight="bold">
              Enviar Solicitud
            </Button>
          </VStack>
        </Box>
      </Flex>

      <Divider my={8} borderColor="gray.600" />

      <Flex justify="space-between" align="center" direction={['column', 'row']} textAlign="center">
        <Text fontSize="sm" color="gray.400">
          © Copyrights 2025. Todos los derechos reservados. G&R Logistics
        </Text>
        <HStack spacing={6} mt={[4, 0]}>
          {
            routes.filter((route) => !route.isChild).map((route, index) => (
              <Text key={index} fontSize="sm" color="gray.400" fontWeight={currentPath === route.title ? 'bold' : 'normal'}>
                {route.title}
              </Text>
            ))
          }
        </HStack>
      </Flex>
    </Box>
  );
};

export default Footer;
