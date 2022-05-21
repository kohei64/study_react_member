import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from "../api/api";


const AccountItem = ({ user }) => {
  const { id } = useParams(); //URLのidを代入

  // redirect これでいいのか 
  const navigate = useNavigate();

  const deleteUser = (e) => {
    api.delete(`/user/${id}`).then(()=>{
      navigate(`/members`);
    })
  };

  return (
    <div>
      <h2>アカウント画面</h2>
      <div className="m-5">
        <p>名前</p>
        <h3>{user.name}</h3>
        <p>所属</p>
        <h3>{user.belongs}</h3>
        <p>技術</p>
        <h3>{user.skills}</h3>
      </div>
      <button className="m-3 bg-sky-600 hover:bg-sky-700 text-white py-2 px-3 rounded-lg transition"><Link to={"/account/"+user.id+"/update"}>編集</Link></button>
      <button className="m-3 bg-sky-600 hover:bg-sky-700 text-white py-2 px-3 rounded-lg transition" onClick={deleteUser}>削除</button>
      {/* <button className="m-3 bg-sky-600 hover:bg-sky-700 text-white py-2 px-3 rounded-lg transition">ログアウト(未)</button> */}
    </div>
  );
};

export default AccountItem;
