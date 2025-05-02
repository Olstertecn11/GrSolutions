import {
  Box,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  VStack,
  Text,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { IoMdNotifications } from "react-icons/io";
import colors from "@/config/colors";


const menuData = [
  {
    label: "HOME",
    children: [
      { label: "Inicio 1", href: "/" },
      { label: "Inicio 2", href: "/home2" },
    ],
  },
  {
    label: "PAGES",
    children: [
      { label: "Acerca de", href: "/about" },
      { label: "Equipo", href: "/team" },
    ],
  },
  {
    label: "SERVICE",
    children: [
      { label: "Servicios 1", href: "/services/1" },
      { label: "Servicios 2", href: "/services/2" },
    ],
  },
  {
    label: "PORTFOLIO",
    children: [
      { label: "Proyectos", href: "/portfolio" },
      { label: "Galería", href: "/gallery" },
    ],
  },
  {
    label: "BLOG",
    children: [
      { label: "Noticias", href: "/blog" },
      { label: "Publicaciones", href: "/posts" },
    ],
  },
  {
    label: "CONTACT",
    href: "/contact",
  },
];

const Mobile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box display={{ base: "flex", md: "none" }} className="navbar-mobile" background={colors.navbar} >
      <IconButton
        icon={<HamburgerIcon />}
        mt={'0.4rem'}
        variant="ghost"
        colorScheme="whiteAlpha"
        onClick={onOpen}
        aria-label="Open Menu"
      />
      <Text fontSize="1xl" color="white" fontWeight="bold" ml={4} mt={3}>
        G&R Logistics
      </Text>

      <IconButton
        icon={<IoMdNotifications />}
        mt="0.4rem"
        ml="auto"
        variant="ghost"
        colorScheme="yellow"
        _hover={{ background: 'yellow.100' }}
        _active={{ background: 'yellow.200' }}
        _focus={{ boxShadow: 'outline' }}
        className="notification-icon"
        aria-label="Notificaciones"
        onClick={onOpen}
      />

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            Menú
            <IconButton
              icon={<CloseIcon />}
              variant="ghost"
              colorScheme="black"
              onClick={onClose}
              aria-label="Close Menu"
              position="absolute"
              right={4}
              top={4}
            />
          </DrawerHeader>

          <DrawerBody>
            <Accordion allowToggle>
              {menuData.map((item, index) => (
                <AccordionItem key={index} border="none">
                  {item.children ? (
                    <>
                      <AccordionButton px={0} py={3}>
                        <Box flex="1" textAlign="left" fontWeight="bold">
                          {item.label}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel pb={2}>
                        <VStack align="start" spacing={2}>
                          {item.children.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subItem.href}
                              color="gray.600"
                              _hover={{ color: "blue.500" }}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </VStack>
                      </AccordionPanel>
                    </>
                  ) : (
                    <Box py={3}>
                      <Link
                        href={item.href}
                        fontWeight="bold"
                        color="gray.700"
                        _hover={{ color: "blue.500" }}
                      >
                        {item.label}
                      </Link>
                    </Box>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Mobile;
