import React from "react";
import { Link } from "react-router-dom";
import "../css/Register.css";

const Register = () => {
    return(
      <div className="register">
        <h1>Register</h1>
        <form>
          <input required type="text" placeholder="Username" />
          <input required type="password" placeholder="Password" />
          <input required type="email" placeholder="email" />
          <button>Register</button>
          <p>This is an error massage</p>
          <span>Already have an account? <Link to='/login'>Login</Link></span>
        </form>
      </div>
    )
  }
export default Register;