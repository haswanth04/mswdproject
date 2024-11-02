import React, { useState, useEffect } from 'react';
import {
  Box,
  Heading,
  Text,
  Progress,
  Badge,
  VStack,
  HStack,
  Button,
  useToast,
  Spinner,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { CheckIcon, InfoIcon, TimeIcon, WarningIcon } from '@chakra-ui/icons';

const MotionBox = motion(Box);

const ApplicationTracking = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const toast = useToast();

  useEffect(() => {
  
    setTimeout(() => {
      const fetchedApplications = [
        {
          jobTitle: 'Frontend Developer',
          company: 'Google',
          status: 'Interviewing',
          progress: 50,
        },
        {
          jobTitle: 'Backend Engineer',
          company: 'Amazon',
          status: 'Applied',
          progress: 25,
        },
        {
          jobTitle: 'Data Scientist',
          company: 'Microsoft',
          status: 'Accepted',
          progress: 100,
        },
      ];
      setApplications(fetchedApplications);
      setLoading(false);
    }, 2000);
  }, []);

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Applied':
        return <Badge colorScheme="blue">Applied</Badge>;
      case 'Interviewing':
        return <Badge colorScheme="yellow">Interviewing</Badge>;
      case 'Accepted':
        return <Badge colorScheme="green">Accepted</Badge>;
      case 'Rejected':
        return <Badge colorScheme="red">Rejected</Badge>;
      default:
        return <Badge>Unknown</Badge>;
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Applied':
        return <TimeIcon />;
      case 'Interviewing':
        return <InfoIcon />;
      case 'Accepted':
        return <CheckIcon />;
      case 'Rejected':
        return <WarningIcon />;
      default:
        return <InfoIcon />;
    }
  };

  return (
    <Box p={8} maxW="900px" mx="auto">
      <Heading as="h2" size="xl" mb={6} textAlign="center" color="teal.600">
        Application Tracking
      </Heading>

      
      {loading ? (
        <VStack>
          <Spinner size="xl" color="teal.500" />
          <Text>Loading applications...</Text>
        </VStack>
      ) : (
        <VStack spacing={6}>
          {applications.map((app, index) => (
            <MotionBox
              key={index}
              bg="white"
              p={6}
              boxShadow="lg"
              borderRadius="lg"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              width="full"
            >
              <HStack justifyContent="space-between">
                <Box>
                  <Heading as="h3" size="md" color="teal.600">
                    {app.jobTitle}
                  </Heading>
                  <Text fontSize="lg" color="gray.600">
                    {app.company}
                  </Text>
                </Box>
                <Box>{getStatusBadge(app.status)}</Box>
              </HStack>

              
              <HStack mt={4}>
                {getStatusIcon(app.status)}
                <Text>{app.status}</Text>
              </HStack>
              <Progress value={app.progress} size="sm" colorScheme="teal" mt={2} />

              
              <HStack mt={4} spacing={4}>
                <Button colorScheme="teal" variant="solid">
                  View Details
                </Button>
                <Button colorScheme="gray" variant="outline">
                  Withdraw Application
                </Button>
              </HStack>
            </MotionBox>
          ))}
        </VStack>
      )}
    </Box>
  );
};

export default ApplicationTracking;
