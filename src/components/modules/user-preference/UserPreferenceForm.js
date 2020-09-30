import React, {useEffect, useRef, useState} from "react";
import {Button, Col, Form, InputNumber, Row} from "antd";
import {getData, putData} from "../../../api/api";
import {USER_PREFERENCE_URL} from "../../../api/api-url-consts";
import {showErrorNotification, showSuccessNotification} from "@utils/notifications";
import {getUserFromToken} from "../../../store/models/loginModel";
import {useStoreState} from "easy-peasy";

const UserPreferenceForm = () => {

    const formRef = useRef();
    const token = useStoreState(state => state.loginModel.token);

    const [initialValues, setInitialValues] = useState(null);
    const [loggedUser] = useState(getUserFromToken(token));

    useEffect(() => {
        getData(USER_PREFERENCE_URL + loggedUser.id)
            .then(result => setInitialValues(result.data))
            .catch(error => {
                console.error(error);
                showErrorNotification('Error on Load User Preferences');
            });
    }, [token, loggedUser]);

    const handleSubmit = (formValues) => {
        putData(USER_PREFERENCE_URL, loggedUser.id, formValues)
            .then(() => {
                showSuccessNotification('User Preference updated');
            })
            .catch(error => {
                console.error(error);
                showErrorNotification('Error on Save User Preferences');
            });
    }

    const handleReset = () => formRef.current.resetFields();

    const rules = {
        'orderTimeWeight': [{required: true}],
        'orderTimeTolerance': [{required: true}],
        'distanceWeight': [{required: true}],
        'distanceTolerance': [{required: true}],
    };

    const weightInputProps = {step: 0.1, min: 0.1, max: 0.9}

    const layout = {
        labelCol: { span: 24 },
        wrapperCol: { span: 24 },
    };

    return (
        <>
            {initialValues !== null && (
                <Form {...layout} ref={formRef} initialValues={initialValues} onFinish={handleSubmit}>
                    <Row gutter={32}>
                        <Col span={6}>
                            <h3>Weight</h3>

                            <Form.Item name={'orderTimeWeight'} label={'Order Time Weight'} rules={rules['orderTimeWeight']}>
                                <InputNumber className={'full-width'} {...weightInputProps} />
                            </Form.Item>

                            <Form.Item name={'distanceWeight'} label={'Distance Weight'} rules={rules['distanceWeight']}>
                                <InputNumber className={'full-width'} {...weightInputProps} />
                            </Form.Item>
                        </Col>

                        <Col span={6}>
                            <h3>Tolerances</h3>

                            <Form.Item name={'orderTimeTolerance'} label={'Order Time Tolerance'} rules={rules['orderTimeTolerance']}>
                                <InputNumber className={'full-width'} />
                            </Form.Item>

                            <Form.Item name={'distanceTolerance'} label={'Distance Tolerance'} rules={rules['distanceTolerance']}>
                                <InputNumber className={'full-width'} />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Form.Item>
                        <Button htmlType={'submit'} type={'primary'} className={'mr-10'}>
                            Submit
                        </Button>
                        <Button htmlType="button" onClick={handleReset}>
                            Reset
                        </Button>
                    </Form.Item>
                </Form>
            )}
        </>
    )
}

export default UserPreferenceForm;