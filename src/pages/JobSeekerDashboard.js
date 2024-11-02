// src/pages/JobSeekerDashboard.js
import React from 'react';
import { Box, Heading, VStack, HStack, Text, Image, Button } from '@chakra-ui/react';
import ResumeUpload from '../components/ResumeUpload'; // Import ResumeUpload

const JobSeekerDashboard = () => {
  const jobListings = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/512px-Google_2015_logo.svg.png",
      description: "Join the Google team as a Frontend Developer to build innovative web applications.",
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "Facebook",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/512px-Facebook_f_logo_%282019%29.svg.png",
      description: "Seeking a Backend Developer at Facebook to work on scalable systems.",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",
      description: "Join us as a UI/UX Designer to enhance the user experience for our customers.",
    },
    {
      id: 4,
      title: "Data Scientist",
      company: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png",
      description: "We're looking for a Data Scientist to analyze large datasets and provide insights.",
    },
    {
      id: 5,
      title: "Product Manager",
      company: "Netflix",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/512px-Netflix_2015_logo.svg.png",
      description: "Manage product development and strategy at Netflix.",
    },
    {
      id: 6,
      title: "Software Engineer",
      company: "Apple",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/512px-Apple_logo_black.svg.png",
      description: "Develop innovative software solutions for Apple products.",
    },
    {
      id: 7,
      title: "Cloud Engineer",
      company: "IBM",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/512px-IBM_logo.svg.png",
      description: "Work on cloud solutions and architecture at IBM.",
    },
    {
      id: 8,
      title: "Full Stack Developer",
      company: "Tesla",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tesla_T_symbol.svg/512px-Tesla_T_symbol.svg.png",
      description: "Join Tesla as a Full Stack Developer to build innovative software solutions for electric cars.",
    },
    {
      id: 9,
      title: "DevOps Engineer",
      company: "Spotify",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
      description: "Join Spotify as a DevOps Engineer to maintain and improve our deployment infrastructure.",
    },
  
  ];

  const handleApply = (jobTitle) => {
    alert(`You have applied for the ${jobTitle} position!`);
  };

  return (
    <Box p={5} overflowY="auto" maxHeight="80vh">
      <Heading mb={5}>Job Seeker Dashboard</Heading>
      <VStack spacing={4} align="stretch">
        {jobListings.map((job) => (
          <HStack
            key={job.id}
            p={4}
            borderWidth={1}
            borderRadius="lg"
            boxShadow="md"
            spacing={4}
            backgroundColor="white"
            _hover={{ backgroundColor: "gray.100" }}
            transition="background-color 0.2s"
          >
            <Image src={job.logo} alt={job.company} boxSize="50px" objectFit="contain" />
            <VStack align="start" spacing={1} flex="1">
              <Text fontWeight="bold">{job.title}</Text>
              <Text color="gray.600">{job.company}</Text>
              <Text>{job.description}</Text>
            </VStack>
            <Button
              colorScheme="teal"
              onClick={() => handleApply(job.title)}
            >
              Apply
            </Button>
          </HStack>
        ))}
      </VStack>

      
      <ResumeUpload />
    </Box>
  );
};

export default JobSeekerDashboard;
