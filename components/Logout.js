import React from "react";
import { GoogleLogout } from "react-google-login";
import Router from "next/router";

const clientId =
  "69154705025-cgtam3lahpqd999fa8ua4fabsgc4bl53.apps.googleusercontent.com";

function Logout(props) {
  const onLogoutSuccess = () => {
    // alert("Logout Successfully ");
    Router.push("/");
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Abmelden"
        onLogoutSuccess={onLogoutSuccess}
      />
    </div>
  );
}

export default Logout;
