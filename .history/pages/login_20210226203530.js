import React from "react";
import GoogleLogin from "react-google-login";

function Login(props) {
  responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
  };

  return (
    <div>
      <GoogleLogin
        clientId=""
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}

export default Login;
