import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import api from "../api/api";
import MemberItems from "./MemberItems";

const Members = () => {
  const [users, setUsers] = useState([]);

  // api
  React.useEffect(() => {
    api.get("/users").then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <div>
      <Navbar />
      <MemberItems users={users} />
    </div>
  );
};

export default Members;
