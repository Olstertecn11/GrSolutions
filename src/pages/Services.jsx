import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  HStack,
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
    <div style={{ marginTop: '1rem' }}>
      <section id="transporte">
        <Container maxW={'5xl'} py={12}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Stack spacing={4} className='stack_'>
              <Text
                textTransform={'uppercase'}
                color={'blue.400'}
                fontWeight={600}
                fontSize={'sm'}
                bg={useColorModeValue('blue.50', 'blue.900')}
                p={2}
                alignSelf={'flex-start'}
                rounded={'md'}>
                SERVICIOS DE TRANSPORTE
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
          <Button mt={14} background='blue.600' color='blue.50' className='btn-move-animation'>Realizar Cotización</Button>
        </Container>

      </section>
    </div>
  )
}





const Feature = ({ heading, text, isLast = false }) => {
  return (
    <Box padding={4} height={'80%'} w='300px' borderRight={isLast ? 'none' : '2px solid white'}>
      <GridItem>
        <chakra.h6 fontSize="lg" fontWeight="600" color='white'>
          {heading}
        </chakra.h6>
        <chakra.p color='white' textAlign='justify' mt={2}>{text}</chakra.p>
      </GridItem>
    </Box>
  )
}

const ProveedorServices = () => {
  return (
    <Box as={Container} p={4} m={0} w='100%' maxW={'100%'} background={'white'}>
      <section id="proveedores" style={{ padding: '4rem' }}>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
          gap={8}>
          <GridItem colSpan={1}>
            <VStack alignItems="flex-start" spacing="20px">
              <Heading
                as="h2"
                fontSize="3xl"
                display="inline"
                color='#4a90e2'
                position="relative"
                zIndex="0"
              >
                <Box
                  as="span"
                  position="relative"
                  _after={{
                    content: `""`,
                    position: 'absolute',
                    left: '10%',
                    bottom: 0,
                    width: '95%',
                    height: '0.35em',
                    bg: '#4a90e269',
                    zIndex: -1,
                  }}
                >
                  Conviértete en proveedor de transporte
                </Box>
              </Heading>
              <Box w='full' display={'flex'} justifyContent='center'>
                <Image src='https://careers.tcitransportation.com/wp-content/uploads/The-Life-of-a-Truck-Driver-Rewards-and-Challenges-TCI-Transportation-scaled.jpg' borderRadius={'full'}
                  height={'30vw'}
                  objectFit={'cover'}
                  width={'30vw'}
                />
              </Box>
            </VStack>
          </GridItem>
          <GridItem>
            <Flex flexDir={'column'}>
              <Text textAlign='justify' mt={'11rem'} color='#4a90e2' fontSize={'1.2rem'}>
                Si eres piloto o propietario de un vehículo de transporte, puedes registrarte como proveedor externo y comenzar a recibir oportunidades para participar en nuestras cotizaciones y traslados.

                Al formar parte de nuestra plataforma, tendrás acceso a solicitudes reales de clientes, podrás presentar tus propuestas económicas y coordinar traslados de forma directa, todo dentro de un sistema ágil, transparente y profesional.
                <br />
                <br />
                <br />
              </Text>
              <Divider bg={'#006ff2'} h='0.2rem' />
              <Text mt={4} textAlign='justify' color='#4a90e2' fontSize='1.2rem'>
                Conviértete en parte del motor que mueve Guatemala. Regístrate hoy mismo y empieza a generar oportunidades.
              </Text>
              <Button w={'40%'} bg="#4a90e2" color='white' size="md" className='btn-move-animation' mt={6} borderRadius={'2rem'}>
                Registrarme como proveedor
              </Button>
            </Flex>
          </GridItem>
        </Grid>
      </section>
    </Box>
  )
}



export default function Services() {

  return (
    <VStack spacing={8} align="stretch" mb={20} w='full' marginBottom={0} h='full'>
      <div className="pos-relative" style={{ height: '10rem' }}>
        <div className="custom-shape-divider-top-1747194784">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
          </svg>
        </div>
      </div>

      <Text color={'blue.500'} fontSize={'4rem'} fontWeight='bold' position={'relative'} textAlign='center'>Servicios</Text>
      <TransportServices />
      <Box w='full' bg='#4A90E2' h='10rem'>
        <HStack h='100%' gap={'4rem'} justifyItems='center' justifyContent='center'>
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
            isLast={true}
          />
        </HStack>
      </Box>

      <ProveedorServices />
    </VStack>
  )
}
