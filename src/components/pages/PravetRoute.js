import React from 'react';
import { Navigate } from 'react-router';
import { isLogin } from '../../utils';
import { Outlet } from 'react-router-dom';

export default function PravetRoute(props) {
    return (
        <>
            {isLogin("panda") ? <Outlet /> : <Navigate to={"/login"} />}
        </>
    )
}