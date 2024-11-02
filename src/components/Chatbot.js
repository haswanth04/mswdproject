import React, { useState } from 'react';
import { Box, Text, Button, Input, VStack, HStack } from '@chakra-ui/react';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const responses = {
    "hello": "Hi there! How can I assist you today?",
    "job": "You can find the latest job postings on the Job Posting page.",
    "apply": "You can apply for jobs in the Application Tracking section.",
    "resume": "You can manage your resumes in the Resume Management section.",
    "recommend": "We recommend checking out jobs that match your skills and experiences!",
    "help": "What do you need help with? You can ask about jobs, applications, or resumes.",
    "bye": "Goodbye! If you have more questions, feel free to ask.",
  };

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, fromUser: true }]);
      const responseText = getResponse(input.toLowerCase());
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: responseText, fromUser: false },
      ]);
      setInput('');
    }
  };

  const getResponse = (userInput) => {
    return responses[userInput] || "I'm sorry, I didn't understand that. Can you please rephrase?";
  };

  return (
    <Box position="fixed" bottom="20px" right="20px" width="300px" padding="10px" borderRadius="md" shadow="md" bg="white">
      <Text fontSize="xl" mb={2}>Chatbot</Text>
      <VStack spacing={2} align="stretch" maxHeight="300px" overflowY="auto">
        {messages.map((msg, index) => (
          <Box
            key={index}
            alignSelf={msg.fromUser ? 'flex-end' : 'flex-start'}
            padding="8px"
            borderRadius="md"
            bg={msg.fromUser ? 'teal.100' : 'gray.100'}
            maxWidth="80%"
          >
            <Text>{msg.text}</Text>
          </Box>
        ))}
      </VStack>
      <HStack mt={2}>
        <Input
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button colorScheme="teal" onClick={handleSend}>Send</Button>
      </HStack>
    </Box>
  );
};

export default Chatbot;
