import React from "react";
import { GoogleLogout } from "react-google-login";

const clientId =
  "69154705025-cgtam3lahpqd999fa8ua4fabsgc4bl53.apps.googleusercontent.com";

function Logout(props) {
  return (
    <div>
      <GoogleLogout />
    </div>
  );
}

export default Logout;
