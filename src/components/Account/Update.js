import React, { useState } from "react";
import { useParams } from "react-router-dom";
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
  // todo:まとめて書く
  const [name,setName]=useState('');
  const [belongs,setBelongs]=useState('');
  const [skills,setSkills]=useState('');

  const handleName=(e)=>{
    setName(e.target.value)
  }

  const handleBelongs=(e)=>{
    setBelongs(e.target.value)
  }

  const handleSkills=(e)=>{
    setSkills(e.target.value)
  }

  // updateできない goが間違っているかも
  const updateUser=()=>{
    api.put(`/user/${id}`,{
      name:name,
      belongs:belongs,
      skills:skills
    }).then((res)=>{
      setUser(res.data)
    });
  }



  return (
    <div>
      <Navbar />
      <div className="update">
        <h3>編集画面</h3>
        <form onSubmit={updateUser}>
        <label htmlFor="username">名前</label>
        <input type="text" name="username" defaultValue={user.name}onChange={handleName}/><br />
        <label htmlFor="belongs">所属</label>
        <input type="text" name="belongs" defaultValue={user.belongs} onChange={handleBelongs}/><br />
        <label htmlFor="skills">技術</label>
        <input type="text" name="skills" defaultValue={user.skills} onChange={handleSkills}/>
        <button>変更</button>
        </form>
      </div>
    </div>
  )
}

export default Update