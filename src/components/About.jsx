import { Text, Box } from "@chakra-ui/react";

const About = () => {
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
          About
        </Text>
        <Text
          mt="-5px"
          mb="3vh"
          ml="5vmin"
          mr="5vmin"
          fontSize="xl"
          fontFamily="monospace"
        >
          eHacks is Southern Illinois University Edwardsville's annual hackathon,
          making our return from pre-pandemic. It is a 36-hour, weekend long
          event where participants come together to create innovative projects.
          eHacks provides a great opportunity for students to learn new
          skills, network with other students, and have fun! This year, eHacks
          will take place March 3-5. It will be a fully in person event that
          will take place at the T-Rex innovation center in St. Louis, MO.
        </Text>
      </Box>
    </Box>
  );
};

export default About;
