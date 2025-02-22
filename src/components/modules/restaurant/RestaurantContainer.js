import React, { useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import { getData } from '@api/api';
import { RECOMMEND_URL } from '@api/api-url-consts';
import { showErrorNotification } from '@utils/notifications';

import RestaurantList from './RestaurantList';
import RestaurantDetail from './RestaurantDetail';
import RestaurantFilter from './RestaurantFilter';
import { useStoreActions } from 'easy-peasy';

const RestaurantContainer = () => {
    const [LIST, DETAIL] = ['LIST', 'DETAIL'];

    const initialFilter = {
        pageSize: 10,
        acceptsMealVoucher: false,
        typeRestaurantId: 1,
        orderTime: 20,
        distance: 15,
        typeOrderId: 1,
        sitPlace: false,
    };

    const addOrder = useStoreActions((actions) => actions.orderModel.addOrder);

    const [dataset, setDataset] = useState([]);
    const [detailItem, setDetailItem] = useState([]);
    const [visualization, setVisualization] = useState(LIST);
    const [filter, setFilter] = useState(initialFilter);

    const toggleVisualization = () => setVisualization((visualization) => (visualization === LIST ? DETAIL : LIST));

    const parseFilter = (filter) => {
        const { pageSize, acceptsMealVoucher, typeRestaurantId, orderTime, distance, typeOrderId, sitPlace } = filter;
        return `?params=[${pageSize},${acceptsMealVoucher},${typeRestaurantId},${orderTime},${distance},${typeOrderId},${sitPlace}]`;
    };

    const getDataset = (filter = initialFilter) => {
        setVisualization(LIST);
        getData(RECOMMEND_URL + parseFilter(filter))
            .then((result) => setDataset(result.data))
            .catch((error) => {
                console.error(error);
                showErrorNotification('Error on Load Restaurants');
            });
    };

    const handleDetail = (item) => {
        setDetailItem(item);
        toggleVisualization();
    };

    const handleFilter = (filterValues) => {
        setFilter(filterValues);
        getDataset(filterValues);
    };

    const handleBuy = (restaurantId, meal) => addOrder({ restaurantId, meal, filter });

    useEffect(() => {
        getDataset();
    }, []); //eslint-disable-line

    return (
        <Row gutter={32}>
            <Col span={6}>
                <RestaurantFilter filter={filter} onFilter={handleFilter} />
            </Col>
            <Col span={18}>
                {visualization === LIST ? (
                    <RestaurantList dataset={dataset} handleDetail={handleDetail} />
                ) : (
                    <RestaurantDetail item={detailItem} handleBack={toggleVisualization} handleBuy={handleBuy} />
                )}
            </Col>
        </Row>
    );
};

export default RestaurantContainer;
