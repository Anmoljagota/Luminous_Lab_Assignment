import React, { useState } from "react";
import { MdModeEditOutline } from "react-icons/md";
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

const UpdateDetails = ({ Phone, Name, Image, Address, id, handleUpdate }) => {
  const Userdetails = {
    name: "Name",
    image: "Image",
    phone: "Phone",
    address: "Address",
    namevalue: Name,
    imagevalue: Image,
    phonevalue: Phone,
    addressvalue: Address,
  };

  //All The User Details Managed in This State
  const [details, setDetsails] = useState(Userdetails);
  //All The User Details Managed in upper State

  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  const initialRef = React.useRef(null);

  //To Add the data to details
  function handleChange(e) {
    const { name, value } = e.target;
    setDetsails({ ...details, [name]: value });
  }
  console.log("i am details", details);
  return (
    <div>
      <MdModeEditOutline onClick={onOpen} />

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
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Enter Name"
                name={details.name}
                value={details.namevalue}
                onChange={handleChange}
              />
            </FormControl>
            <br />
            <FormControl>
              <FormLabel>Image</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Avatar Image"
                name={details.image}
                value={details.imagevalue}
                onChange={handleChange}
              />
            </FormControl>
            <br />
            <FormControl>
              <FormLabel>Phone Number</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Name"
                name={details.phone}
                value={details.phonevalue}
                onChange={handleChange}
              />
            </FormControl>
            <br />
            <FormControl>
              <FormLabel>Address</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Name"
                name={details.address}
                value={details.addressvalue}
                onChange={handleChange}
              />
            </FormControl>
            <br />
            <Select
              placeholder="Select option"
              onChange={handleChange}
              name="Label"
            >
              <option value="Work">Work</option>
              <option value="Family">Family</option>
              <option value="Friends">Friends</option>
              <option value="School">School</option>
            </Select>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={() => handleUpdate(id)}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      
    </div>
  );
};

export default UpdateDetails;
