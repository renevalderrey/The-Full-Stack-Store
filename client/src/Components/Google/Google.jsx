import React, { useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
import { useSelector } from 'react-redux';

const Google = () => {
    const user = useSelector(state => state.user)

    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: "129986506445-9mk1sot3aovnkj0gokj1dirgg2bposhh.apps.googleusercontent.com",
                scope: ''
            });
        };
        gapi.load('client:auth2', initClient);
    });

    const onSuccess = (res) => {
        user.push(res.profileObj.email)
        alert("Sesión iniciada")
    };

    const onFailure = (err) => {
        alert('failed:', err);
    };

    return (
        <>
            <GoogleLogin
                clientId="129986506445-9mk1sot3aovnkj0gokj1dirgg2bposhh.apps.googleusercontent.com"
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