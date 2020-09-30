import { createStore } from 'easy-peasy';

import { loginModel } from './models/loginModel';
import { orderModel } from './models/orderModel';

const storeModel = { loginModel, orderModel };

export const store = createStore(storeModel);
