import React from "react";
import { Link  } from "react-router-dom";

const AccountItem = ({ user }) => {
  return (
    <div>
      <h2>アカウント画面</h2>
      <div className="accountItem">
        <p>名前</p>
        <h3>{user.name}</h3>
        <p>所属</p>
        <h3>{user.belongs}</h3>
        <p>技術</p>
        <h3>{user.skills}</h3>
      </div>
      <Link to={"/user/"+user.id+"/update"}>編集</Link>
      <button>削除</button>
      
      <button>ログアウト</button>
    </div>
  );
};

export default AccountItem;
