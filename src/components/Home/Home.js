import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import api from "../api/api";
import HomeItem from "./HomeItem"

const Home = () => {
  const { id } = useParams(); //URLのidを代入
  const [user, setUser] = useState([]);

  // api/ユーザー取得
  React.useEffect(() => {
    api.get(`/user/${id}`).then((res) => {
      setUser(res.data);
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Navbar />
      <HomeItem 
      user={user}
      />
    </div>
  );
};

export default Home;
