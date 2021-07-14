import React, {ReactNode} from 'react';
import {Redirect, Route, useLocation} from "react-router";
import {isTokenValid} from "./utils";

interface SecureLinkProps {
    children: ReactNode;
    path: string;
}

const SecureLink = ({ children, path }: SecureLinkProps) => {

    //get token from query
    const { search } = useLocation();
    const URLParams = new URLSearchParams(search);
    const token: string | null = URLParams.get("token");

    //If token is incorrect -> redirect to login page
    if(!isTokenValid(token))
        return <Redirect to="/secure-link/login"/>

    //If token is correct -> go to the path
    return <Route path={path}>{children}</Route>
};

export default SecureLink;