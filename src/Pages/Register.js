import React from "react";
import "../css/Register.css";

const Register = () => {
    return(
      <div className="register">
        <h1>Register</h1>
        <form>
          <input type="text" placeholder="Enter Username" />
          <input type="password" placeholder="Enter Password" />
          <button type="submit">Register</button>
        </form>
      </div>
    )
  }
export default Register;