import React from "react";
import "./styles/Members.css";

const MemberItems = ({ users }) => {
  return (
    <div>
      <h2>メンバー一覧</h2>
      <div className="memberItems">
        {users.map((user) => (
          <div key={user.id} className="memberItem">
            <a href={"account/" + user.id}>
              <p>名前</p>
              <h3>{user.name}</h3>
              <p>所属</p>
              <h4>{user.belongs}</h4>
              <p>技術</p>
              <h4>{user.skills}</h4>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemberItems;
