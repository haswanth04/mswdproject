import React from 'react';
import { Box, Text, HStack } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box 
      as="footer" 
      width="100%" 
      padding="10px 20px" 
      backgroundColor="teal.500" 
      color="white" 
      textAlign="center"
      position="relative"
      bottom="0"
    >
      <HStack justifyContent="center" spacing={2}>
        <Text fontSize="sm">© 2024 Job Portal. All rights reserved.</Text>
        <Text fontSize="sm">|</Text>
        <Text fontSize="sm">Privacy Policy</Text>
        <Text fontSize="sm">|</Text>
        <Text fontSize="sm">Terms of Service</Text>
      </HStack>
    </Box>
  );
};

export default Footer;
