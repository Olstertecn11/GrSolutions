import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Fletes",
    subtitle: "1 a 5 artículos",
    features: [
      "Entregas puntuales",
      "Variada flotilla de vehículos",
      "Tarifas competitivas",
      "Servicio Confiable",
    ],
    routed: "/cotizacion-fletes",
  },
  {
    title: "Traslado de Mercadería",
    subtitle:
      "Movimiento de productos empresariales que requieren una mayor especialización",
    features: [
      "Transporte especializado",
      "Seguro para mercadería (MueveSeguroGT)",
      "Cuadrillas",
      "Precios competitivos",
      "Emisión de facturas",
    ],
    highlighted: true,
    routed: "/cotizacion-traslado",
  },
  {
    title: "Mudanzas",
    subtitle: "Semi completas y/o completas de casas u oficinas",
    features: [
      "Empaque seguro",
      "Asistencia para carga y descarga",
      "Transportes adecuados",
      "Servicio personalizado",
    ],
    routed: "/cotizacion-mudanzas",
  },
];

const Services = () => {

  const navigate = useNavigate();
  return (
    <Box bg="#061129" py={20} px={6} id="servicios">
      <Heading
        textAlign="center"
        fontSize={{ base: "2xl", md: "4xl" }}
        mb={14}
        fontWeight="extrabold"
        color="white"
      >
        Nuestros Servicios
      </Heading>

      <Flex
        wrap="wrap"
        justify="center"
        align="stretch"
        gap={8}
        maxW="7xl"
        mx="auto"
      >
        {services.map((service, idx) => (
          <Box
            key={idx}
            bg={service.highlighted ? "gray.900" : "white"}
            color={service.highlighted ? "white" : "gray.800"}
            boxShadow="lg"
            borderRadius="xl"
            p={8}
            flex="1"
            minW={{ base: "100%", md: "300px" }}
            maxW="350px"
            transition="all 0.3s ease"
            _hover={{
              transform: "translateY(-5px)",
              boxShadow: "xl",
            }}
          >
            <Box
              w="60px"
              h="4px"
              bg="yellow.400"
              borderRadius="full"
              mx="auto"
              mb={4}
            />

            <Heading fontSize="2xl" mb={2} textAlign="center">
              {service.title}
            </Heading>

            <Text
              fontSize="md"
              textAlign="center"
              color={service.highlighted ? "gray.300" : "gray.600"}
              mb={6}
            >
              {service.subtitle}
            </Text>

            <VStack spacing={2} align="start" mb={6}>
              {service.features.map((feature, i) => (
                <Text
                  key={i}
                  fontWeight="bold"
                  color={service.highlighted ? "white" : "blue.800"}
                >
                  {feature}
                </Text>
              ))}
            </VStack>

            <Button
              w="full"
              colorScheme="yellow"
              bg="yellow.400"
              onClick={() => navigate(service.routed)}
              color={service.highlighted ? "gray.900" : "black"}
              _hover={{ bg: "yellow.300" }}
              rounded="full"
            >
              Empezar
            </Button>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Services;
