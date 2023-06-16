import { Tbody } from "@chakra-ui/react";

import UpdateDetails from "./UpdateDetailsModal";
import ShowUserData from "./ShowUserData";
import { useState } from "react";
const UserTable = ({ Phone, Name , Image, Address, id ,handleDelete , handleUpdate , BookMarkUserDetails , Label}) => {
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
      <ShowUserData BookMarkUserDetails={BookMarkUserDetails} Label={Label} getRandomColor={getRandomColor} UserImage={Image} Name={Name} id={id} detect={detect} handleDelete={handleDelete} handleUpdate={handleUpdate} Phone={Phone} Address={Address}/>
    </Tbody>
  );
};

export default UserTable;
