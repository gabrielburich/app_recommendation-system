import React from 'react';
import { List } from 'antd';
import { useStoreState } from 'easy-peasy';

const ListItem = List.Item;
const ItemMeta = List.Item.Meta;

const OrderList = () => {
    const orders = useStoreState((state) => state.orderModel.orders);

    const renderItem = (item) => (
        <ListItem extra={`$${item.meal.price}`}>
            <ItemMeta title={item.meal.name} description={item.meal.description} />
        </ListItem>
    );

    return <List className={'app-list'} header={'Orders'} dataSource={orders} renderItem={renderItem} />;
};

export default OrderList;
