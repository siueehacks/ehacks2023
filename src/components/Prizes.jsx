import {Text, Box} from '@chakra-ui/react';

const Prizes = () => {
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
          Prizes
        </Text>
        <Text mt="-5px" mb="3vh" ml="20vh" mr="20vh" fontSize="xl" fontFamily="monospace">
          TBA
        </Text>
      </Box>
    </Box>
  );
};

export default Prizes;