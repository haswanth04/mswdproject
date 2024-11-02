// src/pages/JobPosting.js
import React, { useState } from 'react';
import { 
  Box, 
  Heading, 
  FormControl, 
  FormLabel, 
  Input, 
  Textarea, 
  Button, 
  VStack, 
  useToast, 
  Tooltip, 
  FormHelperText 
} from '@chakra-ui/react';
import { motion } from 'framer-motion'; // For animations

const JobPosting = () => {
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [description, setDescription] = useState('');
  const toast = useToast(); // Chakra UI toast for notifications

  const handlePostJob = () => {
    if (!title || !company || !description) {
      toast({
        title: "Missing Fields",
        description: "Please fill in all fields before submitting.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    
    toast({
      title: "Job Posted!",
      description: `${title} at ${company} has been successfully posted.`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });

    
    setTitle('');
    setCompany('');
    setDescription('');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Box p={8} maxWidth="800px" mx="auto" borderWidth={1} borderRadius="lg" boxShadow="lg" mt={5}>
        <Heading mb={6} textAlign="center" color="teal.500">
          Post a New Job
        </Heading>

        <VStack spacing={5}>
          <FormControl isRequired>
            <FormLabel>Job Title</FormLabel>
            <Tooltip label="Enter the title of the job you're posting" fontSize="sm" placement="right">
              <Input 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder="e.g., Software Engineer" 
              />
            </Tooltip>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Company Name</FormLabel>
            <Tooltip label="Enter the company where the job is available" fontSize="sm" placement="right">
              <Input 
                value={company} 
                onChange={(e) => setCompany(e.target.value)} 
                placeholder="e.g., Google" 
              />
            </Tooltip>
            <FormHelperText>Make sure this is an official company name.</FormHelperText>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Job Description</FormLabel>
            <Textarea 
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
              placeholder="Provide a detailed description of the job role and requirements" 
            />
          </FormControl>

          <Button colorScheme="teal" size="lg" width="100%" onClick={handlePostJob}>
            Post Job
          </Button>
        </VStack>
      </Box>
    </motion.div>
  );
};

export default JobPosting;
