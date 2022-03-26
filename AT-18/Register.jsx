import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Helmet } from "./Common";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
  };
  return (
    <Helmet title="Đăng ký">
      <div className="register">
        <div className="register__name">Register</div>
        <form onSubmit={handleSubmit} className="form">
          <div className="form__group">
            <input
              type="text"
              placeholder="Enter your name..."
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form__group">
            <input
              type="text"
              placeholder="Enter your password..."
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              style={{ marginTop: 10 }}
              type="text"
              id="confirmpassword"
              name="confirmpassword"
              placeholder="ConfirmPassword..."
              value={confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <Button size="sm">Register</Button>
        </form>
        <div className="login__regis">
          <Link to="/login">Back to login page?</Link>
        </div>
      </div>
    </Helmet>
  );
};

export default Register;
