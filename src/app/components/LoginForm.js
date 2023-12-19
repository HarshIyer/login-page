import React from "react";
const LoginForm = () => {
  const sumbitHandler = () => {
    return;//Backend goes here
  };

  return (
    <div>
      <form onSubmit={sumbitHandler()}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "30px",
          }}
        >
          <label
            for="email"
            style={{
              fontWeight: "600px",
              fontSize: "14px",
              color: "#828282",
              marginBottom: "8px",
            }}
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            className="text-box"
            placeholder="mail@abc.com"
          ></input>
          <label
            for="password"
            style={{
              fontWeight: "600px",
              fontSize: "14px",
              color: "#828282",
              marginBottom: "8px",
            }}
          >
            Password
          </label>
          <input type="password" id="password" className="text-box"></input>
        </div>
        <span
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type="checkbox"
              id="remember-me"
              
              style={{ height: "12px;" }}
            ></input>
            <label
              for="remember-me"
              style={{ marginLeft: "2px", color: "#A1A1A1", fontSize: "12px" }}
            >
              Remember Me
            </label>
          </div>
          <a href="#" className="forgot-password">Forgot Password?</a>
        </span>
        <div>
          <button className="login-btn" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
export default LoginForm;
