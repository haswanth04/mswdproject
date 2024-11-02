import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Heading, VStack, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUserRole }) => {
  const [role, setRole] = useState("jobSeeker");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    
    
    const isAuthenticated = true; 
    if (isAuthenticated) {
      setUserRole(role);
      if (role === "jobSeeker") {
        navigate('/dashboard'); 
      } else {
        navigate('/employer-dashboard'); 
      }
    } else {
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <Box p={8} maxWidth="400px" mx="auto" borderWidth={1} borderRadius="lg" boxShadow="lg">
      <VStack spacing={6} align="stretch">
        <Heading size="lg" textAlign="center">Welcome to JobSync!</Heading>
        <Text textAlign="center" color="gray.600" fontStyle="italic">Your career, perfectly aligned.</Text>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input 
            type="email" 
            placeholder="Enter your email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>

        <FormControl id="password" isRequired mt={4}>
          <FormLabel>Password</FormLabel>
          <Input 
            type="password" 
            placeholder="Enter your password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>

        <Button colorScheme="teal" type="submit" width="full" mt={6} onClick={handleLogin}>
          Login as {role === "jobSeeker" ? "Job Seeker" : "Employer"}
        </Button>
        <Button colorScheme="teal" variant="outline" onClick={() => setRole(role === "jobSeeker" ? "employer" : "jobSeeker")}>
          Switch to {role === "jobSeeker" ? "Employer" : "Job Seeker"}
        </Button>
      </VStack>
    </Box>
  );
};

export default Login;
