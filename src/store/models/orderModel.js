import { action } from 'easy-peasy';

//onThunk para salvar no backend
export const orderModel = {
    orders: [],

    addOrder: action((state, payload) => {
        state.orders.push(payload);
    }),
};
