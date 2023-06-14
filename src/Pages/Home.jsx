import {
  Box,
  Flex,
  Table,
  TableContainer,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import UserDetailsModal from "../Componenets/UserDetailsModal";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { Deleteuser, MainUserDetailsFunction } from "../Redux/action";
import UserTable from "../Componenets/UserTable";
import nextId from "react-id-generator";
const Home = () => {
  const uniqueid = nextId();
  const { userdata } = useSelector(
    (details) => ({
      userdata: details.userdata,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  const handleClick = (details) => {
    const alluserDetails = { ...details, id: uniqueid };
    dispatch(MainUserDetailsFunction(alluserDetails));
  };
  const handleDelete = (id) => {
    console.log("deleted id", id);
    const newUserDetails = userdata.filter((ele) => {
      return ele.id !== id;
    });
dispatch(Deleteuser(newUserDetails));

  };
  return (
    <div className="min-h-[75vh] w-8/12 shadow-2xl m-auto bg-white">
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

        <TableContainer className="mt-5">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Phone Number</Th>
              </Tr>
            </Thead>
            {userdata.map((ele) => (
              <UserTable key={ele.id} {...ele} handleDelete={handleDelete} />
            ))}
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

export default Home;
