import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  Stack,
  useBreakpointValue,
  Icon,
} from "@chakra-ui/react";
import { FaWhatsapp, FaMousePointer } from "react-icons/fa";

const Quote = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box bgGradient="linear(to-br, gray.50, blue.50)" py={16} px={8}>
      <Stack
        spacing={8}
        maxW="6xl"
        mx="auto"
        textAlign="center"
        align="center"
      >
        <Flex
          gap={6}
          direction={{ base: "column", md: "row" }}
          justify="center"
          align="center"
          flexWrap="wrap"
        >
          <Button
            leftIcon={<Icon as={FaMousePointer} />}
            size="lg"
            colorScheme="yellow"
            variant="solid"
            rounded="xl"
            px={8}
          >
            En Línea
          </Button>

          <Button
            leftIcon={<Icon as={FaWhatsapp} />}
            size="lg"
            colorScheme="whatsapp"
            variant="outline"
            rounded="xl"
            px={8}
          >
            Whatsapp
          </Button>
        </Flex>

        <Heading
          fontSize={{ base: "2xl", md: "4xl" }}
          fontWeight="extrabold"
          color="gray.800"
        >
          ¿Por qué perder tiempo contactando a muchos pilotos por separado?
        </Heading>

        <Text fontSize="lg" color="gray.600" maxW="3xl">
          <Text as="span" fontWeight="bold">
            Con MueveGT, haces una sola solicitud y recibes múltiples
            cotizaciones.
          </Text>{" "}
          Compara opciones, ahorra dinero y elige la mejor solución para tu
          traslado, fácil, rápido y sin complicaciones.
        </Text>

        <Text fontSize="lg" color="blue.700" maxW="4xl" fontWeight={'bold'}>
          Conectamos tus necesidades de transporte con la red más grande de
          transportistas de Guatemala. Desde pickups hasta camiones de 15
          toneladas, cotiza y elige en segundos.
        </Text>

        <Text
          fontWeight="bold"
          fontSize="xl"
          color="gray.900"
          borderTop="2px solid"
          borderColor="yellow.400"
          pt={4}
        >
          Tu transporte al mejor precio, en un solo clic.
        </Text>
      </Stack>
    </Box>
  );
};

export default Quote;
