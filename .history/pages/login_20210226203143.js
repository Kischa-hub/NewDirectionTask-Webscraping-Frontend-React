import React from "react";
import GoogleLogin from "react-google-login";

function Login(props) {
  return (
    <div>
      <GoogleLogin
        clientId=""
        buttonText="Login"
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
      />
    </div>
  );
}

export default Login;
