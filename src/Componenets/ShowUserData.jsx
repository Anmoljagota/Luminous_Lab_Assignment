import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Td,
  Text,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Styles from "../CSS/CSS.module.css";
import { BiBookmark } from "react-icons/bi";
import { MdOutlineBookmark } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import UpdateDetails from "./UpdateDetailsModal";
const ShowUserData = ({
  getRandomColor,
  Name,
  id,
  detect,
  handleDelete,
  handleUpdate,
  Phone,
  Address,
  BookMarkUserDetails,
  UserImage,
  Label,
}) => {
  const [check, setCheck] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Tr className="font-medium text-slate-500 text-sm">
        <Td className="flex 	items-center gap-x-3" onClick={onOpen}>
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
        <Td onClick={onOpen}>{Phone}</Td>
        {detect && !check && (
          <Td>
            <BiBookmark
              onClick={() => BookMarkUserDetails(id, setCheck, check)}
              style={{ zIndex: "20px" }}
            />
          </Td>
        )}
        {/* hlo */}
        {detect && check && (
          <Td>
            <MdOutlineBookmark
              onClick={() => BookMarkUserDetails(id, setCheck, check)}
              style={{ zIndex: "20px", color: "blue" }}
            />
          </Td>
        )}

        {detect && (
          <Flex gap="10px">
            <UpdateDetails
              Phone={Phone}
              Name={Name}
              id={id}
              Image={Image}
              Address={Address}
              handleUpdate={handleUpdate}
            />
            <AiFillDelete onClick={() => handleDelete(id)} />
          </Flex>
        )}
      </Tr>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent className={Styles.Userdetails}>
          <ModalHeader className={Styles.Userdetails} color="white">
            Modal Title
          </ModalHeader>
          <ModalCloseButton color="white" />
          <ModalBody className={Styles.Userdetails}>
            <Box className={Styles.body}p="10px" margin="auto">
              <Center>
                <Image
                  borderRadius="full"
                  boxSize="150px"
                  src={UserImage}
                  alt="Dan Abramov"
                  height="100px"
                  width="100px"
                  className={Styles.Images}
                  border="6px solid #CD2D60"
                />
</Center>
<Text className="text-white">{Name}</Text>
                <Text className="text-slate-400">{Label}</Text>
                <Text className="text-white">{Address}</Text>
            </Box>
          </ModalBody>

          <ModalFooter className={Styles.Userdetails}>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ShowUserData;
