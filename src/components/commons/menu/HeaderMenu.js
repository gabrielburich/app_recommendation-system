import React from "react";
import {Menu} from "antd";
import {useStoreActions} from "easy-peasy";
import {HomeOutlined, SettingOutlined} from "@ant-design/icons";
import {withRouter} from "react-router";

const HeaderMenu = ({ history }) => {

    const {removeToken} = useStoreActions(state => state.loginModel);

    const actionByKey = {
        'logout': removeToken,
        'home': () => history.push('/'),
        'user-preference': () => history.push('/user-preference'),
    };

    const onClick = (item) => {
        const action = actionByKey[item.key];
        action && action();
    };

    return (
        <Menu mode={'horizontal'} theme={'dark'} onClick={onClick} className={'header-menu'}>
            <Menu.Item key={'home'}><HomeOutlined /> Home</Menu.Item>
            <Menu.Item key={'user-preference'}><SettingOutlined /> User Preference</Menu.Item>
            <Menu.Item key={'logout'}>Logout</Menu.Item>
        </Menu>
    )

};

export default withRouter(HeaderMenu);