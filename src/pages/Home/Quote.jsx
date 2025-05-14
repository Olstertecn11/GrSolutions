import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Text,
  Stack,
  Image,
  Icon,
  VStack,
} from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";
import { PiHeadphonesFill } from "react-icons/pi";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";

const Quote = () => {
  return (
    <Flex height="100vh" direction={{ base: "column", md: "row" }} >
      {/* Columna Izquierda - Texto vertical */}
      <Box
        bg='#1d3960'
        minW={{ base: "100%", md: "250px" }}
        display="flex"
        position={"relative"}
        alignItems="center"
        justifyContent="center"
        p={4}
      >
        <VStack spacing={6} textAlign="center">
          <Heading
            transform="rotate(-90deg)"
            transformOrigin="center"
            fontSize="4rem"
            position={"absolute"}
            color="white"
            whiteSpace="nowrap"
          >
            Cotiza en Línea
          </Heading>

          <Button variant="outline" size="md" position={'absolute'} bottom={'4%'} borderRadius={0} color='white' _hover={{ bg: 'white', color: 'black' }}
          >
            Ver más
          </Button>
        </VStack>
      </Box>

      {/* Columna Derecha - Contenido principal */}
      <Flex
        flex="1"
        direction="column"
        justify="center"
        align="flex-start"
        bg="white"
        position={'relative'}
      >
        <Image src="https://www.diariodelpuerto.com/binrepository/900x600/0c49/900d502/none/5351385/DQEP/tomascompany_GD16394940679156040_MG21760372.jpg" alt=""
          w={'full'}
          h='40vh'
          top='0%'
          objectFit="cover"
          position={'absolute'}
        />
        <Stack spacing={6} p={10} mt='18rem'>
          <Heading fontSize={{ base: "2xl", md: "4xl" }}>
            ¿Por qué perder tiempo contactando a muchos pilotos por separado?
          </Heading>

          <Text fontSize="md">
            <Text as="span" fontWeight="bold">
              Con G&R Solutions, haces una sola solicitud y recibes múltiples
              cotizaciones.
            </Text>{" "}
            Compara opciones, ahorra dinero y elige la mejor solución para tu
            traslado, fácil, rápido y sin complicaciones.
          </Text>

          <Text fontSize="md" fontWeight="medium" color="blue.700">
            Conectamos tus necesidades de transporte con la red más grande de
            transportistas de Guatemala. Desde pickups hasta camiones de 15
            toneladas, cotiza y elige en segundos.
          </Text>

          <Text
            fontWeight="bold"
            fontSize="lg"
            borderTop="2px solid"
            color={'blue.700'}
            borderColor="blue.900"
            pt={4}
          >
            Tu transporte al mejor precio, en un solo clic.
          </Text>

          <Flex gap={4} flexWrap="wrap" flexDir={'column'} alignContent={'center'} >
            <Button w={'50%'} bg='#061129e3' color='white' _hover={{ bg: '#061129bd' }}>
              Contactar
            </Button>
          </Flex>
        </Stack>
        <HStack justifyContent={'center'} alignContent={'center'} marginTop={'8rem'} gap={'1rem'} position={'absolute'} bottom={'2%'} w={'full'} >
          <Icon as={PiHeadphonesFill} color={'blue.600'} fontSize={'1.4rem'} />
          <Icon as={FaWhatsapp} color='green.500' fontSize={'1.4rem'} />
          <Icon as={MdOutlineEmail} color='red.500' fontSize={'1.4rem'} />
          <Icon as={MdOutlinePhone} color='yellow.700' fontSize={'1.4rem'} />

        </HStack>
      </Flex>
    </Flex>
  );
};

export default Quote;
