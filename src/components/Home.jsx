import { Text, Button, Box } from "@chakra-ui/react";

const Home = () => {
  const handleRegister = () => {
    console.log("Register Button clicked");
    
  };

  return (
    <Box
      height="100vh"
      justifyContent="center"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <Text fontSize="6xl" fontFamily="monospace">
          eHacks
        </Text>
        <Text mt="-22px" mb="3vh" fontSize="xl" fontFamily="monospace">
          March 3-5, 2023
        </Text>
        <Text mt="-22px" mb="3vh" fontSize="xl" fontFamily="monospace">
          T-Rex Innovation Center, St. Louis, MO
        </Text>
      </Box>
      <Button colorScheme="Black" variant="outline" onClick={handleRegister}>
        Register
      </Button>
    </Box>
  );
};

export default Home;
