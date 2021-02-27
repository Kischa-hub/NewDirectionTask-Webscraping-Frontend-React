import React from "react";
import { GoogleLogin } from "react-google-login";

const clientId =
  "69154705025-cgtam3lahpqd999fa8ua4fabsgc4bl53.apps.googleusercontent.com";

function Login(props) {
  //   function responseGoogle(response) {
  //     console.log(response);
  //     console.log(response.profileObj);
  //   }

  const onSuccess = (response) => {
    console.log(response.profileObj);
  };

  const onFailure = (response) => {
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
        style={{ marginTop: "100px" }}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
