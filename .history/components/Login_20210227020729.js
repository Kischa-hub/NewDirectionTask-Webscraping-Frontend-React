import React from "react";
import { GoogleLogin } from "react-google-login";
import Router from "next/router";

const clientId =
  "69154705025-cgtam3lahpqd999fa8ua4fabsgc4bl53.apps.googleusercontent.com";

function Login(props) {
  const onSuccess = (response) => {
    //console.log(response.profileObj);
    Router.push("/SearchForm");
  };

  const onFailure = (response) => {
    console.log(response);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Anmelden"
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
