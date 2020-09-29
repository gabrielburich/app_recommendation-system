import {createStore} from "easy-peasy";

import {loginModel} from "./models/loginModel";

const storeModel = {loginModel};

export const store = createStore(storeModel);