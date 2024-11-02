import React, { useState } from 'react';
import { Box, Heading, Button, Stack } from '@chakra-ui/react';
import JobCard from '../components/JobCard';
import { useNavigate } from 'react-router-dom';

const EmployerDashboard = () => {
  const navigate = useNavigate(); // Hook for navigation

  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Frontend Developer",
      company: "Google",
      description: "Looking for a skilled Frontend Developer with experience in React.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "Amazon",
      description: "Seeking a Backend Developer with expertise in Node.js.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    },
    {
      id: 3,
      title: "Software Engineer",
      company: "Facebook",
      description: "Hiring a Software Engineer with a focus on mobile apps.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
    },
    {
      id: 4,
      title: "Data Scientist",
      company: "Microsoft",
      description: "Looking for a Data Scientist to join our AI research team.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    },
    {
      id: 5,
      title: "Cloud Engineer",
      company: "IBM",
      description: "Seeking a Cloud Engineer to work on cutting-edge cloud platforms.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    },
  ]);

  const handleNewPostClick = () => {
    navigate('/job-posting'); 
  };

  return (
    <Box p={5}>
      <Heading mb={5}>Employer Dashboard</Heading>

      <Heading size="lg" mb={3}>Your Job Postings</Heading>
      <Stack spacing={4}>
        {jobs.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </Stack>

      <Button mt={4} colorScheme="teal" onClick={handleNewPostClick}>
        Add New Post
      </Button>
    </Box>
  );
};

export default EmployerDashboard;
