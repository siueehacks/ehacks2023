import { Text, Button, ButtonGroup, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Home = () => {
  const handleRegister = () => {
    console.log("Register Button clicked");
    
  };

  const handleSponsor = () => {
    console.log("Sponsor Button clicked");
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
        <Button colorScheme="Black" variant="outline" onClick={handleSponsor}>
          Sponsor
        </Button>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdJ9sqC-8eBCka37qTaIphhABF4cL9wvk7mzyDcXS0coLOpkQ/viewform?usp=sf_link">
        <Button colorScheme="Black" variant="outline" onClick={handleRegister}>
          Register
        </Button>
        </a>
      </ButtonGroup>
    </Box>
  );
};

export default Home;
