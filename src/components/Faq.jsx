import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  Box,
} from "@chakra-ui/react";

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
        <Accordion
          allowToggle
          allowMultiple
          width="70vw"
          fontFamily="monospace"
        >
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontSize="xl">
                  How much coding experience do I need to participate?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize="lg">
              Absolutely none! eHacks is open to participants of all skill
              levels. We will have mentors available to help you with any
              questions you may have.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontSize="xl">
                  Will there be food?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize="lg">
              Yes! All of the meals will be provided at no charge to the
              participants over the course of the weekend. There will also be
              plenty of snacks and drinks available throughout as well.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontSize="xl">
                  Will sleeping accommodations be provided?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize="lg">
              Unfortunately, we will not be able to provide any sleeping
              accommodations. We recommend that if you plan on spending the
              night at the venue, that you bring sleeping bags and pillows.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontSize="xl">
                  Will there be showers/hygiene options?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize="lg">
              There are no showers available at the venue. However, there will
              be a few bathrooms available for use. We recommend that you bring
              a change of clothes or two and any other hygiene products you need
              to freshen up through the weekend.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Box>
  );
};

export default Faq;
