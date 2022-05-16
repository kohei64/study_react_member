import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import api from "../api/api";
import AccountItem from "./AccountItem";

const Account = () => {
  const { id } = useParams(); //URLのidを代入
  const [user, setUser] = useState([]);

  // api/ユーザー取得
  React.useEffect(() => {
    api.get(`/user/${id}`).then((res) => {
      setUser(res.data);
    });
  }, []);

  //api/ユーザー削除
  const deleteUser = () => {
    React.useEffect(() => {
      api.delete(`/user/${id}`).then(() => {
        window.confirm("ユーザーを削除しますか？");
        setUser(null);
      });
    });
  };

  return (
    <div>
      <Navbar />
      <AccountItem 
      user={user}
      deleteUser={deleteUser}
    />
    </div>
  );
};

export default Account;
