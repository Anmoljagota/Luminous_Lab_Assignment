import React, { useState } from "react";
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
const UserDetailsModal = ({handleClick}) => {
    //All The User Details Managed in This State
  const [details,setDetsails]=useState([])
   //All The User Details Managed in upper State
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  const initialRef = React.useRef(null);
  const Userdetails = [
    { name: "Name", placeholder: "Enter Name" },
    { name: "Image", placeholder: "Enter Image Url" },
    { name: "Phone", placeholder: "Enter Phone Number" },
    { name: "Address", placeholder: "Enter Address" },
    { name: "Label"},
  ];

  //To Add the data to details
  function handleChange(e) {
    const { name, value } = e.target;
    setDetsails({ ...details, [name]: value });
  }
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
            {Userdetails.map((items,i) => (
              <>
             {i<4 && <FormControl key={i}>
                <FormLabel>{items.name}</FormLabel>
                <Input
                  ref={initialRef}
                  placeholder={items.placeholder}
                  name={items.name}
                  onChange={handleChange}
                  />
              </FormControl>
             }
             </>
            ))}
            <br />
            <Select placeholder="Select option" onChange={handleChange} name={Userdetails[Userdetails.length-1].name}>
              <option value="Work">Work</option>
              <option value="Family">Family</option>
              <option value="Friends">Friends</option>
              <option value="School">School</option>
            </Select>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={()=>handleClick(details)}>
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
