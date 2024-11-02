import React from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';

const JobCard = ({ job }) => {
  return (
    <Box borderWidth={1} borderRadius="lg" p={5} boxShadow="md" transition="0.3s" _hover={{ boxShadow: "lg" }}>
      <Heading size="md">{job.title}</Heading>
      <Text mt={2}>{job.description}</Text>
      <Button mt={4} colorScheme="teal">View Details</Button>
    </Box>
  );
};

export default JobCard;
