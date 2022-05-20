import React from "react";

const MemberItems = ({ users }) => {
  return (
    <div>
      <h2 className="">メンバー一覧</h2>
      <div className="flex flex-row flex-wrap ">
        {users.map((user) => (
          <div key={user.id} className="member-item basis-1/2 border text-center p-3">
            <a href={"account/" + user.id}>
              <p className="p-2">名前</p>
              <h3 className="p-2">{user.name}</h3>
              <p className="p-2">所属</p>
              <h4 className="p-2">{user.belongs}</h4>
              <p className="p-2">技術</p>
              <h4 className="p-2">{user.skills}</h4>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemberItems;
