import React from 'react';
import { Box, Text, CloseButton } from '@chakra-ui/react';

const Notification = ({ message, onClose }) => {
  return (
    <Box borderWidth={1} borderRadius="lg" p={3} mb={4} bg="gray.100" display="flex" justifyContent="space-between" alignItems="center">
      <Text>{message}</Text>
      <CloseButton onClick={onClose} />
    </Box>
  );
};

export default Notification;
