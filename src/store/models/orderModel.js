import { action, thunk, thunkOn } from 'easy-peasy';
import { postData } from '@api/api';
import { ORDER_URL } from '@api/api-url-consts';
import { showSuccessNotification, showErrorNotification } from '@utils/notifications';
import { getData } from '../../api/api';

export const orderModel = {
    orders: [],

    addOrder: action((state, payload) => {
        state.orders.push(payload);
    }),

    setOrders: action((state, payload) => {
        state.orders = payload;
    }),

    saveOrder: thunk((actions, payload) => {
        postData(ORDER_URL, payload)
            .then(() => showSuccessNotification('Order Save'))
            .catch((error) => {
                console.error(error);
                showErrorNotification('Error on Save Order');
            });
    }),

    fetchOrders: thunk((actions) => {
        getData(ORDER_URL)
            .then((result) => actions.setOrders(result.data))
            .catch((error) => {
                console.error(error);
                showErrorNotification('Error on Load Orders');
            });
    }),

    onAddOrder: thunkOn(
        (actions) => actions.addOrder,
        (actions, target) => {
            actions.saveOrder(target.payload);
        }
    ),

    onLogin: thunkOn(
        (actions, storeActions) => storeActions.loginModel.addToken,
        (actions) => {
            actions.fetchOrders();
        }
    ),
};
