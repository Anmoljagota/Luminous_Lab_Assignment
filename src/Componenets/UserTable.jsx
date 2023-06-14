import { Flex, Tbody, Td, Text, Tr } from "@chakra-ui/react";
import React, { useState } from "react";
import { BiBookmark } from "react-icons/bi";
import { MdModeEditOutline } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
const UserTable = ({ Phone, Name , id ,handleDelete }) => {
  const [detect, setDetect] = useState(false);

  function handleMouse(e) {
    setDetect(true);
  }
  function handleLeave() {
    setDetect(false);
  }

  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  return (
    <Tbody
      onMouseEnter={handleMouse}
      onMouseLeave={handleLeave}
      className="hover:bg-slate-200 cursor-pointer"
    >
      <Tr className="font-medium text-slate-500 text-sm ">
        <Td className="flex 	items-center gap-x-3">
          <Text
            background={getRandomColor}
            width="30px"
            height="30px"
            borderRadius="50%"
            className="text-center	flex justify-center	items-center text-white"
          >
            {Name[0].toUpperCase()}
          </Text>
          {Name}
        </Td>
        <Td>{Phone}</Td>
        {detect && (
          <Td>
            <BiBookmark />
          </Td>
        )}
        {detect && (
          <Flex gap="10px">
            <MdModeEditOutline />
            <AiFillDelete onClick={()=>handleDelete(id)}/>
          </Flex>
        )}
      </Tr>
    </Tbody>
  );
};

export default UserTable;
