import { Box, Heading, Button, VStack, Text } from '@chakra-ui/react';

const ResumeManagement = () => {
  return (
    <Box p={8}>
      <VStack spacing={6} align="start" w="full">
        <Heading size="lg">Resume Management</Heading>
        <Text fontSize="md" color="gray.600">Upload and manage your resumes here.</Text>

        <Button colorScheme="teal" w="full">Upload Resume</Button>

        <Box bg="gray.50" p={6} rounded="md" shadow="md" w="full">
          <Heading size="md" mb={4}>Uploaded Resumes</Heading>
          <Text>No resumes uploaded yet.</Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default ResumeManagement;
