import React from "react";
import { useState } from "react";
import "./styles/LoginForm.css";

const LoginForm = () => {
  const initialValues = { username: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit,setIsSubmit]=useState(false);

  // ユーザー名とパスワードの入力内容
  const handleChange=(e)=>{
    const{name,value}=e.target;
    setFormValues({...formValues,[name]:value})
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  // ユーザー名とパスワードの検証
  const validate=(values)=>{
    const errors={};
    if(!values.username){
      errors.username="ユーザー名を入力してください"
    }else if(values.username.length<2){
      errors.username="2文字以上の名前にしてください"
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
    <div className="formContainer">
      <form onSubmit={(e)=>handleSubmit(e)}>
        <h1>ログイン</h1>
        <hr />
        <div className="uiForm">
          <div className="formField">
            <label htmlFor="username">ユーザー名</label>
            <input type="text" name="username" onChange={(e)=>{handleChange(e)}}/>
          </div>
          <p className="errorMsg">{formErrors.username}</p>
          <div className="formField">
            <label htmlFor="password">パスワード</label>
            <input type="text" name="password" onChange={(e)=>{handleChange(e)}}/>
          </div>
          <p className="errorMsg">{formErrors.password}</p>
          <button className="submitButton">ログイン</button>
          {/* successメッセージ */}
          {Object.keys(formErrors).length===0 && isSubmit && (
            <div className="successMsg">ログインに成功しました</div>
          )}
        </div>
        {/* todo:jwt実装 */}
      <a href="/home">ホーム画面へ(仮)</a>
      </form>
    </div>
  );
};

export default LoginForm;
