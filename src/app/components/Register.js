import React from "react";
 
const Register = () => {
    return(
        <div>
            <span
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginTop: "20%",
            }}
          >
            <p
              style={{ fontSize: "13px", fontWeight: "600", color: "#828282" }}
            >
              Not registered yet?
            </p>{" "}
            <a link href="#" style={{ fontSize: "13px", marginLeft: "5px" }}>
              Create an account
            </a>
          </span>
        </div>
    )
}
export default Register