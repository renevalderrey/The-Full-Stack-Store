import React, { useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
import { useSelector } from 'react-redux';

const Google = ({ handleClose }) => {
    const user = useSelector(state => state.user)

    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: process.env.REACT_APP_GOOGLE_ID,
                scope: ''
            });
        };
        gapi.load('client:auth2', initClient);
    });

    const onSuccess = (res) => {
        const userGoogle = { email: res.profileObj.email }
        user.push(userGoogle)
        alert("Sesión iniciada")
        handleClose()
    };

    const onFailure = (err) => {
        if (err.length > 0) alert('failed:', err);
    };

    return (
        <>
            <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_ID}
                buttonText="Inicia sesión con Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </>
    )
}

export default Google;