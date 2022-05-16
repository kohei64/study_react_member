import React from "react";
import { useState } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";

const Create = () => {
  const initialValues = { username: "", password: "", belongs: "", skills: "" };
  const [formValues, setFormValues] = useState(initialValues);

  const handleFormValue = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const createUser = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:8080/user`, { 
      name: formValues.username,
      password: formValues.password,
      belongs: formValues.belongs,
      skills: formValues.skills,
    }).then((res) => {
      // todo:リダイレクトにしたい
      console.log(res);
      console.log(res.data);
    });
  };

  return (
    <div>
      <div className="create">
        <Navbar />
        <h2>アカウント作成画面</h2>
        <div className="create-form">
          <form method="post">
            <label htmlFor="username">名前</label>
            <input type="text" name="username" onChange={handleFormValue} />
            <br />
            <label htmlFor="password">パスワード</label>
            <input type="text" name="password" onChange={handleFormValue} />
            <br />
            <label htmlFor="belongs">所属</label>
            <input type="text" name="belongs" onChange={handleFormValue} />
            <br />
            <label htmlFor="skills">技術</label>
            <input type="text" name="skills" onChange={handleFormValue} />
            <br />
            <button onClick={createUser}>作成</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
