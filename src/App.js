import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignUp from "./components/SignUp/SignUp"
import LoginForm from "./components/LoginForm/LoginForm";
import Home from "./components/Home/Home";
import Account from "./components/Account/Account";
import Update from './components/Account/Update'
import Members from "./components/Members/Members";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/signup"} element={<SignUp />}></Route>
        <Route path={"/login"} element={<LoginForm />}></Route>
        <Route path={"/home/:id"} element={<Home />}></Route>
        <Route path={"/account/:id"} element={<Account />}></Route>
        <Route path={"account/:id/update"} element={<Update />}></Route>
        <Route path={"/members"} element={<Members />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
