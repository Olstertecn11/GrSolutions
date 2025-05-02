import {
  Box,
  Flex,
  Heading,
  Text,
  Icon,
  Button,
  SimpleGrid,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaClipboardList, FaUserCheck, FaCalendarCheck, FaThumbsUp } from "react-icons/fa";
import { useState } from "react";

const steps = [
  {
    title: "Paso #1",
    subtitle: "Completa tu formulario",
    description:
      "Llena el formulario con tus necesidades y requerimientos. Nuestro equipo gestionará la cotización con nuestros proveedores para asegurarte las mejores opciones.",
    icon: FaClipboardList,
    color: "orange",
  },
  {
    title: "Paso #2",
    subtitle: "Escoge a tu proveedor",
    description:
      "Recibirás varias cotizaciones detalladas para comparar y seleccionar la que mejor se ajuste a tus necesidades.",
    icon: FaUserCheck,
    color: "green",
  },
  {
    title: "Paso #3",
    subtitle: "Confirma y realiza tu pago",
    description:
      "Te enviaremos un enlace seguro para completar el pago y confirmar tu solicitud. Así avanzamos en la coordinación.",
    icon: FaCalendarCheck,
    color: "blue",
  },
  {
    title: "Paso #4",
    subtitle: "Coordina y recibe el servicio",
    description:
      "Te compartiremos los datos del proveedor para que coordines la entrega según tus necesidades.",
    icon: FaThumbsUp,
    color: "pink",
  },
];

const Steps = () => {
  const [activeStep, setActiveStep] = useState(0);
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box py={16} px={4} bg="gray.50">
      <Heading textAlign="center" fontSize="3xl" mb={10}>
        Fácil, seguro y a tu medida
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={6} maxW="7xl" mx="auto">
        {steps.map((step, index) => (
          <Box
            key={index}
            bg="white"
            borderRadius="xl"
            shadow={activeStep === index ? "xl" : "md"}
            p={6}
            borderTop="8px solid"
            borderColor={`${step.color}.400`}
            transition="all 0.3s ease"
            cursor="pointer"
            onClick={() => setActiveStep(index)}
            _hover={{
              transform: "translateY(-4px)",
              shadow: "xl",
            }}
          >
            <Flex
              justify="center"
              align="center"
              bg={`${step.color}.100`}
              w={12}
              h={12}
              borderRadius="full"
              mb={4}
              mx="auto"
            >
              <Icon as={step.icon} boxSize={6} color={`${step.color}.500`} />
            </Flex>

            <Text fontWeight="bold" fontSize="md" mb={1}>
              {step.title}
            </Text>
            <Text fontWeight="semibold" fontSize="sm" color="gray.700">
              {step.subtitle}
            </Text>
            <Text fontSize="sm" color="gray.600" mt={2}>
              {step.description}
            </Text>
          </Box>
        ))}
      </SimpleGrid>

      <Flex mt={10} justify="center">
        <Button
          colorScheme="blue"
          px={8}
          className="btn-move-animation"
          onClick={() => window.location.href = '/Cotizacion'} // o tu ruta real
        >
          Llenar Formulario
        </Button>
      </Flex>
    </Box>
  );
};

export default Steps;
