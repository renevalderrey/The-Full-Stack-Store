import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { useSelector } from 'react-redux';

const Google = ({ handleClose }) => {
  const user = useSelector((state) => state.user);

  const onSuccess = (res) => {
    user.push(res);
    alert("Sesión iniciada");
    handleClose()
    localStorage.setItem("user", JSON.stringify(res))
  };

  const onFailure = (err) => {
    if (err.length > 0) alert("failed:", err);
  };

  return (
    <>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_ID}
        buttonText="Inicia sesión con Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
      />
    </>
  );
};

export default Google;
