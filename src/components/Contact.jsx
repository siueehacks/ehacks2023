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
      </Box>
    </Box>
  );
};

export default Contact;
