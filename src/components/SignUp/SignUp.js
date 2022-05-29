import React from "react";
import { useState } from "react";
import api from "../api/api";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const initialValues = { name: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit,setIsSubmit]=useState(false);

  // ユーザー名とパスワードの入力内容
  const handleChange=(e)=>{
    const{name,value}=e.target;
    setFormValues({...formValues,[name]:value})
    console.log(formValues)
  };

  const navigate = useNavigate();

  const handleSubmit=(e)=>{
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    api.post('/user',{
      name: formValues.name,
      password: formValues.password,
    }).then((res)=>{
      console.log(res.data)
      navigate('/members')
    });
  };

  // ユーザー名とパスワードの検証
  // todo:エラー文は表示されるけど、そのまま実行してしまうのを修正する
  const validate=(values)=>{
    const errors={};
    if(!values.name){
      errors.name="名前を入力してください"
    }else if(values.name.length<2){
      errors.name="2文字以上の名前にしてください"
    }
    if(!values.password){
      errors.password="パスワードを入力してください"
    }else if (values.password.length<4){
      errors.password="4文字以上15文字以下のパスワードを入力してください"
    }else if(values.password.length>15){
      errors.password="4文字以上16文字以下のパスワードを入力してください"
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
          {/* successメッセージ */}
          {Object.keys(formErrors).length===0 && isSubmit && (
            <div className="successMsg">アカウント作成に成功しました</div>
          )}

        <br/>
        <button><a href="/">ホーム画面へ(仮)</a></button>   {/* todo:jwt実装 */}
      </form>
    </div>
  );
};

export default SignUp;
