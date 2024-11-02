import React from 'react';
import { Box, Text, Image, VStack, HStack, SimpleGrid, Button } from '@chakra-ui/react';

// Example company logos
const companyLogos = [
  { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { name: 'Facebook', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg' },
  { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
  { name: 'Netflix', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
  { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
  { name: 'Tesla', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg' },
];

// Extended job postings data
const jobPostings = [
  {
    id: 1,
    title: 'Software Engineer',
    company: 'Google',
    location: 'Mountain View, CA',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    description: 'Develop and maintain cutting-edge software solutions in the cloud.',
  },
  {
    id: 2,
    title: 'Data Analyst',
    company: 'Amazon',
    location: 'Seattle, WA',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    description: 'Analyze data and provide insights to support key business decisions.',
  },
  {
    id: 3,
    title: 'Frontend Developer',
    company: 'Facebook',
    location: 'Menlo Park, CA',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg',
    description: 'Create responsive and interactive UI/UX for Facebook’s web platform.',
  },
  {
    id: 4,
    title: 'Product Manager',
    company: 'Microsoft',
    location: 'Redmond, WA',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
    description: 'Lead the development and launch of new software products and updates.',
  },
  {
    id: 5,
    title: 'Backend Engineer',
    company: 'Netflix',
    location: 'Los Gatos, CA',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
    description: 'Build scalable and efficient backend systems for streaming services.',
  },
  {
    id: 6,
    title: 'UI/UX Designer',
    company: 'Apple',
    location: 'Cupertino, CA',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
    description: 'Design intuitive and beautiful interfaces for Apple’s range of products.',
  },
  {
    id: 7,
    title: 'Machine Learning Engineer',
    company: 'Tesla',
    location: 'Palo Alto, CA',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg',
    description: 'Develop AI-driven solutions for autonomous driving systems.',
  },
  {
    id: 8,
    title: 'DevOps Engineer',
    company: 'Google',
    location: 'Mountain View, CA',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    description: 'Implement and optimize CI/CD pipelines for Google’s cloud services.',
  },
  {
    id: 9,
    title: 'Cloud Architect',
    company: 'Amazon',
    location: 'Seattle, WA',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    description: 'Design and manage cloud architecture solutions for Amazon Web Services.',
  },
  {
    id: 10,
    title: 'Cybersecurity Specialist',
    company: 'Microsoft',
    location: 'Redmond, WA',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
    description: 'Ensure the security of Microsoft’s networks, systems, and data.',
  },
];

const Dashboard = () => {
  return (
    <Box padding={5}>
      <Text fontSize="2xl" fontWeight="bold" marginBottom={4}>
        Featured Companies
      </Text>

      
      <SimpleGrid columns={[2, null, 5]} spacing={5} marginBottom={8}>
        {companyLogos.map((company, index) => (
          <Box key={index} padding={2} borderWidth="1px" borderRadius="lg">
            <Image src={company.logo} alt={company.name} height="50px" objectFit="contain" margin="auto" />
          </Box>
        ))}
      </SimpleGrid>

      <Text fontSize="2xl" fontWeight="bold" marginBottom={4}>
        Latest Job Postings
      </Text>

      
      <VStack spacing={5} align="stretch">
        {jobPostings.map((job) => (
          <Box key={job.id} borderWidth="1px" borderRadius="lg" padding={5} bg="gray.50">
            <HStack spacing={5}>
              <Image src={job.logo} alt={job.company} height="50px" objectFit="contain" />
              <Box>
                <Text fontSize="lg" fontWeight="bold">{job.title}</Text>
                <Text>{job.company} - {job.location}</Text>
                <Text fontSize="sm" color="gray.600">{job.description}</Text>
              </Box>
              <Button colorScheme="teal" variant="outline" marginLeft="auto">
                Apply Now
              </Button>
            </HStack>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Dashboard;
