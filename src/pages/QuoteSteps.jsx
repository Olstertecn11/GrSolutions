import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Step,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  StepDescription,
  Stepper,
  useSteps,
  VStack,
  Textarea,
  Flex,
} from '@chakra-ui/react';
import { useState } from 'react';

const steps = [
  { title: 'Cliente', description: 'Tus datos' },
  { title: 'Servicio', description: 'Detalles' },
  { title: 'Direcciones', description: 'Origen y destino' },
  { title: 'Resumen', description: 'Confirmar envío' },
];

const QuouteSteps = () => {
  const { activeStep, setActiveStep } = useSteps({ initialStep: 0 });

  const nextStep = () => setActiveStep((s) => s + 1);
  const prevStep = () => setActiveStep((s) => s - 1);

  return (
    <Box maxW="4xl" mx="auto" py={10}>
      <Stepper index={activeStep} colorScheme="blue" mb={10}>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus complete={<StepNumber />} incomplete={<StepNumber />} active={<StepNumber />} />
            </StepIndicator>
            <Box flexShrink="0">
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </Box>
            <StepSeparator />
          </Step>
        ))}
      </Stepper>

      <Box p={6} borderWidth="1px" borderRadius="lg" bg="white" shadow="md">
        {activeStep === 0 && (
          <VStack spacing={4} align="stretch">
            <FormControl isRequired>
              <FormLabel>Nombre completo</FormLabel>
              <Input placeholder="Ej. Juan Pérez" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Correo electrónico</FormLabel>
              <Input type="email" placeholder="correo@ejemplo.com" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Teléfono</FormLabel>
              <Input type="tel" placeholder="Ej. 5555-5555" />
            </FormControl>
          </VStack>
        )}

        {activeStep === 1 && (
          <VStack spacing={4} align="stretch">
            <FormControl isRequired>
              <FormLabel>Tipo de servicio</FormLabel>
              <Select placeholder="Selecciona una opción">
                <option value="mudanza">Mudanza</option>
                <option value="flete">Flete</option>
                <option value="transporte">Transporte de carga</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Fecha del servicio</FormLabel>
              <Input type="date" />
            </FormControl>
            <FormControl>
              <FormLabel>Hora estimada</FormLabel>
              <Input type="time" />
            </FormControl>
          </VStack>
        )}

        {activeStep === 2 && (
          <VStack spacing={4} align="stretch">
            <FormControl isRequired>
              <FormLabel>Dirección de origen</FormLabel>
              <Textarea placeholder="Ej. Zona 10, Ciudad de Guatemala" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Dirección de destino</FormLabel>
              <Textarea placeholder="Ej. Carretera a El Salvador, KM 12" />
            </FormControl>
          </VStack>
        )}

        {activeStep === 3 && (
          <Box textAlign="center">
            <Text mb={4}>¿Estás listo para enviar tu solicitud?</Text>
            <Button colorScheme="green">Enviar Cotización</Button>
          </Box>
        )}

        <Flex justify="space-between" mt={8}>
          <Button onClick={prevStep} isDisabled={activeStep === 0}>
            Atrás
          </Button>
          {activeStep < steps.length - 1 ? (
            <Button onClick={nextStep} colorScheme="blue">
              Siguiente
            </Button>
          ) : null}
        </Flex>
      </Box>
    </Box>
  );
};

export default QuouteSteps;
