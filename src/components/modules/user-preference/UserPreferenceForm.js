import React, {useRef} from "react";
import {Button, Col, Form, InputNumber, Row} from "antd";

//TODO - setar initialValues
const UserPreferenceForm = () => {

    const formRef = useRef();

    const handleSubmit = (formValues) => {

    }

    const handleReset = () => {
        formRef.current.resetFields();
    }

    const rules = {
        'orderTimeWeight': [{required: true}],
        'orderTimeTolerance': [{required: true}],
        'distanceWeight': [{required: true}],
        'distanceTolerance': [{required: true}],
    };

    const layout = {
        labelCol: { span: 24 },
        wrapperCol: { span: 24 },
    };

    const inputStyle = {
        style: {width: '100%'}
    }

    return (
        <Form {...layout} ref={formRef} name="control-ref" onFinish={handleSubmit}>
            <Row gutter={32}>
                <Col span={6}>
                    <h3>Weight</h3>

                    <Form.Item name="orderTimeWeight" label="Order Time Weight" rules={rules['orderTimeWeight']}>
                        <InputNumber {...inputStyle } />
                    </Form.Item>

                    <Form.Item name="distanceWeight" label="Distance Weight" rules={rules['distanceWeight']}>
                        <InputNumber {...inputStyle } />
                    </Form.Item>
                </Col>

                <Col span={6}>
                    <h3>Tolerances</h3>

                    <Form.Item name="orderTimeTolerance" label="Order Time Tolerance" rules={rules['orderTimeTolerance']}>
                        <InputNumber {...inputStyle } />
                    </Form.Item>

                    <Form.Item name="distanceTolerance" label="Distance Tolerance" rules={rules['distanceTolerance']}>
                        <InputNumber {...inputStyle } />
                    </Form.Item>
                </Col>
            </Row>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                <Button htmlType="button" onClick={handleReset}>
                    Reset
                </Button>
            </Form.Item>
        </Form>
    )
}

export default UserPreferenceForm;