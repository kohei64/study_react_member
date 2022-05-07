import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginForm from "./components/LoginForm/LoginForm";
import Home from "./components/Home/Home";
import Create from './components/Create/Create'
import Account from "./components/Account/Account";
import Update from './components/Account/Update'
import Members from "./components/Members/Members";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/login"} element={<LoginForm />}></Route>
        <Route path={"/home"} element={<Home />}></Route>
        <Route path={"/create"} element={<Create />}></Route>
        <Route path={"/account/:id"} element={<Account />}></Route>
        <Route path={"user/:id/update"} element={<Update />}></Route>
        <Route path={"/members"} element={<Members />}></Route>
        <Route path={"/contact"} element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
