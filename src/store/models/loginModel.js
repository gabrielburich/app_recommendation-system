import {action, thunk} from "easy-peasy";
import axios from "axios";
import {TOKEN_URL} from "../../api/api-url-consts";

export const loginModel = {

    token: sessionStorage.getItem('1') || '',

    doLogin: thunk(async (actions, payload) => {
        const result = await axios.post(TOKEN_URL, payload);
        actions.addToken(result.data.token);
    }),

    addToken: action((state, payload) => {
        state.token = payload;
        sessionStorage.setItem('1', payload);
    }),

    removeToken: action((state) => {
        state.token = '';
        sessionStorage.setItem('1', '');
    })

};