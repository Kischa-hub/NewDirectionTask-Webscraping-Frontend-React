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
        clientId="69154705025-cgtam3lahpqd999fa8ua4fabsgc4bl53.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}

export default Login;
