import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react'
import {
  Box,
  VStack,
  Button,
  Divider,
  chakra,
  Grid,
  GridItem,
} from '@chakra-ui/react'
import { IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp, IoHome } from 'react-icons/io5'
import { TbTruckDelivery } from "react-icons/tb";
import { PiTruckTrailerLight } from "react-icons/pi";
import SectionDivider from '../components/SectionDivider'
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';


const FeatureTransport = ({ text, icon, iconBg, subtext = '' }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);


  return (
    <Stack direction={'row'} align={'center'}>
      <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
      <Text fontSize={'sm'} color={'gray.500'} flexWrap={'wrap'}>{subtext}</Text>
    </Stack>
  )
}

const TransportServices = () => {
  return (
    <div>
      <section id="transporte">
        <Container maxW={'5xl'} py={12}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Stack spacing={4}>
              <Text
                textTransform={'uppercase'}
                color={'blue.400'}
                fontWeight={600}
                fontSize={'sm'}
                bg={useColorModeValue('blue.50', 'blue.900')}
                p={2}
                alignSelf={'flex-start'}
                rounded={'md'}>
                TRANSPORTE
              </Text>
              <Heading>
                Transporte de carga y logística
              </Heading>
              <Text color={'gray.500'} fontSize={'lg'} textAlign={'justify'}>
                Ofrecemos servicios de transporte de carga y logística para satisfacer todas sus necesidades. Nuestros servicios incluyen transporte terrestre, marítimo y aéreo, así como soluciones personalizadas para su negocio.
              </Text>
              <Stack
                spacing={4}
                divider={
                  <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
                }>
                <FeatureTransport
                  icon={<Icon as={TbTruckDelivery} color={'yellow.500'} w={5} h={5} />}
                  iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                  text={'Fletes'}
                  subtext={'Entregas puntuales en flotilla variada de vehículos'}
                />
                <FeatureTransport
                  icon={<Icon as={PiTruckTrailerLight} color={'green.500'} w={5} h={5} />}
                  iconBg={useColorModeValue('green.100', 'green.900')}
                  text={'Mercadería'}
                  subtext={'Transporte de productos empresariales'}
                />
                <FeatureTransport
                  icon={<Icon as={IoHome} color={'purple.500'} w={5} h={5} />}
                  iconBg={useColorModeValue('purple.100', 'purple.900')}
                  text={'Mudanzas'}
                  subtext={'Semi completas y/o completas, casas u oficinas'}
                />
              </Stack>
            </Stack>
            <Flex>
              <Image
                rounded={'md'}
                alt={'feature image'}
                src={
                  'https://cdn.prod.website-files.com/6352f49d6e708a64f34c35f7/63740f805426d877a40b2100_63222de1eb23d01d5e43ada7_Tips%20on%20How%20to%20Manage%20a%20Delivery%20Business.jpg'
                }
                objectFit={'cover'}
              />
            </Flex>
          </SimpleGrid>
          <Button mt={14} background='blue.200' color='blue.700' className='btn-move-animation'>Realizar Cotización</Button>
        </Container>

      </section>
    </div>
  )
}





const Feature = ({ heading, text }) => {
  return (
    <Box padding={4} background={'gray.100'} borderRadius={'lg'} boxShadow={'lg'}>
      <GridItem>
        <chakra.h6 fontSize="lg" fontWeight="600">
          {heading}
        </chakra.h6>
        <chakra.p textAlign='justify' mt={2}>{text}</chakra.p>
      </GridItem>
    </Box>
  )
}

const ProveedorServices = () => {
  return (
    <Box as={Container} maxW="7xl" mt={0} p={4} >
      <section id="proveedores">

        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
          gap={4}>
          <GridItem colSpan={1}>
            <VStack alignItems="flex-start" spacing="20px">
              <Text
                textTransform={'uppercase'}
                color={'green.400'}
                fontWeight={600}
                fontSize={'sm'}
                bg={useColorModeValue('blue.50', 'blue.900')}
                p={2}
                alignSelf={'flex-start'}
                rounded={'md'}>
                PROVEEDOR
              </Text>
              <Heading>
                Conviértete en proveedor de transporte
              </Heading>
              <Box>
                <Image src='https://careers.tcitransportation.com/wp-content/uploads/The-Life-of-a-Truck-Driver-Rewards-and-Challenges-TCI-Transportation-scaled.jpg' />
              </Box>
              <Button bg="green.200" color='green.800' size="md" className='btn-move-animation'>
                Registrarme como proveedor
              </Button>
            </VStack>
          </GridItem>
          <GridItem>
            <Flex flexDir={'column'}>
              <Text textAlign='justify' mt={'11rem'}>
                Si eres piloto o propietario de un vehículo de transporte, puedes registrarte como proveedor externo y comenzar a recibir oportunidades para participar en nuestras cotizaciones y traslados.

                Al formar parte de nuestra plataforma, tendrás acceso a solicitudes reales de clientes, podrás presentar tus propuestas económicas y coordinar traslados de forma directa, todo dentro de un sistema ágil, transparente y profesional.
                <br />
                <br />
                <br />
              </Text>
              <Divider />
              <Text mt={4} textAlign='justify'>
                Conviértete en parte del motor que mueve Guatemala. Regístrate hoy mismo y empieza a generar oportunidades.
              </Text>
            </Flex>
          </GridItem>
        </Grid>
        <Divider mt={12} mb={12} />
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          }}
          gap={{ base: '8', sm: '12', md: '16' }}>
          <Feature
            heading={'Piloto/Proveedor'}
            text={'Crea tu perfil y empieza a recibir oportunidades como proveedor o piloto de transporte'}
          />
          <Feature
            heading={'Registra vehiculo'}
            text={'Registra tu vehículo o flotilla para recibir oportunidades'}
          />
          <Feature
            heading={'Tu propio horario'}
            text={'Recibe oportunidades y trabaja bajo tus tiempos'}
          />
          <Feature
            heading={'Más Ingresos'}
            text={'Recibe oportunidades de trabajo y aumenta tus ingresos'}
          />
        </Grid>
      </section>
    </Box>
  )
}



export default function Services() {

  return (
    <VStack spacing={8} align="stretch" mb={20}>
      <TransportServices />
      <SectionDivider title={'Proveedores'} />
      <ProveedorServices />
    </VStack>
  )
}
