import React from "react";
import "../css/Login.css";

const Login = () => {
    return(
      <div className="login">
        <h1>Login</h1>
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button>Login</button>
        </form>
      </div>
    )
  }
export default Login;