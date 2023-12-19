import React from "react";
import LoginText from "./components/LoginText";
import LoginForm from "./components/LoginForm";
import SignInOptions from "./components/SignInOptions";
import Register from "./components/Register";
const MyApp = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "row", height: "100vh" }}
      className="container"
    >
      <div>
        <img src="/skeleton.jpeg" style={{ height: "100vh" }}></img>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          

          <LoginText />

          <SignInOptions />

          <LoginForm />

          <Register />
        </div>
      </div>
    </div>
  );
};

export default MyApp;
