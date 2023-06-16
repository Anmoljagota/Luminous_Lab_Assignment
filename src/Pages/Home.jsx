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
import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import UserDetailsModal from "../Componenets/UserDetailsModal";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { Deleteuser, MainUserDetailsFunction } from "../Redux/action";
import UserTable from "../Componenets/UserTable";
import nextId from "react-id-generator";
import Pagination from "../Componenets/Pagination";

const Home = () => {
  const [details, setDetsails] = useState([]);
  const [search, setSearch] = useState("");
  const [filterdata, setFilterdata] = useState([]);
  const uniqueid = nextId();
  const { userdata } = useSelector(
    (details) => ({
      userdata: details.userdata,
    }),
    shallowEqual
  );
  useEffect(() => {
    setDetsails(userdata);
  }, [userdata]);
  const dispatch = useDispatch();

  const handleClick = (details) => {
    const alluserDetails = { ...details, id: uniqueid };
    dispatch(MainUserDetailsFunction(alluserDetails));
  };
  const handleDelete = (id) => {
    const newUserDetails = userdata.filter((ele) => {
      return ele.id !== id;
    });
    dispatch(Deleteuser(newUserDetails));
  };
  const handleUpdate = (id, newdata) => {
    const updatedata = userdata.map((ele) => {
      return ele.id === id ? newdata : ele;
    });
    console.log("updated data", updatedata);
  };
  const handleFilter = (e) => {
    const filterdata = userdata.filter((ele) => {
      return ele.Label === e.target.value;
    });
    setFilterdata(filterdata);
  };
  function handleSearch(e) {
    setSearch(e.target.value);
    const searchdata = details.filter((ele) => {
      console.log("hlo", ele.Name);
      if (ele.Name.toLowerCase().includes(e.target.value.toLowerCase())) {
        return ele;
      }
    });
    // console.log("search",searchdata)
    setFilterdata(searchdata);
  }
  const BookMarkUserDetails=(id,setCheck,check)=>{
    console.log("i ma detilssssssssssssssssssss",details)
    setCheck(!check)
    let bookmarkedarr=[]
console.log("i am id",id)
details.forEach((item)=>{
  if(item.id===id ){
     bookmarkedarr.unshift(item)
  }

else{
  bookmarkedarr.push(item)
}
})
console.log("bookmarked",bookmarkedarr)
setDetsails(bookmarkedarr)


  }
  return (
    <>
    <div className="min-h-[80vh] w-8/12 shadow-2xl m-auto bg-white">
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
            onChange={handleSearch}
          />
          <Flex gap="40px">
            <select name="" id="" onChange={handleFilter}>
              <option value="all">Label</option>
              <option value="Family">Family</option>
              <option value="Friends">Friends</option>
              <option value="Work">Work</option>
              <option value="School">School</option>
            </select>
            <UserDetailsModal handleClick={handleClick} />
          </Flex>
        </Flex>

      </Box>
        <Pagination details={details} BookMarkUserDetails={BookMarkUserDetails} handleDelete={handleDelete} handleUpdate={handleUpdate} filterdata={filterdata} search={search}/>
    </div>
        </>
  );
};

export default Home;
