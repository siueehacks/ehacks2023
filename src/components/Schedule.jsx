import {Text, Box} from '@chakra-ui/react';

const Schedule = () => {
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
          Schedule
        </Text>
        <Text mt="-5px" mb="3vh" ml="5vmin" mr="5vmin" fontSize="xl" fontFamily="monospace">
          TBA
        </Text>
      </Box>
    </Box>
  );
};

export default Schedule;