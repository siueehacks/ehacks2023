import {Text, Box} from '@chakra-ui/react';

const Faq = () => {
  return (
    <Box
      mb="30vh"
      justifyContent="top"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <Text fontSize="6xl" fontFamily="monospace">
          FAQ
        </Text>
        <Text mt="-5px" mb="3vh" ml="20vh" mr="20vh" fontSize="xl" fontFamily="monospace">
          TBD
        </Text>
      </Box>
    </Box>
  );
};

export default Faq;