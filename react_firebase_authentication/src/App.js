import React from "react";
import {Route, Routes} from "react-router-dom";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Account from "./Components/Account";

function App() {
  return (
    <div>
        <h1 className="text-center text-3xl font-bold underline">
            Hello world!
        </h1>
        <Routes>
            <Route path={"/"} element={<SignIn/>}/>
            <Route path={"/signup"} element={<SignUp/>}/>
            <Route path={"/account"} element={<Account/>}/>
        </Routes>
    </div>
  );
}

export default App;

// https://www.youtube.com/watch?v=x62aBvnRCKw
