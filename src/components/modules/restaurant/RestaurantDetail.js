import React, { useEffect, useState } from 'react';
import { Button, Col, Divider, Descriptions, List, Modal, PageHeader, Row } from 'antd';
import { getData } from '../../../api/api';
import { RESTAURANT_URL } from '../../../api/api-url-consts';
import { showErrorNotification } from '../../../util/notifications';

const ListItem = List.Item;
const ItemMeta = List.Item.Meta;
const DescriptionsItem = Descriptions.Item;

const RestaurantDetail = ({ item, handleBack, handleBuy }) => {
    const [restaurant, setRestaurant] = useState();

    useEffect(() => {
        getData(RESTAURANT_URL + item.id)
            .then((result) => setRestaurant(result.data))
            .catch((error) => {
                console.error(error);
                showErrorNotification('Error on Load Restaurant');
            });
    }, []); //eslint-disable-line

    const handleConfirmBuy = (meal) => {
        Modal.confirm({
            title: 'Are you sure you want to buy the product?',
            content: (
                <Descriptions title={item.name} size={'small'} column={1} bordered={true}>
                    <DescriptionsItem label={'Name'}>{meal.name}</DescriptionsItem>
                    <DescriptionsItem label={'Description'}>{meal.description}</DescriptionsItem>
                    <DescriptionsItem label={'Price'}>{meal.price}</DescriptionsItem>
                </Descriptions>
            ),
            onOk: () => {
                handleBuy && handleBuy(item.id, meal);
            },
        });
    };

    const renderItem = (item) => (
        <ListItem
            actions={[
                <Button type={'link'} onClick={() => handleConfirmBuy(item)}>
                    Buy
                </Button>,
            ]}
            extra={`$${item.price}`}
        >
            <ItemMeta title={item.name} description={item.description} />
        </ListItem>
    );

    return (
        <Row>
            <Col span={24}>
                <PageHeader title={item.name} subTitle={item.type} onBack={handleBack} />
            </Col>
            <Col span={24}>
                <Divider />
                {restaurant && <List className={'app-list'} dataSource={restaurant.meals} renderItem={renderItem} />}
            </Col>
        </Row>
    );
};

export default RestaurantDetail;
