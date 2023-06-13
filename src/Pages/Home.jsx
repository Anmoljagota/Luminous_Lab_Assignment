import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Home = () => {
  return (
    <div className="min-h-[65vh] w-8/12 shadow-2xl m-auto bg-white">
      <Box className="m-auto w-[90%]">
        <Flex>
          <Text>PhoneBook</Text>
        </Flex>
      </Box>
    </div>
  );
};

export default Home;
