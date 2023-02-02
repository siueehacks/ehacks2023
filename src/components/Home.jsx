import { Text, Button, Box, ButtonGroup } from "@chakra-ui/react";

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
        <Text mt="0px" mb="3vh" fontSize="xl" fontFamily="monospace">
          March 3-5, 2023
        </Text>
        <Text mt="-22px" mb="3vh" fontSize="xl" fontFamily="monospace">
          T-Rex Innovation Center
          <br />
          St. Louis, MO
        </Text>
      </Box>

      <a href="https://formfacade.com/public/110443485080613872121/all/form/1FAIpQLSdJ9sqC-8eBCka37qTaIphhABF4cL9wvk7mzyDcXS0coLOpkQ">
        <Button colorScheme="Black" variant="outline" onClick={handleRegister}>
          Register
        </Button>
      </a>
    </Box>
  );
};

export default Home;
