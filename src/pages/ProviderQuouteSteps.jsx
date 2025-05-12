// ProviderQuoteSteps.jsx
import React, { useState } from "react";
import {
  Box,
  Heading,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
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
  Checkbox,
  Stack,
} from "@chakra-ui/react";

const steps = [
  { title: "General", description: "Información del proveedor" },
  { title: "Vehículo", description: "Detalles del vehículo" },
  { title: "Servicios", description: "Qué puedes ofrecer" },
  { title: "Pilotos", description: "Datos del piloto" },
];

const ProviderQuoteSteps = () => {
  const { activeStep, setActiveStep } = useSteps({ index: 0, count: steps.length });
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const next = () => setActiveStep(activeStep + 1);
  const prev = () => setActiveStep(activeStep - 1);

  return (
    <Box p={6}>
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

      <Box mt={8}>
        {activeStep === 0 && (
          <VStack spacing={4} align="stretch">
            <FormControl isRequired><FormLabel>Tipo de Proveedor</FormLabel><Select name="tipo_proveedor" onChange={handleChange}><option>Dueño</option><option>Piloto</option></Select></FormControl>
            <FormControl isRequired><FormLabel>Nombres</FormLabel><Input name="nombres" onChange={handleChange} /></FormControl>
            <FormControl isRequired><FormLabel>Apellidos</FormLabel><Input name="apellidos" onChange={handleChange} /></FormControl>
            <FormControl isRequired><FormLabel>Teléfono Principal</FormLabel><Input name="telefono" onChange={handleChange} /></FormControl>
            <FormControl isRequired><FormLabel>Correo Electrónico</FormLabel><Input name="email" type="email" onChange={handleChange} /></FormControl>
            <FormControl isRequired><FormLabel>Años de Experiencia</FormLabel><Input name="experiencia" type="number" onChange={handleChange} /></FormControl>
          </VStack>
        )}

        {activeStep === 1 && (
          <VStack spacing={4} align="stretch">
            <FormControl isRequired><FormLabel>Marca</FormLabel><Input name="marca" onChange={handleChange} /></FormControl>
            <FormControl isRequired><FormLabel>Modelo</FormLabel><Input name="modelo" onChange={handleChange} /></FormControl>
            <FormControl isRequired><FormLabel>Placa</FormLabel><Input name="placa" onChange={handleChange} /></FormControl>
            <FormControl isRequired><FormLabel>Peso Máximo de Carga</FormLabel><Input name="peso" type="number" onChange={handleChange} /></FormControl>
            <FormControl isRequired><FormLabel>Medida en Largo</FormLabel><Input name="largo" type="number" onChange={handleChange} /></FormControl>
            <FormControl isRequired><FormLabel>Medida en Ancho</FormLabel><Input name="ancho" type="number" onChange={handleChange} /></FormControl>
            <FormControl isRequired><FormLabel>Medida en Alto</FormLabel><Input name="alto" type="number" onChange={handleChange} /></FormControl>
            <FormControl isRequired><FormLabel>Tipo de Carrocería</FormLabel><Input name="carroceria" onChange={handleChange} /></FormControl>
            <FormControl isRequired><FormLabel>Estado del Vehículo</FormLabel><Select name="estado" onChange={handleChange}><option>Bueno</option><option>Regular</option></Select></FormControl>
            <FormControl isRequired><FormLabel>Fecha Última Revisión Mecánica</FormLabel><Input name="revision" type="date" onChange={handleChange} /></FormControl>
            <FormControl isRequired><FormLabel>GPS</FormLabel><Select name="gps" onChange={handleChange}><option>Sí</option><option>No</option></Select></FormControl>
            <FormControl isRequired><FormLabel>Seguro Contra Accidentes</FormLabel><Select name="seguro" onChange={handleChange}><option>Sí</option><option>No</option></Select></FormControl>
            <FormControl isRequired><FormLabel>Restricción Horaria</FormLabel><Select name="restriccion" onChange={handleChange}><option>Sí</option><option>No</option></Select></FormControl>
            <FormControl isRequired><FormLabel>Foto Lateral</FormLabel><Input name="foto_lateral" type="file" onChange={handleChange} /></FormControl>
            <FormControl isRequired><FormLabel>Foto Carga</FormLabel><Input name="foto_carga" type="file" onChange={handleChange} /></FormControl>
            <FormControl isRequired><FormLabel>Foto Frontal</FormLabel><Input name="foto_frontal" type="file" onChange={handleChange} /></FormControl>
            <FormControl isRequired><FormLabel>Tarjeta de Circulación</FormLabel><Input name="tarjeta" type="file" onChange={handleChange} /></FormControl>
          </VStack>
        )}

        {activeStep === 2 && (
          <VStack spacing={4} align="stretch">
            <FormControl isRequired><FormLabel>Tipo de Servicio</FormLabel><Input name="tipo_servicio" onChange={handleChange} /></FormControl>
            <FormControl isRequired><FormLabel>¿Ofrece embalaje?</FormLabel><Select name="embalaje" onChange={handleChange}><option>Sí</option><option>No</option></Select></FormControl>
            <FormControl isRequired><FormLabel>¿Ofrece ayudantes?</FormLabel><Select name="ayudantes" onChange={handleChange}><option>Sí</option><option>No</option></Select></FormControl>
            {['casco', 'chaleco', 'botas', 'cinchos', 'diablos', 'carton', 'strech', 'conos', 'esponjas', 'lonas', 'herramientas'].map((item) => (
              <FormControl isRequired key={item}><FormLabel>{item.charAt(0).toUpperCase() + item.slice(1)}</FormLabel><Select name={item} onChange={handleChange}><option>Sí</option><option>No</option></Select></FormControl>
            ))}
            <FormControl><FormLabel>Otros</FormLabel><Textarea name="otros" onChange={handleChange} /></FormControl>
          </VStack>
        )}

        {activeStep === 3 && (
          <VStack spacing={4} align="stretch">
            <Heading size="sm">Piloto 1</Heading>
            <FormControl isRequired><FormLabel>Nombre</FormLabel><Input name="piloto1_nombre" onChange={handleChange} /></FormControl>
            <FormControl isRequired><FormLabel>Teléfono</FormLabel><Input name="piloto1_telefono" onChange={handleChange} /></FormControl>
            <FormControl isRequired><FormLabel>Tipo Licencia</FormLabel><Input name="piloto1_licencia" onChange={handleChange} /></FormControl>
            <FormControl isRequired><FormLabel>Años Antigüedad</FormLabel><Input name="piloto1_antiguedad" type="number" onChange={handleChange} /></FormControl>
            <FormControl isRequired><FormLabel>Licencia Frente</FormLabel><Input name="lic_frente1" type="file" onChange={handleChange} /></FormControl>
            <FormControl isRequired><FormLabel>Licencia Reverso</FormLabel><Input name="lic_reverso1" type="file" onChange={handleChange} /></FormControl>
            <FormControl><FormLabel>Penales</FormLabel><Input name="penales1" type="file" onChange={handleChange} /></FormControl>
            <FormControl><FormLabel>Policiacos</FormLabel><Input name="policiacos1" type="file" onChange={handleChange} /></FormControl>

            <Heading size="sm" mt={6}>Piloto 2 (opcional)</Heading>
            <FormControl><FormLabel>Nombre</FormLabel><Input name="piloto2_nombre" onChange={handleChange} /></FormControl>
            <FormControl><FormLabel>Teléfono</FormLabel><Input name="piloto2_telefono" onChange={handleChange} /></FormControl>
            <FormControl><FormLabel>Tipo Licencia</FormLabel><Input name="piloto2_licencia" onChange={handleChange} /></FormControl>
            <FormControl><FormLabel>Años Antigüedad</FormLabel><Input name="piloto2_antiguedad" type="number" onChange={handleChange} /></FormControl>
            <FormControl><FormLabel>Licencia Frente</FormLabel><Input name="lic_frente2" type="file" onChange={handleChange} /></FormControl>
            <FormControl><FormLabel>Licencia Reverso</FormLabel><Input name="lic_reverso2" type="file" onChange={handleChange} /></FormControl>
            <FormControl><FormLabel>Penales</FormLabel><Input name="penales2" type="file" onChange={handleChange} /></FormControl>
            <FormControl><FormLabel>Policiacos</FormLabel><Input name="policiacos2" type="file" onChange={handleChange} /></FormControl>
          </VStack>
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

export default ProviderQuoteSteps;
