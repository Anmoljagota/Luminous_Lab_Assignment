import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
const Home = () => {
  return (
    <div className="min-h-[65vh] w-8/12 shadow-2xl m-auto bg-white">
      <Box className="m-auto w-[90%]">
        <Flex className="border border-black border-solid">
          <Flex className="border border-red-500 border-solid text-base justify-center	items-center" gap="10px">
            <FaUserCircle style={{ color: "#1d4ed8", fontSize: "30px" }} />
            <Text className="text-lg text-slate-600	">PhoneBook</Text>
          </Flex>
        </Flex>
      </Box>
    </div>
  );
};

export default Home;
