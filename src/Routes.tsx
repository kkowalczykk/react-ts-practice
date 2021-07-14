import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import React, {ComponentType} from 'react';
import SecureLinkHomePage from "./exercises/secure-link/components/HomePage";
import SecureLinkLoginPage from "./exercises/secure-link/components/LoginPage";
import SecureLinkSecuredPage from "./exercises/secure-link/components/SecuredPage";
import SecureLink from "./exercises/secure-link/SecureLink";

interface CustomRoute {
    path: string,
    component: ComponentType,
    exact: boolean
}

const routes: CustomRoute[] = [
    {
        path: '/secure-link',
        component: SecureLinkHomePage,
        exact: true
    },
    {
        path: '/secure-link/login',
        component: SecureLinkLoginPage,
        exact: false
    }
]

const Routes = () => {
    return (
        <Router>
            <Switch>
                <SecureLink path="/secure-link/secured-page">
                    <SecureLinkSecuredPage/>
                </SecureLink>

                {
                    routes.map(({ path, component, exact }) =>
                        <Route exact={exact} component={component} path={path} key={path}/>
                    )
                }
            </Switch>


        </Router>
    );
};

export default Routes;