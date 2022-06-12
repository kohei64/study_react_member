import React from "react";
import { useState } from "react";
import api from "../api/api";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const initialValues = { name: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [uniqueName,setUniqueName] = useState({});
  const [validateOk,setValidateOk] = useState(false);

  // ユーザー名とパスワードの入力内容
  const handleChange=(e)=>{
    const{name,value}=e.target;
    setFormValues({...formValues,[name]:value})
    if(formValues.name.length<2 || formValues.password.length<4 || formValues.password.length>16){
      setValidateOk(false)
    }else{
      // stateが更新される前に関数が実行されるため、validateがtrueとなるのがワンテンポ遅いのが悩み
      setValidateOk(true)
    }
  };

  // リダイレクト
  const navigate = useNavigate();

  const handleSubmit=(e)=>{
    e.preventDefault();
    setFormErrors(validate(formValues));

    // バックエンドでvalidateをするべきか？
    if (validateOk){
      api.post('/user',{
        name: formValues.name,
        password: formValues.password,
      }).then((res)=>{
        // gorm:uniqueを設定しているため、同じ名前がある場合id=0となるのを利用
        if(res.data.id===0){
          // エラーメッセージを代入
          const signError={};
          signError.unique="この名前は既に使われています。"
          return setUniqueName(signError);
        }else{
          // 問題なければリダイレクト
          navigate('/members')
        }
      });
    }

  };

    // ユーザー名とパスワードの検証
    const validate=(values)=>{
      const errors={};
      if(values.name.length<2){
        errors.name="2文字以上の名前にしてください"
      }
      if(values.password.length<4 || values.password.length>16){
        errors.password="4文字以上15文字以下のパスワードを入力してください"
      }
      return errors;
    }

  return (
    <div>
      <form 
      className="w-1/3 mx-auto mt-64 border border-gray-700 p-7 rounded-lg"
      onSubmit={handleSubmit}
      >
        <h2>アカウント作成</h2>
        <hr />
        {/* エラーメッセージ */}
        <p className="">{uniqueName.unique}</p>
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
            // required
            />
          </div>
          {/* エラー文 */}
          <p className="">{formErrors.name}</p>
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
            // required
            />
          </div>
          {/* エラー文 */}
          <p className="errorMsg">{formErrors.password}</p>
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            作成
          </button>
        <br/>
        <button className="mt-3"><a href="/login">ログイン</a></button>
      </form>
    </div>
  );
};

export default SignUp;
