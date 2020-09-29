import React from "react";
import {useStoreActions} from "easy-peasy";
import {withRouter} from "react-router";
import {Button, Card, Col, Form, Row} from "antd";
import Input from "antd/es/input";
import {showErrorNotification} from "../../../util/notifications";

const LoginContainer = ({history}) => {

    const {doLogin} = useStoreActions(state => state.loginModel);

    const handleLogin = (formValues) => {
        doLogin(formValues)
            .then(() => history.push('/'))
            .catch(error => {
                console.error(error);
                showErrorNotification('Invalid Login')
            });
    };

    const rules = {
        'email': [{required: true, message: 'Please input your e-mail!'}],
        'password': [{ required: true, message: 'Please input your password!' }]
    };

    const layout = {
        labelCol: { span: 24 },
        wrapperCol: { span: 24 },
    };

    return (
        <Row align={'middle'} className={'login-content'}>
            <Col span={8} offset={8}>
                <Card title={'Login'}>
                    <Form onFinish={handleLogin}>
                        <Form.Item label={'E-mail'} name={'email'} rules={rules['email']} {...layout}>
                            <Input />
                        </Form.Item>

                        <Form.Item label={'Password'} name={'password'} rules={rules['password']} {...layout}>
                            <Input.Password />
                        </Form.Item>

                        <Form.Item>
                            <Button type={'primary'} htmlType={'submit'}>
                                Login
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Col>
        </Row>
    )

};

export default withRouter(LoginContainer);