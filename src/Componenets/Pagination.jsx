import React, { useState } from "react";
import UserTable from "./UserTable";
import {
  Flex,
  Table,
  TableContainer,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
const Pagination = ({
  details,
  handleDelete,
  filterdata,
  handleUpdate,
  search,
  BookMarkUserDetails
}) => {
  console.log("i am details", details);
  const [currentPage, setCurrentPage] = useState(1);
  let ItemsPerPage = 8;
  let TotalPages = Math.ceil(details.length / ItemsPerPage);
  let FirstIndex = (currentPage - 1) * ItemsPerPage;
  let LastIndex = currentPage * ItemsPerPage - 1;
  const CurrentItems = details.slice(FirstIndex, LastIndex + 1);
  function INCREAMENT() {
    setCurrentPage(currentPage + 1);
  }
  function DECREAMENT() {
    setCurrentPage(currentPage - 1);
  }
  function demo(){

  }
  return (
    <div>
      <TableContainer className="mt-5">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Phone Number</Th>
            </Tr>
          </Thead>
          {search === ""
            ? CurrentItems.map((ele) => (
                <UserTable
                  key={ele.id}
                  {...ele}
                  handleDelete={handleDelete}
                  handleUpdate={handleUpdate}
                  BookMarkUserDetails={BookMarkUserDetails}
                />
              ))
            : filterdata.map((ele) => (
                <UserTable
                  key={ele.id}
                  {...ele}
                  handleDelete={handleDelete}
                  handleUpdate={handleUpdate}
                  BookMarkUserDetails={BookMarkUserDetails}
                />
              ))}
        </Table>
      </TableContainer>
      <Flex justifyContent="flex-end" alignItems="center" gap="70px" p="10px">
        <Text>
          {FirstIndex +
            "-" +
            " " +
            LastIndex +
            "  " +
            "of" +
            " " +
            details.length}
        </Text>
        <Flex gap="30px" fontSize="30px" className="cursor-pointer">
          <ChevronLeftIcon
            className="hover:bg-slate-200"
            onClick={currentPage === 1 ? demo : DECREAMENT}
          
            disabled={true}
          />
          <ChevronRightIcon
            className="hover:bg-slate-200"
            onClick={INCREAMENT}
          />
        </Flex>
      </Flex>
    </div>
  );
};

export default Pagination;
