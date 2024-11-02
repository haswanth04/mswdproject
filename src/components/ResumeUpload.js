
import React, { useState } from 'react';
import {
  Box,
  Button,
  Text,
  VStack,
  FormControl,
  FormLabel,
  Input,
  useToast,
  Icon,
  Center,
  Stack,
} from '@chakra-ui/react';
import { AiOutlineUpload } from 'react-icons/ai';

const ResumeUpload = () => {
  const [file, setFile] = useState(null);
  const toast = useToast();

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleUpload = () => {
    if (file) {
    
      toast({
        title: "Resume Uploaded",
        description: `${file.name} has been uploaded successfully!`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setFile(null); 
    } else {
      toast({
        title: "No File Selected",
        description: "Please choose a file to upload.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Center>
      <Box
        p={8}
        borderWidth={1}
        borderRadius="lg"
        boxShadow="lg"
        bg="white"
        width={{ base: '90%', sm: '70%', md: '50%', lg: '30%' }}
      >
        <Text fontSize="2xl" mb={4} fontWeight="bold" textAlign="center">
          Upload Your Resume
        </Text>
        <VStack spacing={4} align="stretch">
          <FormControl>
            <FormLabel htmlFor="file-upload" fontWeight="medium">
              Choose a file
            </FormLabel>
            <Input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              id="file-upload"
              display="none" 
            />
            <label htmlFor="file-upload">
              <Button
                as="span"
                colorScheme="teal"
                variant="outline"
                leftIcon={<Icon as={AiOutlineUpload} />}
                width="100%"
              >
                Choose File
              </Button>
            </label>
          </FormControl>
          {file && (
            <Box textAlign="center" p={3} borderWidth={1} borderRadius="md" bg="gray.100">
              <Text fontWeight="bold">{file.name}</Text>
            </Box>
          )}
          <Button
            colorScheme="teal"
            onClick={handleUpload}
            disabled={!file}
            isFullWidth 
            _hover={{ bg: 'teal.600', color: 'white' }}
          >
            Upload Resume
          </Button>
        </VStack>
      </Box>
    </Center>
  );
};

export default ResumeUpload;
