import React from 'react'
import { useState } from "react";
import axios from "axios";


const Create = () => {
  // 初期値
  const initialValues={username:"",password:"",belongs:"",skills:""};
  const [formValues,setFormValues]=useState(initialValues);

  const handleFormValue=(e)=>{
    const {name,value}=e.target;
    setFormValues({...formValues,[name]:value})
    console.log(formValues)
  };

  const createUser=(e)=>{
    e.preventDefault();
    const user={
      name:formValues.name,
      password:formValues.password,
      belongs:formValues.belongs,
      skills:formValues.skills
    }
    // dataが代入されない goが違うかも
    axios.post(`http://localhost:8080/user`,{user})
        .then(res=>{
          console.log(res);
          console.log(res.data);
        })
  }

  return (
    <div>
      <label htmlFor="username">名前</label>
      <input type="text"  name="username" onChange={handleFormValue}/><br />
      <label htmlFor="password">パスワード</label>
      <input type="text"  name="password" onChange={handleFormValue}/><br />
      <label htmlFor="belongs">所属</label>
      <input type="text"  name="belongs" onChange={handleFormValue}/><br />
      <label htmlFor="skills">技術</label>
      <input type="text"  name="skills" onChange={handleFormValue}/><br />
      <button onClick={createUser}>作成</button>
    </div>
  )
}

export default Create
