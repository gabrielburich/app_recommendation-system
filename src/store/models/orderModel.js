import { action, thunk, thunkOn } from 'easy-peasy';
import { postData } from '@api/api';
import { ORDER_URL } from '@api/api-url-consts';
import { showSuccessNotification, showErrorNotification } from '@utils/notifications';

export const orderModel = {
    orders: [],

    addOrder: action((state, payload) => {
        state.orders.push(payload);
    }),

    saveOrder: thunk((actions, payload) => {
        postData(ORDER_URL, payload)
            .then(() => showSuccessNotification('Order Save'))
            .catch((error) => {
                console.error(error);
                showErrorNotification('Error on Save Order');
            });
    }),

    onAddOrder: thunkOn(
        (actions) => actions.addOrder,
        (actions, target) => {
            actions.saveOrder(target.payload);
        }
    ),
};
