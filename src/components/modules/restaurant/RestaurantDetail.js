import React from "react";
import {Col, PageHeader, Row} from "antd";

const RestaurantDetail = ({item, handleBack}) => {

    return (
        <Row>
            <Col span={24}>
                <PageHeader
                    title={item.name}
                    subTitle={item.type}
                    onBack={handleBack}
                />
            </Col>
        </Row>
    )

};

export default RestaurantDetail;