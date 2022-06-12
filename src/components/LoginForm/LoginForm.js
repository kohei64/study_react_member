import React from "react";
import { useState } from "react";
import api from "../api/api";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const initialValues = { name: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  // ユーザー名とパスワードの入力内容
  const handleChange=(e)=>{
    const{name,value}=e.target;
    setFormValues({...formValues,[name]:value})
  };

  const navigate = useNavigate();

  const handleSubmit=(e)=>{
    e.preventDefault();

    api.post('/login',{
      name: formValues.name,
      password: formValues.password,
    },).then((res)=>{
      // ログイン失敗の時どうしたらいい？
      if(res.data.id){
        navigate(`/home/${res.data.id}`) 
      }else{
        const errors={};
        errors.form="名前またはパスワードが違います。"
        return setFormErrors(errors);
      }
  });
  };

  return (
    <div className="formContainer">
      <form 
      className="w-1/3 mx-auto mt-64 border border-gray-700 p-7 rounded-lg"
      onSubmit={handleSubmit}
      >
        <h2>ログイン</h2>
        <hr />
        {/* エラーメッセージ */}
        <p className="mt-3">{formErrors.form}</p>
        <div className="mb-6">
            <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              名前
            </label>
            <input 
            type="text"
            name="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleChange}
            required
            />
          </div>
          <div className="mb-6">
            <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              パスワード
            </label>
            <input
            type="password"
            name="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleChange}
            required
            />
          </div>
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            ログイン
          </button>
        <br/>
        <button className="mt-3"><a href="/signup">アカウント作成</a></button>
      </form>
    </div>
  );
};

export default LoginForm;
