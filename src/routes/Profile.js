import React from "react";
import {getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const Profile = () => {
    const auth = getAuth();
    const navigate = useNavigate(); //Link는 특정주소로 이동해주는 태그라면, Navigate는 특정행동을 하였을 때 해당 주소로 이동
    const onLogoutClick = () => {
        signOut(auth).then(()=> {
            console.log('logout');
            navigate("/");  //Home으로 이동
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <button onClick={onLogoutClick}>Logout</button>
    )
}

export default Profile;