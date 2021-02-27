import React from "react";
import { GoogleLogin } from "react-google-login";

constclientId =
  "69154705025-cgtam3lahpqd999fa8ua4fabsgc4bl53.apps.googleusercontent.com";

function Login(props) {
  //   function responseGoogle(response) {
  //     console.log(response);
  //     console.log(response.profileObj);
  //   }

  function responseGoogle(response) {}

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}

export default Login;
