import { Text, Box } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Box
      mb="80vh"
      justifyContent="top"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <Text fontSize="6xl" fontFamily="monospace">
          Contact
        </Text>
        <Text
          mt="-5px"
          mb="3vh"
          ml="5vmin"
          mr="5vmin"
          fontSize="xl"
          fontFamily="monospace"
        >
          <a href="mailto:siuehacks@gmail.com">
            siuehacks@gmail.com
          </a>
        </Text>
      </Box>
    </Box>
  );
};

export default Contact;
