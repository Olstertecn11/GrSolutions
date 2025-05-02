import {
  Box,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { FaClipboardList, FaUserCheck, FaCalendarCheck, FaThumbsUp } from "react-icons/fa";

const steps = [
  {
    icon: FaClipboardList,
    title: "Paso #1",
    subtitle: "Completa tu formulario",
    description:
      "Llena el formulario con tus necesidades y requerimientos. Una vez recibido, nuestro equipo gestionará la cotización con nuestros proveedores, asegurándote las mejores opciones en calidad, seguridad y precio.",
    color: "#F6AD55", // naranja
  },
  {
    icon: FaUserCheck,
    title: "Paso #2",
    subtitle: "Escoge a tu proveedor",
    description:
      "Recibirás varias cotizaciones detalladas de proveedores confiables. Cada opción incluirá información clave para que puedas comparar y seleccionar la que mejor se ajuste a tus necesidades.",
    color: "#68D391", // verde
  },
  {
    icon: FaCalendarCheck,
    title: "Paso #3",
    subtitle: "Confirma y realiza tu pago",
    description:
      "Después de elegir al proveedor ideal, te enviaremos un enlace seguro para que completes el pago del servicio. Este paso asegura la confirmación de tu solicitud y permite avanzar en la coordinación.",
    color: "#63B3ED", // azul
  },
  {
    icon: FaThumbsUp,
    title: "Paso #4",
    subtitle: "Coordina y recibe el servicio",
    description:
      "Te compartiremos los datos de contacto del proveedor seleccionado para que puedas ultimar detalles directamente con ellos. Así garantizarás que todo se lleve a cabo de acuerdo con tus expectativas.",
    color: "#F687B3", // rosa
  },
];

const Steps = () => {
  return (
    <Box bg="gray.50" py={20} px={6}>
      <Heading textAlign="center" fontSize={{ base: "2xl", md: "4xl" }} mb={14}>
        Fácil, seguro y a tu medida
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10} maxW="7xl" mx="auto">
        {steps.map((step, i) => (
          <Box
            key={i}
            borderRadius="xl"
            overflow="hidden"
            boxShadow="md"
            bg="white"
            transition="all 0.3s"
            _hover={{ boxShadow: "xl", transform: "translateY(-4px)" }}
          >
            <Box
              h="120px"
              bgGradient={`linear(to-b, ${step.color}, transparent)`}
              position="relative"
              display="flex"
              justifyContent="center"
              alignItems="center"
              pb={6}
              borderTopRadius="xl"
            >
              <Icon as={step.icon} boxSize={10} color="white" zIndex="1" />
              <Box
                position="absolute"
                bottom="-1"
                left="0"
                width="full"
                height="30px"
                bg="white"
                borderTopRadius="full"
                zIndex="0"
              />
            </Box>

            <VStack spacing={2} p={6} align="start">
              <Text fontWeight="bold" fontSize="lg">
                {step.title}
              </Text>
              <Text fontWeight="semibold" fontSize="md" color="gray.700">
                {step.subtitle}
              </Text>
              <Text fontSize="sm" color="gray.600">
                {step.description}
              </Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Steps;
