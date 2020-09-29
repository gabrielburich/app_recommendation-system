import React from "react";
import App from "./App";
import {Route, withRouter} from "react-router";
import "./theme/theme.less";

import LoginContainer from "@modules/login/LoginContainer";

const AppWrapper = ({history}) => (
    <>
        {(history.location.pathname === '/login')
                ? <Route path={'/login'} component={LoginContainer} />
                : <App />
        }
    </>
);

export default withRouter(AppWrapper);
