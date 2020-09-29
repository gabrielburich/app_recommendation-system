import React from 'react';
import ReactDOM from 'react-dom';
import {StoreProvider} from "easy-peasy";
import {store} from "./store/store";
import {BrowserRouter} from "react-router-dom";

import AppWrapper from "./AppWrapper";

ReactDOM.render(
    <StoreProvider store={store}>
        <BrowserRouter>
            <AppWrapper />
        </BrowserRouter>
    </StoreProvider>
, document.getElementById('root')
);
