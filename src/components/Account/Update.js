import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import api from "../api/api";

const Update = () => {
  const { id } = useParams(); //URLのidを代入
  const [user, setUser] = useState([]);

  // api/ユーザーを取得
  React.useEffect(() => {
    api.get(`/user/${id}`).then((res) => {
      setUser(res.data);
    });
  }, []);

  // 編集した内容をセット
  const initialValues = { name: "", belongs: "", skills: "" };
  const [updateValues, setUpdateValues] = useState(initialValues);

  const handleUpdateValue = (e) => {
    const { name, value } = e.target;
    setUpdateValues({ ...updateValues, [name]: value });
    // console.log(updateValues);
  };

    // redirect-これでいいのかな
    const navigate = useNavigate();

  const updateUser=(e)=>{
    e.preventDefault();
    api.put(`/user/${id}`,{
      name:updateValues.name,
      belongs:updateValues.belongs,
      skills:updateValues.skills
    }).then(()=>{
      // console.log(res);
      // console.log(res.data);
      navigate(`/members`);
    });
  }

  return (
    <div>
      <Navbar />
      <div className="update">
        <h2>編集画面</h2>
        <form className="m-5">
        <label htmlFor="name" className="text-3xl">名前</label>
        <input className="border border-black mx-3 rounded" type="text" name="name" defaultValue={user.name}onChange={handleUpdateValue}/><br />
        <label htmlFor="belongs" className="text-3xl">所属</label>
        <input className="border border-black mx-3 rounded" type="text" name="belongs" defaultValue={user.belongs} onChange={handleUpdateValue}/><br />
        <label htmlFor="skills" className="text-3xl">技術</label>
        <input className="border border-black mx-3 rounded" type="text" name="skills" defaultValue={user.skills} onChange={handleUpdateValue}/>
        <br/>
        <button className="mt-5 ml-2 bg-sky-600 hover:bg-sky-700 text-white py-2 px-3 rounded-lg transition" onClick={updateUser}>変更</button>
        </form>
      </div>
    </div>
  )
}

export default Update
