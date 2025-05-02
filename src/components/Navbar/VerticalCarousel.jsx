import React, { useState, useEffect } from 'react';
import { Flex, Text, Button, Box } from '@chakra-ui/react';
import colors from '@/config/colors'


const VerticalCarousel = ({ items }) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselLength = items.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselLength - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval); // limpieza
  }, [carouselLength]);

  return (
    <div className='vertical-carousel'>
      <Flex
        position="absolute"
        top="50%"
        left="20px"
        transform="translateY(-50%)"
        direction="column"
        gap={3}
        zIndex={2}
      >
        {items.map((_, index) => (
          <Box
            key={index}
            width="12px"
            height="12px"
            borderRadius="full"
            cursor="pointer"
            border="2px solid white"
            bg={index === currentIndex ? 'white' : 'transparent'}
            transition="all 0.3s ease"
            onClick={() => setCurrentIndex(index)}
            _hover={{
              bg: 'whiteAlpha.600',
            }}
          />
        ))}
      </Flex>
      <img src={items[currentIndex].image} alt={items[currentIndex].title} className='img-bg' />

      <Flex direction='column' className='carousel-content' alignItems='center' justifyContent='center' alignContent={'center'} justifyItems={'center'} h={'100%'} px={10}>

        <Text fontSize='2xl' fontWeight='bold' color='white'>
          {items[currentIndex].title}
        </Text>
        <Text fontSize='lg' color='white' textAlign='center'>
          {items[currentIndex].description}
        </Text>
        <Button
          mt={4}
          background={colors.colorbase}
          _hover={{ background: 'white', color: colors.colorbase }}
          padding='10px 20px'
          color='white'
        >
          Conocer más
        </Button>
      </Flex>
    </div>
  );
};

export default VerticalCarousel;
