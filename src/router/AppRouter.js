import React from "react";
import {Redirect, Route, Switch} from "react-router";
import {useStoreState} from "easy-peasy";

import RestaurantContainer from "@modules/restaurant/RestaurantContainer";

const AppRouter = () => {

    const {token} = useStoreState(state => state.loginModel);

    const isAuthenticated = () => token !== '';

    const PrivateRoute = ({component: Component, ...rest}) => (
        <Route
            {...rest}
            render={props => (
                isAuthenticated()
                    ? (<Component {...props} />)
                    : <Redirect to={{pathname: '/login', state: {from: props.location}}} />
            )}
        />
    );

    return (
        <Switch>
            <PrivateRoute path={'/'} exact={true} component={RestaurantContainer} />
        </Switch>
    );
};

export default AppRouter;
