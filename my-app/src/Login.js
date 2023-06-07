import React, { useState } from "react";

function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [userErr, setUserErr] = useState(false);
  const [passErr, setPassErr] = useState(false);
  
  useState();
  function loginHandle(e) {
    if (user.length < 3 || password.length < 3) {
      alert("type correct values");
    } else {
      alert("all good :)");
    }
    e.preventDefault();
  }

  function userHandler(e) {
    let item = e.target.value;
    if (item.length < 3) {
      //   console.warn("invalid");
      setUserErr(true);
    } else {
      setUserErr(false);
    }
    setUser(item);
  }
  function passwordHandler(e) {
    let item = e.target.value;
    if (item.length < 3) {
      setPassErr(true);
    } else {
      setPassErr(false);
    }
    setPassword(item);
  }
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={loginHandle}>
        <input type="text" placeholder="Enter userId" onChange={userHandler} />
        {userErr ? <span>Id invalid</span> : null}
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter user password"
          onChange={passwordHandler}
        />
        {userErr ? <span>Password invalid</span> : null}
        <br /> <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
