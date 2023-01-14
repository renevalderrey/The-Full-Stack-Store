import React from "react";
import Header from "../Header/Header";
import NavbarMain from "../NavbarMain/NavbarMain";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../Redux/action";

const UserProfile = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    console.log(user)
    useEffect(() => {
        dispatch(getUsers())
    }, [])

    return (
        <>
            <Header />
            <NavbarMain />
            <h1>User Profile</h1>
        </>
    )
}

export default UserProfile;