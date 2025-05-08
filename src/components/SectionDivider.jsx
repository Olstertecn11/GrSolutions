
import { Box, Flex, Icon, useColorModeValue } from "@chakra-ui/react";
import { FaStar, FaTruck } from "react-icons/fa";

const SectionDivider = ({ icon = FaTruck, color = "blue.600" }) => {
  return (
    <Flex
      align="center"
      justify="center"
      my={{ base: 12, md: 16 }}
      px={4}
      position="relative"
    >
      <Box
        flex="1"
        h="1px"
        bg={useColorModeValue("gray.300", "gray.600")}
        borderRadius="full"
      />

      <Box
        mx={6}
        bg={useColorModeValue("white", "gray.900")}
        p={2}
        borderRadius="full"
        boxShadow="md"
        animation="pulse 2s infinite"
      >
        <Icon as={icon} boxSize={5} color={color} />
      </Box>

      <Box
        flex="1"
        h="1px"
        bg={useColorModeValue("gray.300", "gray.600")}
        borderRadius="full"
      />
    </Flex>
  );
};

export default SectionDivider;
