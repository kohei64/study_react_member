import React from "react";
import { useState } from "react";
import api from "../api/api";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Create = () => {
  const initialValues = { username: "", password: "", belongs: "", skills: "" };
  const [formValues, setFormValues] = useState(initialValues);

  const handleFormValue = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const navigate = useNavigate();

  const createUser = (e) => {
    e.preventDefault();
    api.post(`/user`, { 
      name: formValues.username,
      password: formValues.password,
      belongs: formValues.belongs,
      skills: formValues.skills,
    }).then(() => {
      navigate('/members');
    });
  };

  return (
    <div>
      <div className="">
        <Navbar />
        <h2>アカウント作成画面</h2>
        <div className="">
          <form method="post">
            <label className="text-3xl" htmlFor="username">名前　　</label>
            <input className="border border-black mx-3 rounded" type="text" name="username" onChange={handleFormValue} />
            <br />
            {/* <label className="text-3xl" htmlFor="password">パスワード </label>
            <input className="border border-black mx-3 rounded" type="text" name="password" onChange={handleFormValue} />
            <br /> */}
            <label className="text-3xl" htmlFor="belongs">所属　　</label>
            <input className="border border-black mx-3 rounded" type="text" name="belongs" onChange={handleFormValue} />
            <br />
            <label className="text-3xl" htmlFor="skills">技術　　</label>
            <input className="border border-black mx-3 rounded" type="text" name="skills" onChange={handleFormValue} />
            <br />
            <button className="mt-5 ml-2 bg-sky-600 hover:bg-sky-700 text-white py-2 px-3 rounded-lg transition" onClick={createUser}>作成</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
