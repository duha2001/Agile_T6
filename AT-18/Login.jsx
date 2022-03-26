import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet, Button } from "./Common";
import GoogleButton from "react-google-button";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const refInputEmail = useRef(null);
  const refInputPassword = useRef(null);
  const handleSubmit = async (e) => {
    setError("");
    e.preventDefault();
    if (email === "" || password === "") {
      email === ""
        ? refInputEmail.current.focus()
        : refInputPassword.current.focus();
    } else {
      setError("");
    }
  };
  const handleGoogleSignIn = () => {};
  return (
    <Helmet title="Đăng nhập">
      <div className="login">
        <div className="login__name">Login</div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form__group">
            <input
              id="emailInput"
              type="email"
              aria-required="true"
              aria-label="email"
              placeholder="Enter your email..."
              onChange={(e) => setEmail(e.target.value)}
              ref={refInputEmail}
              required
            />
          </div>
          <div className="form__group">
            <input
              id="passwordInput"
              aria-required="true"
              aria-label="password"
              type="password"
              placeholder="Enter your password..."
              onChange={(e) => setPassword(e.target.value)}
              ref={refInputPassword}
              required
            />
          </div>
          <Button size="sm">Đăng nhập</Button>
          <div className="google__btn" onClick={handleGoogleSignIn}>
            <GoogleButton type="dark" />
          </div>
        </form>
        {error && <span className="error">{error}</span>}
        <div className="login__regis">
          Do not have an account? <Link to="/register">Create account</Link>
        </div>
      </div>
    </Helmet>
  );
};
export default React.memo(Login);
