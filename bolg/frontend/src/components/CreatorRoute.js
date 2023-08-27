import React from 'react'

 import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';


    const CreatorRoute = ({ User }) => {

    const { userInfo } = useSelector((state) => state.signIn);
    return userInfo && userInfo.role === 'creator' ? User : <Navigate to="/" />;
}

export default CreatorRoute