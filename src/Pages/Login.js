import React from "react";
import { Link } from "react-router-dom";
import "../css/Login.css";

const Login = () => {
    return(
      <div className="login">
        <h1>Login</h1>
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button>Login</button>
          <p>This is an error massage</p>
          <span>Don't you have an account? <Link to='/register'>Register</Link></span>
        </form>
      </div>
    )
  }
export default Login;