import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import UserDetailsModal from "../Componenets/UserDetailsModal";
import { useSelector, useDispatch } from "react-redux";
import { MainUserDetailsFunction } from "../Redux/action";
import UserTable from "../Componenets/UserTable";
const Home = () => {
  const data = useSelector((userdata) => console.log(userdata));
  const dispatch = useDispatch();
  const handleClick = (details) => {
    dispatch(MainUserDetailsFunction(details));
  };

  return (
    <div className="min-h-[65vh] w-8/12 shadow-2xl m-auto bg-white">
      <Box className="m-auto w-[90%]">
        <Flex className="justify-between items-center">
          <Flex className="justify-center	items-center" gap="10px">
            <FaUserCircle style={{ color: "#1d4ed8", fontSize: "30px" }} />
            <Text className="text-lg text-slate-600">PhoneBook</Text>
          </Flex>
          <input
            type="text"
            className="rounded-md py-2 px-6"
            placeholder="Search..."
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          />
          <Flex>
            <UserDetailsModal handleClick={handleClick} />
          </Flex>
        </Flex>
        <Box border="1px solid red" className="mt-10">
          <UserTable/>
        </Box>
      </Box>
    </div>
  );
};

export default Home;
