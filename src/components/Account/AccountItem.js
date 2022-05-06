import React from "react";

const AccountItem = ({ account }) => {
  return (
    <div>
      <h2>アカウント画面</h2>
      <div className="accountItem">
        <p>名前</p>
        <h3>{account.name}</h3>
        <p>所属</p>
        <h3>{account.belongs}</h3>
        <p>技術</p>
        <h3>{account.skills}</h3>
      </div>
      <button>編集</button>
      <button>ログアウト</button>
      <button>アカウント削除</button>
    </div>
  );
};

export default AccountItem;
