import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Divider,
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
  Heading,
  Text,
  Stack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { IoMdArrowRoundBack } from "react-icons/io";

const steps = [
  { title: 'Cliente', description: 'Tus datos' },
  { title: 'Servicio', description: 'Detalles' },
  { title: 'Direcciones', description: 'Origen y destino' },
  { title: 'Resumen', description: 'Confirmar envío' },
];

const QuouteSteps = () => {
  const { activeStep, setActiveStep } = useSteps({ initialStep: 0 });

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    servicio: '',
    fecha: '',
    hora: '',
    origen: '',
    destino: '',
  });

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const nextStep = () => setActiveStep((s) => s + 1);
  const prevStep = () => setActiveStep((s) => s - 1);

  const handleSubmit = () => {
    // Aquí puedes enviar los datos al backend o servicio de correo
    alert('Cotización enviada correctamente ✅');
  };

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
              <Input value={formData.nombre} onChange={handleChange('nombre')} placeholder="Ej. Juan Pérez" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Correo electrónico</FormLabel>
              <Input type="email" value={formData.email} onChange={handleChange('email')} placeholder="correo@ejemplo.com" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Teléfono</FormLabel>
              <Input type="tel" value={formData.telefono} onChange={handleChange('telefono')} placeholder="Ej. 5555-5555" />
            </FormControl>
          </VStack>
        )}

        {activeStep === 1 && (
          <VStack spacing={4} align="stretch">
            <FormControl isRequired>
              <FormLabel>Tipo de servicio</FormLabel>
              <Select value={formData.servicio} onChange={handleChange('servicio')} placeholder="Selecciona una opción">
                <option value="mudanza">Mudanza</option>
                <option value="flete">Flete</option>
                <option value="transporte">Transporte de carga</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Fecha del servicio</FormLabel>
              <Input type="date" value={formData.fecha} onChange={handleChange('fecha')} />
            </FormControl>
            <FormControl>
              <FormLabel>Hora estimada</FormLabel>
              <Input type="time" value={formData.hora} onChange={handleChange('hora')} />
            </FormControl>
          </VStack>
        )}

        {activeStep === 2 && (
          <VStack spacing={4} align="stretch">
            <FormControl isRequired>
              <FormLabel>Dirección de origen</FormLabel>
              <Textarea value={formData.origen} onChange={handleChange('origen')} placeholder="Ej. Zona 10, Ciudad de Guatemala" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Dirección de destino</FormLabel>
              <Textarea value={formData.destino} onChange={handleChange('destino')} placeholder="Ej. Carretera a El Salvador, KM 12" />
            </FormControl>
          </VStack>
        )}

        {activeStep === 3 && (
          <Box>
            <Heading size="md" mb={4}>Resumen de la cotización</Heading>
            <Divider mb={4} />
            <Stack spacing={3}>
              <Text><b>Nombre:</b> {formData.nombre}</Text>
              <Text><b>Email:</b> {formData.email}</Text>
              <Text><b>Teléfono:</b> {formData.telefono}</Text>
              <Text><b>Servicio:</b> {formData.servicio}</Text>
              <Text><b>Fecha:</b> {formData.fecha}</Text>
              <Text><b>Hora:</b> {formData.hora}</Text>
              <Text><b>Origen:</b> {formData.origen}</Text>
              <Text><b>Destino:</b> {formData.destino}</Text>
            </Stack>

          </Box>
        )}

        <Flex justify="space-between" mt={8} >
          <Button onClick={prevStep} isDisabled={activeStep === 0}>
            {
              activeStep === steps.length - 1 ? <IoMdArrowRoundBack style={{ marginLeft: '5px' }} fontSize={20} /> : 'Atras'
            }
          </Button>
          {activeStep < steps.length - 1 && (
            <Button onClick={nextStep} colorScheme="blue">
              Siguiente
            </Button>
          )}
          {activeStep === steps.length - 1 && (
            <Button onClick={handleSubmit} colorScheme="green" width="full" ml={2}>
              Enviar Cotización
            </Button>
          )}
        </Flex>
      </Box>
    </Box>
  );
};

export default QuouteSteps;
