import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Login from './pages/Login';
import JobSeekerDashboard from './pages/JobSeekerDashboard'; 
import EmployerDashboard from './pages/EmployerDashboard';
import JobPosting from './pages/JobPosting';
import ResumeManagement from './pages/ResumeManagement';
import ApplicationTracking from './pages/ApplicationTracking';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import ResumeUpload from './components/ResumeUpload';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import Chatbot from './components/Chatbot';
function App() {
  const [userRole, setUserRole] = useState(null); 
  return (
    <ErrorBoundary>
      <ChakraProvider theme={theme}>
        <Router>
          <Box minHeight="100vh" display="flex" flexDirection="column">
            <Navbar userRole={userRole} setUserRole={setUserRole} /> 
            <Box flex="1" paddingBottom="70px">
              <Routes>
                <Route path="/" element={<Login setUserRole={setUserRole} />} />
                <Route path="/dashboard" element={<JobSeekerDashboard />} />
                <Route path="/employer-dashboard" element={<EmployerDashboard />} />
                <Route path="/job-posting" element={<JobPosting />} />
                <Route path="/resume-management" element={<ResumeManagement />} />
                <Route path="/application-tracking" element={<ApplicationTracking />} />
                <Route path="/resume-upload" element={<ResumeUpload />} />
              </Routes>
            </Box>
            <Footer />
           <Chatbot/>
          </Box>
        </Router>
      </ChakraProvider>
    </ErrorBoundary>
  );
}

export default App;
