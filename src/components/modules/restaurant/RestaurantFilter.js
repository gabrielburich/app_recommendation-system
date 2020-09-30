import React, {useEffect, useState} from "react";
import {Button, Card, Checkbox, Form, InputNumber, Select} from "antd";
import {getData} from "../../../api/api";
import {TYPE_ORDER_URL, TYPE_RESTAURANT_URL} from "../../../api/api-url-consts";
import {firstLetterUpper} from "@utils";

const RestaurantFilter = ({initialFilter, onFilter}) => {

    const [restaurantTypes, setRestaurantTypes] = useState([]);
    const [orderTypes, setOrderTypes] = useState([]);

    useEffect(() => {
        getData(TYPE_RESTAURANT_URL).then(result => setRestaurantTypes(result.data))
        getData(TYPE_ORDER_URL).then(result => setOrderTypes(result.data))
    }, []);

    const renderOption = (data) => (
        <Select.Option value={data.id} key={data.id}>{firstLetterUpper(data.name)}</Select.Option>
    )

    const itemLayout = {
        labelCol: { span: 24 },
        wrapperCol: { span: 24 },
    };

    return (
        <Card title={'Filter'}>
            <Form
                layout={'horizontal'}
                initialValues={initialFilter}
                onFinish={onFilter}
            >
                <Form.Item name={'pageSize'} label={'Register Quantity'} wrapperCol={24} {...itemLayout}>
                    <InputNumber className={'full-width'} min={1} />
                </Form.Item>

                <Form.Item name={'acceptsMealVoucher'} label={'Accepts Meal Voucher'} valuePropName="checked">
                    <Checkbox />
                </Form.Item>

                <Form.Item name={'typeRestaurantId'} label={'Type Restaurant'} {...itemLayout}>
                    <Select>
                        {restaurantTypes.map(renderOption)}
                    </Select>
                </Form.Item>

                <Form.Item name={'orderTime'} label={'Order Time'} {...itemLayout}>
                    <InputNumber className={'full-width'} min={1} />
                </Form.Item>

                <Form.Item name={'distance'} label={'Distance'} {...itemLayout}>
                    <InputNumber className={'full-width'} min={1} />
                </Form.Item>

                <Form.Item name={'typeOrderId'} label={'Type Order'} {...itemLayout}>
                    <Select>
                        {orderTypes.map(renderOption)}
                    </Select>
                </Form.Item>

                <Form.Item name={'sitPlace'} label={'Place to Sit'} valuePropName="checked">
                    <Checkbox />
                </Form.Item>

                <Form.Item>
                    <Button htmlType={'submit'} type={'primary'} className={'mr-10'}>
                        Filter
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    )
}

export default RestaurantFilter;