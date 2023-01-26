import { Text, Button, ButtonGroup, Box } from "@chakra-ui/react";

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
          create awesome
        </Text>
      </Box>
      <ButtonGroup spacing="6">
        <Button colorScheme="Black" variant="outline">
          Sponsor
        </Button>
        <Button colorScheme="Black" variant="outline" onClick={handleRegister}>
          Register
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default Home;
