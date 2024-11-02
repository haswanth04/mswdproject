import React from 'react';
import { Box, Button, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Navbar = ({ userRole, setUserRole }) => {
  return (
    <Box bg="teal.500" p={4}>
      <Flex justify="space-between" align="center">
      <Box color="white" fontWeight="bold" fontSize="2xl">
  Job Sync
</Box>
        <Flex>
        {userRole === 'jobSeeker' && (
            <>
              <Link to="/dashboard">
                <Button colorScheme="teal" variant="outline" mr={4}>Dashboard</Button>
              </Link>
              <Link to="/application-tracking">
                <Button colorScheme="teal" variant="outline" mr={4}>Application Tracking</Button>
              </Link>
              <Link to="/resume-upload">
                <Button colorScheme="teal" variant="outline" mr={4}>Resume Upload</Button>
              </Link>
              <Link to="/" onClick={() => { setUserRole(null); }}>
                <Button colorScheme="teal" variant="outline">Logout</Button>
              </Link>
            </>
          )}
          {userRole === 'employer' && (
            <>
              <Link to="/employer-dashboard">
                <Button colorScheme="teal" variant="outline" mr={4}>Employer Dashboard</Button>
              </Link>
              <Link to="/job-posting">
                <Button colorScheme="teal" variant="outline" mr={4}>Job Posting</Button>
              </Link>
              <Link to="/" onClick={() => { setUserRole(null); }}>
                <Button colorScheme="teal" variant="outline">Logout</Button>
              </Link>
            </>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
