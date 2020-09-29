import React, {useEffect, useState} from "react";
import {getData} from "../../../api/api";
import {RECOMMEND_URL} from "../../../api/api-url-consts";
import {showErrorNotification} from "../../../util/notifications";

import RestaurantList from "./RestaurantList";
import RestaurantDetail from "./RestaurantDetail";

//TODO - Filtro
const RestaurantContainer = () => {

    const [LIST, DETAIL] = ['LIST', 'DETAIL'];

    const [dataset, setDataset] = useState([]);
    const [detailItem, setDetailItem] = useState([]);
    const [visualization, setVisualization] = useState(LIST);

    useEffect(() => {
        getData(RECOMMEND_URL + '?params=[10,false,10,20,15,null,null]')
            .then(result => setDataset(result.data))
            .catch(error => {
                console.error(error);
                showErrorNotification('Error on Load Restaurants');
            });
    }, []);

    const toggleVisualization = () => setVisualization(visualization => visualization === LIST ? DETAIL : LIST);

    const handleDetail = (item) => {
        setDetailItem(item);
        toggleVisualization()
    };

    return (visualization === LIST)
            ? <RestaurantList dataset={dataset} handleDetail={handleDetail} />
            : <RestaurantDetail item={detailItem} handleBack={toggleVisualization} />
};

export default RestaurantContainer;
