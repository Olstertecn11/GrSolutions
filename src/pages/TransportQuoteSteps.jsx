import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  Text,
  Checkbox,
  Step,
  StepDescription,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
  VStack,
  Heading,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";

const steps = [
  { title: "Contacto", description: "Tus datos" },
  { title: "Mercadería", description: "Detalles del servicio" },
  { title: "Recoger/Entregar", description: "Direcciones" },
  { title: "Seguro", description: "Protección y valor" },
  { title: "Resumen", description: "Confirmación" },
];

const TransportQuoteSteps = () => {
  const { activeStep, setActiveStep } = useSteps({ index: 0, count: steps.length });
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    const { name, value, files, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : files ? files[0] : value,
    }));
  };

  const next = () => setActiveStep(activeStep + 1);
  const prev = () => setActiveStep(activeStep - 1);

  return (
    <Box p={8}>
      <Text mb='4rem' color='blue.300' fontSize={'2rem'} textAlign='center'>Cotización para Traslado</Text>
      <Stepper index={activeStep} size="lg" colorScheme="blue">
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

      <Box mt={10}>
        {activeStep === 0 && (
          <VStack spacing={4} align="stretch">
            <FormControl isRequired><FormLabel>Nombre Completo</FormLabel><Input name="nombre" onChange={handleChange} /></FormControl>
            <FormControl isRequired><FormLabel>Teléfono de Contacto</FormLabel><Input name="telefono" onChange={handleChange} /></FormControl>
            <FormControl isRequired><FormLabel>Correo Electrónico</FormLabel><Input name="email" type="email" onChange={handleChange} /></FormControl>
            <FormControl isRequired><FormLabel>¿Servicio para empresa o persona individual?</FormLabel><Select name="tipo_cliente" onChange={handleChange}><option>Persona Individual</option><option>Empresa</option></Select></FormControl>
            <FormControl><FormLabel>Nombre de Empresa</FormLabel><Input name="empresa" onChange={handleChange} /></FormControl>
          </VStack>
        )}

        {activeStep === 1 && (
          <VStack spacing={4} align="stretch">
            <FormControl isRequired><FormLabel>Servicio a solicitar</FormLabel><Select name="servicio" onChange={handleChange}><option>Fletes</option><option>Mudanza</option><option>Traslado de Mercadería</option></Select></FormControl>
            <FormControl isRequired><FormLabel>Descripción</FormLabel><Textarea name="descripcion" onChange={handleChange} /></FormControl>
            <FormControl><FormLabel>¿Camión específico?</FormLabel><Select name="camion" onChange={handleChange}><option value="">Seleccionar</option><option value="Sí">Sí</option><option value="No">No</option></Select></FormControl>
            {[1, 2, 3, 4, 5].map((n) => (
              <FormControl key={n} isRequired={n === 1}><FormLabel>Foto {n} {n === 1 ? "(Obligatoria)" : "(Opcional)"}</FormLabel><Input type="file" name={`foto${n}`} accept="image/*" onChange={handleChange} /></FormControl>
            ))}
            <FormControl isRequired><FormLabel>Acompañantes para carga/descarga</FormLabel><Input name="acompanantes" placeholder="Ej: 2 o 0 si no necesitas" onChange={handleChange} /></FormControl>
          </VStack>
        )}

        {activeStep === 2 && (
          <VStack spacing={4} align="stretch">
            <FormControl isRequired><FormLabel>Fecha del servicio</FormLabel><Input name="fecha" type="date" onChange={handleChange} /></FormControl>
            <FormControl isRequired><FormLabel>Horario específico</FormLabel><Input name="hora" onChange={handleChange} /></FormControl>
            <FormControl isRequired><FormLabel>Dirección de recogida</FormLabel><Textarea name="direccion_recoger" onChange={handleChange} /></FormControl>
            <FormControl isRequired><FormLabel>Tipo de ubicación (recoger)</FormLabel><Input name="ubicacion_recoger" onChange={handleChange} /></FormControl>
            <FormControl isRequired><FormLabel>Nivel (recoger)</FormLabel><Input name="nivel_recoger" onChange={handleChange} /></FormControl>
            <FormControl><FormLabel>Más información punto recogida</FormLabel><Textarea name="info_extra_recoger" onChange={handleChange} /></FormControl>
            <FormControl isRequired><FormLabel>Dirección de entrega</FormLabel><Textarea name="direccion_entrega" onChange={handleChange} /></FormControl>
            <FormControl isRequired><FormLabel>Tipo de ubicación (entrega)</FormLabel><Input name="ubicacion_entrega" onChange={handleChange} /></FormControl>
            <FormControl isRequired><FormLabel>Nivel (entrega)</FormLabel><Input name="nivel_entrega" onChange={handleChange} /></FormControl>
            <FormControl><FormLabel>Más información punto entrega</FormLabel><Textarea name="info_extra_entrega" onChange={handleChange} /></FormControl>
          </VStack>
        )}

        {activeStep === 3 && (
          <VStack spacing={4} align="stretch">
            <FormControl isRequired><FormLabel>¿Tiene seguro actualmente?</FormLabel><Select name="tiene_seguro" onChange={handleChange}><option>Sí</option><option>No</option></Select></FormControl>
            {form.tiene_seguro === "No" && (
              <FormControl><FormLabel>¿Desea que MueveGT cotice el seguro?</FormLabel><Select name="desea_seguro" onChange={handleChange}><option>Sí</option><option>No</option></Select></FormControl>
            )}
            <FormControl><FormLabel>Monto de la factura (Q)</FormLabel><Input name="valor_factura" type="number" onChange={handleChange} /></FormControl>
            <Checkbox name="acepta_terminos" onChange={handleChange}>
              Declaro que he leído y comprendido todos los términos y condiciones antes de aceptar el servicio.
            </Checkbox>
          </VStack>
        )}

        {activeStep === 4 && (
          <Box>
            <Heading size="md" mb={4}>Resumen de la solicitud</Heading>
            <pre>{JSON.stringify(form, null, 2)}</pre>
          </Box>
        )}
      </Box>

      <Stack direction="row" spacing={4} mt={8}>
        {activeStep > 0 && <Button onClick={prev}>Atrás</Button>}
        {activeStep < steps.length - 1 ? (
          <Button colorScheme="blue" onClick={next}>Siguiente</Button>
        ) : (
          <Button colorScheme="green" onClick={() => alert("Formulario enviado")}>Enviar</Button>
        )}
      </Stack>
    </Box>
  );
};

export default TransportQuoteSteps;
