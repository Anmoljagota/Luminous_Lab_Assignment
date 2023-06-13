import React from "react";
import { BsPlusLg } from "react-icons/bs";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
const UserDetailsModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  const initialRef = React.useRef(null);
  const details = [
    { name: "Name", placeholder: "Enter Name" },
    { name: "Avatar Image", placeholder: "Enter Image Url" },
    { name: "Phone Number", placeholder: "Enter Phone Number" },
    { name: "Address", placeholder: "Enter Address" },
  ];
  return (
    <div>
      <button
        onClick={onOpen}
        className="bg-white py-3 px-5 gap-3	 rounded-lg flex justify-center	items-center font-semibold	"
        style={{
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
        }}
      >
        <BsPlusLg /> Create contant
      </button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {details.map((items) => (
              <FormControl>
                <FormLabel>{items.name}</FormLabel>
                <Input ref={initialRef} placeholder={items.placeholder} />
              </FormControl>
            ))}
            <br />
            <Select placeholder="Select option">
              <option value="Work">Work</option>
              <option value="Family">Family</option>
              <option value="Friends">Friends</option>
              <option value="School">School</option>
            </Select>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default UserDetailsModal;
