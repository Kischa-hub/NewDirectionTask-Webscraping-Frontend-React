import React from "react";
import { GoogleLogin } from "react-google-login";

constclientId =
  "69154705025-cgtam3lahpqd999fa8ua4fabsgc4bl53.apps.googleusercontent.com";

function Login(props) {
  //   function responseGoogle(response) {
  //     console.log(response);
  //     console.log(response.profileObj);
  //   }

  constonSuccess = (response) => {
    console.log(response.profileObj);
  };

  onFailure = (response) => {
    console.log(response);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}

export default Login;
