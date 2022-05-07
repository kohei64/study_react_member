import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import api from "../api/api";
import AccountItem from "./AccountItem";

const Account = () => {
  const { id } = useParams(); //URLのidを代入
  const [user, setUser] = useState([]);

  React.useEffect(() => {
    api.get(`/user/${id}`).then((res) => {
      setUser(res.data);
    });
  }, []);

  return (
    <div>
      <Navbar />
      <AccountItem user={user}/>
    </div>
  );
};

export default Account;
