import React from "react";
const SignInOptions = () =>{
    return(
        <div>
            <div className="google">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png"
              height={"25px"}
            ></img>
            <p
              style={{
                marginLeft: "5px",
                fontSize: "14px",
                fontWeight: "700",
                color: "#828282",
              }}
            >
              Continue with Google
            </p>
          </div>
          <div className="signin-email">
            <a href="#">
            <p>------------- or Sign in with Email -------------</p>
            </a>
          </div>
        </div>
    )
}

export default SignInOptions;